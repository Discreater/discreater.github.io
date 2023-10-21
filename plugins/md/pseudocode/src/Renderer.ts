/*
* */
import katex from 'katex';
import type { ParseNode, Parser } from './Parser';
import * as utils from './utils';

/*
 * TextStyle - used by TextEnvironment class to handle LaTeX text-style
 * commands or declarations.
 *
 * The font declarations are:
 *  \normalfont, \rmfamily, \sffamily, \ttfamily,
 *  \bfseries, \mdseries, \lfseries,
 *  \upshape, \itshape, \scshape, \slshape.
 *
 * The font commands are:
 *  \textnormal{}, \textrm{}, \textsf{}, \texttt{},
 *  \textbf{}, \textmd{}, \textlf{},
 *  \textup{}, \textit{}, \textsc{}, \textsl{},
 *  \uppercase{}, \lowercase{}.
 *
 * The sizing commands are:
 *  \tiny, \scriptsize, \footnotesize, \small, \normalsize,
 *  \large, \Large, \LARGE, \huge, \Huge.
 **/
class TextStyle {
  /* Update the font state by TeX command
    cmd - the name of TeX command that alters current font
*/
  readonly _fontCommandTable: Record<string, Record<string, string>> = {
    // -------------- declaration --------------
    // font-family
    normalfont: { 'font-family': 'KaTeX_Main' },
    rmfamily: { 'font-family': 'KaTeX_Main' },
    sffamily: { 'font-family': 'KaTeX_SansSerif' },
    ttfamily: { 'font-family': 'KaTeX_Typewriter' },
    // weight
    bfseries: { 'font-weight': 'bold' },
    mdseries: { 'font-weight': 'medium' },
    lfseries: { 'font-weight': 'lighter' },
    // shape
    upshape: { 'font-style': 'normal', 'font-variant': 'normal' },
    itshape: { 'font-style': 'italic', 'font-variant': 'normal' },
    scshape: { 'font-style': 'normal', 'font-variant': 'small-caps' },
    slshape: { 'font-style': 'oblique', 'font-variant': 'normal' },
    // -------------- command --------------
    // font-family
    textnormal: { 'font-family': 'KaTeX_Main' },
    textrm: { 'font-family': 'KaTeX_Main' },
    textsf: { 'font-family': 'KaTeX_SansSerif' },
    texttt: { 'font-family': 'KaTeX_Typewriter' },
    // weight
    textbf: { 'font-weight': 'bold' },
    textmd: { 'font-weight': 'medium' },
    textlf: { 'font-weight': 'lighter' },
    // shape
    textup: { 'font-style': 'normal', 'font-variant': 'normal' },
    textit: { 'font-style': 'italic', 'font-variant': 'normal' },
    textsc: { 'font-style': 'normal', 'font-variant': 'small-caps' },
    textsl: { 'font-style': 'oblique', 'font-variant': 'normal' },
    // case
    uppercase: { 'text-transform': 'uppercase' },
    lowercase: { 'text-transform': 'lowercase' },
  };

  _sizingScalesTable: Record<string, number> = {
    tiny: 0.68,
    scriptsize: 0.80,
    footnotesize: 0.85,
    small: 0.92,
    normalsize: 1.00,
    large: 1.17,
    Large: 1.41,
    LARGE: 1.58,
    huge: 1.90,
    Huge: 2.28,
  };

  _css: Record<string, string>;
  _fontSize: number;
  _outerFontSize: number;

  constructor(outerFontSize?: number) {
    this._css = {};

    this._fontSize = this._outerFontSize
      = outerFontSize !== undefined ? outerFontSize : 1.0;
  }

  /*
         * Remember the font size of outer TextStyle object.
         *
         * As we use relative font size 'em', the outer span (has its own TextStyle
         * object) affects the size of the span to which this TextStyle object attached.
         * */
  outerFontSize(size: number) {
    if (size !== undefined)
      this._outerFontSize = size;
    return this._outerFontSize;
  }

  fontSize() {
    return this._fontSize;
  }

