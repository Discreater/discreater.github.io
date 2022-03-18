import * as shiki from 'shiki'
import type MarkdownIt from 'markdown-it'

export function markdownItShiki(md: MarkdownIt): void {
  shiki.getHighlighter({
    theme: 'nord',
  }).then((highlighter) => {
    md.options.highlight = (code, lang) => {
      return highlighter.codeToHtml(code, lang)
    }
  })
}
