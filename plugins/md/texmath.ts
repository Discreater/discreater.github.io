/* eslint-disable regexp/no-super-linear-backtracking */
import type markdownIt from 'markdown-it';
import type { RuleBlock } from 'markdown-it/lib/parser_block.mjs';
import type { RuleInline } from 'markdown-it/lib/parser_inline.mjs';
import type StateBlock from 'markdown-it/lib/rules_block/state_block.mjs';
import type StateInline from 'markdown-it/lib/rules_inline/state_inline.mjs';
import Katex from 'katex';

/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Stefan Goessner - 2017-22. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
function escapeHTML(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/\//g, '&sol;');
}

interface Rule {
  name: string
  rex: RegExp
  tmpl: string
  tag: string
  spaceEnclosed?: boolean
  outerSpace?: boolean
  displayMode?: boolean
  pre?: any
  post?: any
}

const texmathRules: {
  [key: string]: {
    inline: Rule[]
    block: Rule[]
  }
} = {
  brackets: {
    inline: [
      {
        name: 'math_inline',
        rex: /\\\((.+?)\\\)/gy,
        tmpl: '<eq>$1</eq>',
        tag: '\\(',
      },
    ],
    block: [
      { name: 'math_block_eqno', rex: /\\\[(((?!\\\]|\\\[)[\s\S])+?)\\\]\s*\(([^)$\r\n]+)\)/gy, tmpl: '<span class="eqno"><eqn>$1</eqn><span>($2)</span></span>', tag: '\\[' },
      { name: 'math_block', rex: /\\\[([\s\S]+?)\\\]/gy, tmpl: '<span><eqn>$1</eqn></span>', tag: '\\[' },
    ],
  },
  doxygen: {
    inline: [
      {
        name: 'math_inline',
        rex: /\\f\$(.+?)\\f\$/gy,
        tmpl: '<eq>$1</eq>',
        tag: '\\f$',
      },
    ],
    block: [
      { name: 'math_block_eqno', rex: /\\f\[([\s\S]+?)\\f\]\s*\(([^)\s]+)\)/gy, tmpl: '<span class="eqno"><eqn>$1</eqn><span>($2)</span></span>', tag: '\\f[' },
      { name: 'math_block', rex: /\\f\[([\s\S]+?)\\f\]/gy, tmpl: '<span><eqn>$1</eqn></span>', tag: '\\f[' },
    ],
  },
  gitlab: {
    inline: [
      {
        name: 'math_inline',
        rex: /\$`(.+?)`\$/gy,
        tmpl: '<eq>$1</eq>',
        tag: '$`',
      },
    ],
    block: [
      { name: 'math_block_eqno', rex: /`{3}math\s*([^`]+?)\s*`{3}\s*\(([^)\r\n]+)\)/g, tmpl: '<span class="eqno"><eqn>$1</eqn><span>($2)</span></span>', tag: '```math' },
      { name: 'math_block', rex: /`{3}math\s*([^`]*?)\s*`{3}/g, tmpl: '<span><eqn>$1</eqn></span>', tag: '```math' },
    ],
  },
  julia: {
    inline: [
      {
        name: 'math_inline',
        rex: /`{2}([^`]+)`{2}/gy,
        tmpl: '<eq>$1</eq>',
        tag: '``',
      },
      { name: 'math_inline', rex: /\$(\S?|\S.*?\S)\$/gy, tmpl: '<eq>$1</eq>', tag: '$', spaceEnclosed: false, pre: texmathPre, post: texmathPost },
    ],
    block: [
      { name: 'math_block_eqno', rex: /`{3}math\s+?([^`]+?)\s+`{3}\s*\(([^)$\r\n]+)\)/gy, tmpl: '<span class="eqno"><eqn>$1</eqn><span>($2)</span></span>', tag: '```math' },
      { name: 'math_block', rex: /`{3}math\s+?([^`]+?)\s+`{3}/gy, tmpl: '<span><eqn>$1</eqn></span>', tag: '```math' },
    ],
  },
  kramdown: {
    inline: [
      {
        name: 'math_inline',
        rex: /\${2}(.+?)\${2}/gy,
        tmpl: '<eq>$1</eq>',
        tag: '$$',
      },
    ],
    block: [
      { name: 'math_block_eqno', rex: /\${2}([^$]+)\${2}\s*\(([^)\s]+)\)/gy, tmpl: '<span class="eqno"><eqn>$1</eqn><span>($2)</span></span>', tag: '$$' },
      { name: 'math_block', rex: /\${2}([^$]+)\${2}/gy, tmpl: '<span><eqn>$1</eqn></span>', tag: '$$' },
    ],
  },
  beg_end: {
    inline: [],
    block: [
      {
        name: 'math_block',
        rex: /(\\begin\{([a-z]+)\}[\s\S]+?\\end\{\2\})/gy, // regexp to match \begin{...}...\end{...} environment.
        tmpl: '<span><eqn>$1</eqn></span>',
        tag: '\\',
      },
    ],
  },
  dollars: {
    inline: [
      {
        name: 'math_inline_double',
        rex: /\${2}([^$]*?[^\\])\${2}/gy,
        tmpl: '<span><eqn>$1</eqn></span>',
        tag: '$$',
        displayMode: true,
        pre: texmathPre,
        post: texmathPost,
      },
      {
        name: 'math_inline',
        rex: /\$([^\s\\]|\S.*?[^\s\\])\$/gy,
        tmpl: '<eq>$1</eq>',
        tag: '$',
        outerSpace: false,
        pre: texmathPre,
        post: texmathPost,
      },
    ],
    block: [
      { name: 'math_block_eqno', rex: /\${2}([^$]*?[^\\])\${2}\s*\(([^)\s]+)\)/gy, tmpl: '<span class="eqno"><eqn>$1</eqn><span>($2)</span></span>', tag: '$$' },
      { name: 'math_block', rex: /\${2}([^$]*?[^\\])\${2}/gy, tmpl: '<span><eqn>$1</eqn></span>', tag: '$$' },
    ],
  },
};