  updateByCommand(cmd: string) {
    // Font command
    const cmdStyles = this._fontCommandTable[cmd];
    if (cmdStyles !== undefined) {
      Object.entries(cmdStyles).forEach(([attr, val]) => {
        this._css[attr] = val;
      });
      return;
    }

    // Sizing command
    const fontSize = this._sizingScalesTable[cmd];
    if (fontSize !== undefined) {
      this._outerFontSize = this._fontSize;
      this._fontSize = fontSize;
      return;
    }

    throw new Error('unrecogniazed text-style command');
  }

  toCSS() {
    let cssStr = '';
    for (const attr in this._css) {
      const val = this._css[attr];
      if (val === undefined)
        continue;
      cssStr += `${attr}:${val};`;
    }
    if (this._fontSize !== this._outerFontSize)
      cssStr += `font-size:${this._fontSize / this._outerFontSize}em;`;

    return cssStr;
  }
}

/*
 * TextEnvironment - renders the children nodes in a ParseNode of type
 * 'close-text' or 'open-text' to HTML.
 **/
class TextEnvironment {
  _nodes: ParseNode[];
  _textStyle: TextStyle;
  _html?: HTMLBuilder;
  constructor(nodes: ParseNode[], textStyle: TextStyle) {
    this._nodes = nodes;
    this._textStyle = textStyle;
  }

  _renderCloseText(node: ParseNode, backend: Backend) {
    const newTextStyle = new TextStyle(this._textStyle.fontSize());
    const closeTextEnv = new TextEnvironment(node.children, newTextStyle);
    if (node.whitespace)
      this._html?.putText(' ');
    this._html?.putHTML(closeTextEnv.renderToHTML(backend));
  }

