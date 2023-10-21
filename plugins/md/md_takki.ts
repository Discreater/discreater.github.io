import type MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import { addLineNumber } from './line_number';

export function markdownItTakki(md: MarkdownIt): void {
  md.options.highlight = (code, lang, _attrs) => {
    const hres = lang === '' ? hljs.highlightAuto(code) : hljs.highlight(code, { language: lang });
    return addLineNumber(hres.value);
  };
  const defaultRender = md.renderer.rules.fence ?? ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const aIndex = tokens[idx].attrIndex('class');
    const cap = tokens[idx].info.trim();
    if (aIndex < 0)
      tokens[idx].attrPush(['class', 'hljs']);
    else
      tokens[idx].attrs![aIndex].push('hljs');

    const content = defaultRender(tokens, idx, options, env, self).replace('<pre', '<pre class="collapsible-content"');

    return '<figure class="code-block">'
      + ` <input id="collapse-code-${idx}" class="toggle" type="checkbox" checked>`
      + ' <figcaption> '
      + '   <div>'
      + `     <label for="collapse-code-${idx}" class="lbl-toggle" ></label>`
      + `     <span>${cap}</span>`
      + '   </div>'
      + '   <button class="copy" title="click to copy"/>'
      + ' </figcaption>'
      + `${content}`
      + '</figure>';
  };
}