function mergeDelimiters(delims: any) {
  const delimsArr = Array.isArray(delims)
    ? delims
    : typeof delims === 'string'
      ? [delims]
      : ['dollars'];
  const delimiters: {
    inline: Rule[]
    block: Rule[]
  } = { inline: [], block: [] }; // target of merge process ...

  for (const delim of delimsArr) { // merge them into delimiters ...
    if (delim in texmathRules) {
      delimiters.inline.push(...texmathRules[delim].inline);
      delimiters.block.push(...texmathRules[delim].block);
    }
  }

  return delimiters;
};

// texmath.inline = (rule) => dollar;  // just for debugging/testing ..

function texmathInline(rule: Rule): RuleInline {
  return function (state, silent) {
    const pos = state.pos;
    const str = state.src;
    const pre = str.startsWith(rule.tag, rule.rex.lastIndex = pos) && (!rule.pre || rule.pre(str, rule.outerSpace, pos)); // valid pre-condition ...
    const match = pre && rule.rex.exec(str);
    const res = !!match && pos < rule.rex.lastIndex && (!rule.post || rule.post(str, rule.outerSpace, rule.rex.lastIndex - 1));

    if (res) {
      if (!silent) {
        const token = state.push(rule.name, 'math', 0);
        token.content = match[1];
        token.markup = rule.tag;
      }
      state.pos = rule.rex.lastIndex;
    }
    return res;
  };
}

function texmathBlock(rule: Rule): RuleBlock {
  return (state, begLine, endLine, silent) => {
    const pos = state.bMarks[begLine] + state.tShift[begLine];
    const str = state.src;
    const pre = str.startsWith(rule.tag, rule.rex.lastIndex = pos) && (!rule.pre || rule.pre(str, false, pos)); // valid pre-condition ....
    const match = pre && rule.rex.exec(str);
    const res = !!match
      && pos < rule.rex.lastIndex
      && (!rule.post || rule.post(str, false, rule.rex.lastIndex - 1));

    if (res && !silent) { // match and valid post-condition ...
      const endpos = rule.rex.lastIndex - 1;
      let curline;

      for (curline = begLine; curline < endLine; curline++) {
        if (endpos >= state.bMarks[curline] + state.tShift[curline] && endpos <= state.eMarks[curline]) // line for end of block math found ...
          break;
      }

      // "this will prevent lazy continuations from ever going past our end marker"
      // s. https://github.com/markdown-it/markdown-it-container/blob/master/index.js
      const lineMax = state.lineMax;
      const parentType = state.parentType;
      state.lineMax = curline;
      // @ts-expect-error should
      state.parentType = 'math';

      if (parentType === 'blockquote') // remove all leading '>' inside multiline formula
        match[1] = match[1].replace(/(\n*?^(?:\s*>)+)/gm, '');
      // begin token
      const token = state.push(rule.name, 'math', 0); // 'math_block'
      token.block = true;
      token.tag = rule.tag;
      token.markup = '';
      token.content = match[1];
      token.info = match[match.length - 1]; // eq.no
      token.map = [begLine, curline + 1];
      //            token.hidden = true;
      // end token ... superfluous ...

      state.parentType = parentType;
      state.lineMax = lineMax;
      state.line = curline + 1;
    }
    return res;
  };
}