  renderToHTML(backend: Backend) {
    this._html = new HTMLBuilder();

    let node;
    // eslint-disable-next-line no-cond-assign
    while ((node = this._nodes.shift()) !== undefined) {
      const type = node.type;
      const text = node.value;

      // Insert whitespace before the atom if necessary
      if (node.whitespace)
        this._html.putText(' ');

      switch (type) {
        case 'ordinary':
          this._html.putText(text as string);
          break;
        case 'math':
          if (typeof backend === 'undefined')
            throw new Error('No math backend found. Please setup KaTeX or MathJax.');
          else if (backend.name === 'katex')
            this._html.putHTML(backend.driver.renderToString(text));
          else if (backend.name === 'mathjax')
            this._html.putText(`$${text}$`);

          else
            throw new Error(`Unknown math backend ${backend}`);

          break;
        case 'cond-symbol':
          this._html
            .beginSpan('ps-keyword')
            .putText((text as string).toLowerCase())
            .endSpan();
          break;
        case 'special': {
          if (text === '\\\\') {
            this._html.putHTML('<br/>');
            break;
          }
          const replace = {
            '\\{': '{',
            '\\}': '}',
            '\\$': '$',
            '\\&': '&',
            '\\#': '#',
            '\\%': '%',
            '\\_': '_',
          };
          // @ts-expect-error It is beyond my ability
          const replaceStr = replace[text];
          this._html.putText(replaceStr);
          break;
        }
        case 'text-symbol': {
          const name2Values = {
            textbackslash: '\\',
          };
          // @ts-expect-error It is beyond my ability
          const symbolValue = name2Values[text];
          this._html.putText(symbolValue);
          break;
        }
        case 'quote-symbol': {
          const quoteReplace = {
            '`': '‘',
            '``': '“',
            '\'': '’',
            '\'\'': '”',
          };
          // @ts-expect-error It is beyond my ability
          const realQuote = quoteReplace[text];
          this._html.putText(realQuote);
          break;
        }
        case 'call': {
          // \CALL{funcName}{funcArgs}
          // ==>
          // funcName(funcArgs)
          // @ts-expect-error It is beyond my ability
          this._html.beginSpan('ps-funcname').putText(text).endSpan();
          this._html.write('(');
          const argsTextNode = node.children[0];
          this._renderCloseText(argsTextNode, backend);
          this._html.write(')');
          break;
        }
        case 'close-text':
          this._renderCloseText(node, backend);
          break;
        // There are two kinds of typestyle commands:
        //      command (e.g. \textrm{...}).
        // and
        //      declaration (e.g. { ... \rmfamily ... })
        //
        // For typestyle commands, it works as following:
        //      \textsf     --> create a new typestyle
        //      {           --> save the current typestyle, and then use the new one
        //      ...         --> the new typestyle is in use
        //      }           --> restore the last typestyle
        //
        // For typestyle declaration, it works a little bit diferrently:
        //      {           --> save the current typestyle, and then create and use
        //                      an identical one
        //      ...         --> the new typestyle is in use
        //      \rmfamily   --> create a new typestyle
        //      ...         --> the new typestyle is in use
        //      }           --> restore the last typestyle
        case 'font-dclr':
        case 'sizing-dclr': {
          // @ts-expect-error It is beyond my ability
          this._textStyle.updateByCommand(text);
          this._html.beginSpan(null, this._textStyle.toCSS());
          const textEnvForDclr = new TextEnvironment(this._nodes, this._textStyle);
          this._html.putHTML(textEnvForDclr.renderToHTML(backend));
          this._html.endSpan();
          break;
        }
        case 'font-cmd': {
          const textNode = this._nodes[0];
          if (textNode.type !== 'close-text')
            continue;

          const innerTextStyle = new TextStyle(this._textStyle.fontSize());
          // @ts-expect-error It is beyond my ability
          innerTextStyle.updateByCommand(text);
          this._html.beginSpan(null, innerTextStyle.toCSS());
          const textEnvForCmd = new TextEnvironment(textNode.children, innerTextStyle);
          this._html.putHTML(textEnvForCmd.renderToHTML(backend));
          this._html.endSpan();
          break;
        }
        default:
          throw new Error(`Unexpected ParseNode of type ${node.type}`);
      }
    }

    return this._html.toMarkup();
  }
}
const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;',
  '/': '&#x2F;',
};
/* HTMLBuilder - A helper class for constructing HTML */
class HTMLBuilder {
  _body: string[];
  _textBuf: string[];
  constructor() {
    this._body = [];
    this._textBuf = [];
  }

  beginDiv(className: string, style?: string | Record<string, string>, extraStyle?: string) {
    this._beginTag('div', className, style, extraStyle);
    this._body.push('\n'); // make the generated HTML more human friendly
    return this;
  }

  endDiv() {
    this._endTag('div');
    this._body.push('\n'); // make the generated HTML more human friendly
    return this;
  }

  beginP(className: string, style?: string | Record<string, string>, extraStyle?: string) {
    this._beginTag('p', className, style, extraStyle);
    this._body.push('\n'); // make the generated HTML more human friendly
    return this;
  }

  endP() {
    this._flushText();
    this._endTag('p');
    this._body.push('\n'); // make the generated HTML more human friendly
    return this;
  }

  beginSpan(className: string | null, style?: string | Record<string, string>, extraStyle?: string) {
    this._flushText();
    return this._beginTag('span', className, style, extraStyle);
  }

  endSpan() {
    this._flushText();
    return this._endTag('span');
  }

  putHTML(html: string) {
    this._flushText();
    this._body.push(html);
    return this;
  }

  putText(text: string) {
    this._textBuf.push(text);
    return this;
  }

  write(html: string) {
    this._body.push(html);
  }

  toMarkup() {
    this._flushText();
    const html = this._body.join('');
    return html.trim();
  }

  toDOM() {
    const html = this.toMarkup();
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.firstChild;
  }

  _flushText() {
    if (this._textBuf.length === 0)
      return;

    const text = this._textBuf.join('');
    this._body.push(this._escapeHtml(text));
    // this._body.push(text);
    this._textBuf = [];
  }

