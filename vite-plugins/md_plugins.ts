import type MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

export function markdownItTaOqi(md: MarkdownIt): void {
  md.options.highlight = (code, lang, _attrs) => {
    const hres = hljs.highlight(code, { language: lang })
    return hres.value
  }
  const defaultRender = md.renderer.rules.fence ?? ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const aIndex = tokens[idx].attrIndex('class')
    if (aIndex < 0)
      tokens[idx].attrPush(['class', 'hljs'])
    else
      tokens[idx].attrs![aIndex].push('hljs')
    return defaultRender(tokens, idx, options, env, self)
  }
}