function texmathRender(tex: string, displayMode: boolean, options: any) {
  options.displayMode = displayMode;
  let res;
  try {
    res = Katex.renderToString(tex, options);
  } catch (err) {
    res = escapeHTML(`${tex}:${(err as any).message}`);
  }
  return res;
};

/*
function dollar(state, silent) {
  var start, max, marker, matchStart, matchEnd, token,
      pos = state.pos,
      ch = state.src.charCodeAt(pos);

  if (ch !== 0x24) { return false; }  // $

  start = pos;
  pos++;
  max = state.posMax;

  while (pos < max && state.src.charCodeAt(pos) === 0x24) { pos++; }

  marker = state.src.slice(start, pos);

  matchStart = matchEnd = pos;

  while ((matchStart = state.src.indexOf('$', matchEnd)) !== -1) {
    matchEnd = matchStart + 1;

    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x24) { matchEnd++; }

    if (matchEnd - matchStart === marker.length) {
      if (!silent) {
        token         = state.push('math_inline', 'math', 0);
        token.markup  = marker;
        token.content = state.src.slice(pos, matchStart)
                                 .replace(/[ \n]+/g, ' ')
                                 .trim();
      }
      state.pos = matchEnd;
      return true;
    }
  }

  if (!silent) { state.pending += marker; }
  state.pos += marker.length;
  return true;
};
*/

// used for enable/disable math rendering by `markdown-it`
const _texmathInlineRuleNames = ['math_inline', 'math_inline_double'];
const _texmathBlockRuleNames = ['math_block', 'math_block_eqno'];

function texmathPre(str: string, outerSpace: boolean, beg: number) {
  const prv = beg > 0 ? str[beg - 1].charCodeAt(0) : false;
  return outerSpace ? !prv || prv === 0x20 // space  (avoiding regex's for performance reasons)
    : !prv || prv !== 0x5C // no backslash,
    && (prv < 0x30 || prv > 0x39); // no decimal digit .. before opening '$'
};
function texmathPost(str: string, outerSpace: boolean, end: number) {
  const nxt = str[end + 1] && str[end + 1].charCodeAt(0);
  return outerSpace ? !nxt || nxt === 0x20 // space  (avoiding regex's for performance reasons)
    || nxt === 0x2E // '.'
    || nxt === 0x2C // ','
    || nxt === 0x3B // ';'
    : !nxt || nxt < 0x30 || nxt > 0x39; // no decimal digit .. after closing '$'
};

export function markdownItTexMath(md: markdownIt, options: any): void {
  const delimiters = mergeDelimiters(options && options.delimiters);
  const outerSpace = options && options.outerSpace || false; // inline rules, effectively `dollars` require surrounding spaces, i.e ` $\psi$ `, to be accepted as inline formulas. This is primarily a guard against misinterpreting single `$`'s in normal markdown text (relevant for inline math only. Default: `false`, for backwards compatibility).
  const katexOptions = options && options.katexOptions || {};
  katexOptions.throwOnError = katexOptions.throwOnError || false;
  katexOptions.macros = katexOptions.macros || options && options.macros; // ensure backwards compatibility

  // inject inline rules to markdown-it
  for (const rule of delimiters.inline) {
    if (!!outerSpace && 'outerSpace' in rule)
      rule.outerSpace = true;
    md.inline.ruler.before('escape', rule.name, texmathInline(rule)); // ! important
    md.renderer.rules[rule.name] = (tokens, idx) => rule.tmpl.replace(/\$1/, texmathRender(tokens[idx].content, !!rule.displayMode, katexOptions));
  }
  // inject block rules to markdown-it
  for (const rule of delimiters.block) {
    md.block.ruler.before('fence', rule.name, texmathBlock(rule)); // ! important for ```math delimiters
    md.renderer.rules[rule.name] = (tokens, idx) => rule.tmpl.replace(/\$2/, escapeHTML(tokens[idx].info)) // equation number .. ?
      .replace(/\$1/, texmathRender(tokens[idx].content, true, katexOptions));
  }
}