  /* Write the beginning of a DOM element
      tag - the tag of the element
      className - the className for the tag
      style - CSS style that applies directly on the tag. This parameter can be
              either a string, e.g., 'color:red', or an object, e.g.
              { color: 'red', margin-left: '1em'}
  */
  _beginTag(tag: string, className: string | null, style?: string | Record<string, string>, extraStyle?: string) {
    let spanHTML = `<${tag}`;
    if (className)
      spanHTML += ` class="${className}"`;
    if (style) {
      let styleCode;
      if (utils.isString(style)) {
        styleCode = style;
      } else {
        styleCode = '';
        for (const attrName in style) {
          const attrVal = style[attrName];
          styleCode += `${attrName}:${attrVal};`;
        }
      }
      if (extraStyle)
        styleCode += extraStyle;
      spanHTML += ` style="${styleCode}"`;
    }
    spanHTML += '>';
    this._body.push(spanHTML);
    return this;
  }

  _endTag(tag: string) {
    this._body.push(`</${tag}>`);
    return this;
  }

  _escapeHtml(str: string) {
    return String(str).replace(/[&<>"'/]/g, (s) => {
      return entityMap[s as keyof typeof entityMap];
    });
  }
}

export interface Options {
  /** The indent size of inside a control block, e.g. if, for, etc. The unit must be in 'em'. */
  indentSize?: string
  /** The delimiters used to start and end a comment region. Note that only line comments are supported. */
  commentDelimiter?: string
  /** Whether line numbering is enabled. */
  lineNumber?: boolean
  /** The punctuation that follows line number. */
  lineNumberPunc?: string
  /** Whether block ending, like end if, end procedure`, etc., are showned. */
  noEnd?: boolean
  /** Reset the caption counter to this number. */
  captionCount?: number
  /** Title prefix */
  titlePrefix?: string
}

/*
 * RendererOptions - represents options that Renderer accepts.
 *
 * The following are possible options:
 *      indentSize - The indent size of inside a control block, e.g. if, for,
 *          etc. The unit must be in 'em'. Default value: '1.2em'.
 *      commentDelimiter  - The delimiters used to start and end a comment region.
 *          Note that only line comments are supported. Default value: '//'.
 *      lineNumber - Whether line numbering is enabled. Default value: false.
 *      lineNumberPunc - The punctuation that follows line number. Default
 *          value: ':'.
 *      noEnd - Whether block ending, like `end if`, end procedure`, etc., are
 *          showned. Default value: false.
 *      captionCount - Set the caption counter to this new value.
 *      titlePrefix - The prefix in the title of the algorithm. Default value: 'Algorithm'.
 *
 **/
class RendererOptions {
  indentSize: number;
  commentDelimiter: string;
  lineNumber: boolean;
  lineNumberPunc: string;
  noEnd: boolean;
  captionCount: number;
  titlePrefix: string;
  constructor(i_options?: Options) {
    const options = i_options ?? {};
    this.indentSize
      = options.indentSize ? this._parseEmVal(options.indentSize) : 1.2;
    this.commentDelimiter = options.commentDelimiter !== undefined ? options.commentDelimiter : ' // ';
    this.lineNumberPunc = options.lineNumberPunc !== undefined ? options.lineNumberPunc : ':';
    this.lineNumber = options.lineNumber !== undefined ? options.lineNumber : false;
    this.noEnd = options.noEnd !== undefined ? options.noEnd : false;
    this.captionCount = options.captionCount !== undefined ? options.captionCount : 1;
    this.titlePrefix = options.titlePrefix !== undefined ? options.titlePrefix : 'Algorithm';
  }

  _parseEmVal(emVal: string) {
    emVal = emVal.trim();
    if (emVal.indexOf('em') !== emVal.length - 2)
      throw new Error('option unit error; no `em` found');
    return Number(emVal.substring(0, emVal.length - 2));
  }
}
interface Backend {
  name: string
  driver: any // FIXME
}
/*
 * Renderer - Converts a parse tree to HTML
 *
 * There are three levels for renderer: Group (Block), Line and Segment,
 * which are rendered to HTML tag, <div>, <p>, and <span>, respectively.
 **/
export class Renderer {
  /*  The global counter for the numbering of the algorithm environment */
  _root: ParseNode;
  _options: RendererOptions;
  _openLine: boolean;
  _blockLevel: number;
  _textLevel: number;
  _globalTextStyle: TextStyle;
  backend: Backend;

  _html?: HTMLBuilder;
  _numLOC?: number;

  captionCount = 0;
  constructor(parser: Parser, options?: Options) {
    this._root = parser.parse();
    this._options = new RendererOptions(options);
    this._openLine = false;
    this._blockLevel = 0;
    this._textLevel = -1;
    this._globalTextStyle = new TextStyle();

    this.backend = {
      name: 'katex',
      driver: katex,
    };
  }

  toMarkup() {
    const html = this._html = new HTMLBuilder();
    this._buildTree(this._root);
    delete this._html;
    return html.toMarkup();
  }

  toDOM() {
    const html = this.toMarkup();
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.firstChild!;
  }

  _beginGroup(name: string, extraClass?: string | null, style?: string | Record<string, string>) {
    this._closeLineIfAny();
    this._html?.beginDiv(`ps-${name}${extraClass ? ` ${extraClass}` : ''}`, style);
  }

  _endGroup(/** _name?: string */) {
    this._closeLineIfAny();
    this._html?.endDiv();
  }

  _beginBlock() {
    // The first block have to extra left margin when line number are displayed
    const extraIndentForFirstBlock = this._options.lineNumber && this._blockLevel === 0 ? 0.6 : 0;
    const blockIndent = this._options.indentSize + extraIndentForFirstBlock;

    this._beginGroup('block', null, {
      'margin-left': `${blockIndent}em`,
    });
    this._blockLevel++;
  }

  _endBlock() {
    this._closeLineIfAny();
    this._endGroup();
    this._blockLevel--;
  }

  _newLine() {
    this._closeLineIfAny();

    this._openLine = true;

    // For every new line, reset the relative sizing of text style
    this._globalTextStyle.outerFontSize(1.0);

    const indentSize = this._options.indentSize;
    // if this line is for code (e.g. \STATE)
    if (this._blockLevel > 0) {
      this._numLOC!++;

      this._html?.beginP('ps-line ps-code', this._globalTextStyle.toCSS());
      if (this._options.lineNumber) {
        this._html?.beginSpan('ps-linenum', {
          left: `${-((this._blockLevel - 1) * (indentSize * 1.25))}em`,
        })
          .putText(this._numLOC + this._options.lineNumberPunc)
          .endSpan();
      }
    } else { // if this line is for pre-conditions (e.g. \REQUIRE)
      this._html?.beginP('ps-line', {
        'text-indent': `${-indentSize}em`,
        'padding-left': `${indentSize}em`,
      }, this._globalTextStyle.toCSS());
    }
  }

  _closeLineIfAny() {
    if (!this._openLine)
      return;

    this._html?.endP();

    this._openLine = false;
  }

  _typeKeyword(keyword: string) {
    this._html?.beginSpan('ps-keyword').putText(keyword).endSpan();
  }

  _typeFuncName(funcName: string) {
    this._html?.beginSpan('ps-funcname').putText(funcName).endSpan();
  }

  _typeText(text: string) {
    this._html?.write(text);
  }

  _buildTreeForAllChildren(node: ParseNode) {
    const children = node.children;
    children.forEach(child => this._buildTree(child));
  }

  // The comment nodes at the beginning of blockNode are comments for controls
  // Thus they should be rendered out of block
  _buildCommentsFromBlock(blockNode: ParseNode) {
    const children = blockNode.children;
    while (children.length > 0 && children[0].type === 'comment') {
      const commentNode = children.shift();
      this._buildTree(commentNode!);
    }
  }

  _buildTree(node: ParseNode) {
    let ci;
    let child;
    let textNode;
    switch (node.type) {
      // The hierarchicy of build tree: Group (Block) > Line > Text
      // ----------------- Groups -------------------------------------
      case 'root':
        this._beginGroup('root');
        this._buildTreeForAllChildren(node);
        this._endGroup();
        break;
      case 'algorithm': {
        // First, decide the caption if any
        let lastCaptionNode;
        for (ci = 0; ci < node.children.length; ci++) {
          child = node.children[ci];
          if (child.type !== 'caption')
            continue;
          lastCaptionNode = child;
          this.captionCount++;
        }
        // Then, build the header for algorithm
        if (lastCaptionNode) {
          this._beginGroup('algorithm', 'with-caption');
          this._buildTree(lastCaptionNode);
        } else {
          this._beginGroup('algorithm');
        }
        // Then, build other nodes
        for (ci = 0; ci < node.children.length; ci++) {
          child = node.children[ci];
          if (child.type === 'caption')
            continue;
          this._buildTree(child);
        }
        this._endGroup();
        break;
      }
      case 'algorithmic':
        if (this._options.lineNumber) {
          this._beginGroup('algorithmic', 'with-linenum');
          this._numLOC = 0;
        } else {
          this._beginGroup('algorithmic');
        }
        this._buildTreeForAllChildren(node);
        this._endGroup();
        break;
      case 'block':
        // node: <block>
        // ==>
        // HTML: <div class="ps-block"> ... </div>
        this._beginBlock();
        this._buildTreeForAllChildren(node);
        this._endBlock();
        break;
      // ----------------- Mixture (Groups + Lines) -------------------
      case 'function': {
        // \FUNCTION{<ordinary>}{<text>} <block> \ENDFUNCTION
        // ==>
        // function <ordinary>(<text>)
        // ...
        // end function
        // @ts-expect-error It is beyond my ability
        const funcType = node.value.type.toLowerCase();
        // @ts-expect-error It is beyond my ability
        const defFuncName = node.value.name;
        textNode = node.children[0];
        const blockNode = node.children[1];
        this._newLine();
        this._typeKeyword(`${funcType} `);
        this._typeFuncName(defFuncName);
        this._typeText('(');
        this._buildTree(textNode);
        this._typeText(')');

        this._buildCommentsFromBlock(blockNode);
        this._buildTree(blockNode);

        if (!this._options.noEnd) {
          this._newLine();
          this._typeKeyword(`end ${funcType}`);
        }
        break;
      }
      case 'if': {
        // \IF { <cond> }
        // ==>
        // <p class="ps-line">
        //      <span class="ps-keyword">if</span>
        //      ...
        //      <span class="ps-keyword">then</span>
        // </p>
        this._newLine();
        this._typeKeyword('if ');
        const ifCond = node.children[0];
        this._buildTree(ifCond);
        this._typeKeyword(' then');
        // <block>
        const ifBlock = node.children[1];
        this._buildCommentsFromBlock(ifBlock);
        this._buildTree(ifBlock);

        // ( \ELIF {<cond>} <block> )[0..n]
        // @ts-expect-error It is beyond my ability
        const numElif = node.value.numElif;
        for (let ei = 0; ei < numElif; ei++) {
          // \ELIF {<cond>}
          // ==>
          // <p class="ps-line">
          //      <span class="ps-keyword">elif</span>
          //      ...
          //      <span class="ps-keyword">then</span>
          // </p>
          this._newLine();
          this._typeKeyword('else if ');
          const elifCond = node.children[2 + 2 * ei];
          this._buildTree(elifCond);
          this._typeKeyword(' then');

          // <block>
          const elifBlock = node.children[2 + 2 * ei + 1];
          this._buildCommentsFromBlock(elifBlock);
          this._buildTree(elifBlock);
        }

        // ( \ELSE <block> )[0..1]
        // @ts-expect-error It is beyond my ability
        const hasElse = node.value.hasElse;
        if (hasElse) {
          // \ELSE
          // ==>
          // <p class="ps-line">
          //      <span class="ps-keyword">else</span>
          // </p>
          this._newLine();
          this._typeKeyword('else');

          // <block>
          const elseBlock = node.children[node.children.length - 1];
          this._buildCommentsFromBlock(elseBlock);
          this._buildTree(elseBlock);
        }

        if (!this._options.noEnd) {
          // ENDIF
          this._newLine();
          this._typeKeyword('end if');
        }
        break;
      }
      case 'loop': {
        // \FOR{<cond>} or \WHILE{<cond>}
        // ==>
        // <p class="ps-line">
        //      <span class="ps-keyword">for</span>
        //      ...
        //      <span class="ps-keyword">do</span>
        // </p>
        this._newLine();
        const loopType = node.value;
        const displayLoopName = {
          for: 'for',
          forall: 'for all',
          while: 'while',
        };
        // @ts-expect-error It is beyond my ability
        this._typeKeyword(`${displayLoopName[loopType]} `);
        const loopCond = node.children[0];
        this._buildTree(loopCond);
        this._typeKeyword(' do');

        // <block>
        const block = node.children[1];
        this._buildCommentsFromBlock(block);
        this._buildTree(block);

        if (!this._options.noEnd) {
          // \ENDFOR or \ENDWHILE
          // ==>
          // <p class="ps-line">
          //      <span class="ps-keyword">end for</span>
          // </p>
          this._newLine();
          const endLoopName = loopType === 'while' ? 'end while' : 'end for';
          this._typeKeyword(endLoopName);
        }
        break;
      }
      case 'repeat': {
        // \REPEAT
        // ==>
        // <p class="ps-line">
        //     <span class="ps-keyword">repeat</span>
        // </p>
        this._newLine();
        this._typeKeyword('repeat');

        // block
        const repeatBlock = node.children[0];
        this._buildCommentsFromBlock(repeatBlock);
        this._buildTree(repeatBlock);

        // \UNTIL{<cond>}
        // ==>
        // <p class="ps-line">
        //     <span class="ps-keyword">until</span>
        // </p>
        this._newLine();
        this._typeKeyword('until ');
        const repeatCond = node.children[1];
        this._buildTree(repeatCond);

        break;
      }
      // ------------------- Lines -------------------
      case 'command': {
        const cmdName = node.value as string;
        const displayCmdName = {
          break: 'break',
          continue: 'continue',
        }[cmdName];

        this._newLine();
        if (displayCmdName)
          this._typeKeyword(displayCmdName);
        break;
      }
      case 'caption':
        this._newLine();
        this._typeKeyword(`${this._options.titlePrefix} ${this.captionCount} `);
        textNode = node.children[0];
        this._buildTree(textNode);
        break;
      case 'comment':
        textNode = node.children[0];
        this._html!.beginSpan('ps-comment');
        this._html!.putText(this._options.commentDelimiter);
        this._buildTree(textNode);
        this._html!.endSpan();
        break;
      case 'statement': {
        // statements: \STATE, \ENSURE, \PRINT, \RETURN, etc.
        const stmtName = node.value as string;
        const displayStmtName = {
          state: '',
          ensure: 'Ensure: ',
          require: 'Require: ',
          input: 'Input: ',
          output: 'Output: ',
          print: 'print ',
          return: 'return ',
        }[stmtName];

        this._newLine();
        if (displayStmtName)
          this._typeKeyword(displayStmtName);
        textNode = node.children[0];
        this._buildTree(textNode);
        break;
      }
      // ------------------- Text -------------------
      case 'open-text': {
        const openTextEnv = new TextEnvironment(node.children, this._globalTextStyle);
        this._html?.putHTML(openTextEnv.renderToHTML(this.backend));
        break;
      }
      case 'close-text': {
        const outerFontSize = this._globalTextStyle.fontSize();
        const newTextStyle = new TextStyle(outerFontSize);
        const closeTextEnv = new TextEnvironment(node.children, newTextStyle);
        this._html?.putHTML(closeTextEnv.renderToHTML(this.backend));
        break;
      }
      default:
        throw new Error(`Unexpected ParseNode of type ${node.type}`);
    }
  }
}
