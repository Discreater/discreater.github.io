import type { CheerioAPI, Element, Node } from 'cheerio'
import cheerio from 'cheerio'

const TABLE_NAME = 'hljs-ln'
const LINE_NAME = 'hljs-ln-line'
const CODE_BLOCK_NAME = 'hljs-ln-code'
const NUMBERS_BLOCK_NAME = 'hljs-ln-numbers'
const NUMBER_LINE_NAME = 'hljs-ln-n'
const DATA_ATTR_NAME = 'data-line-number'
const BREAK_LINE_REGEXP = /\r\n|\r|\n/g

interface LnOptions {
  singleLine: boolean
  startFrom: number
}

export function addLineNumber(source: string): string {
  const lnOptions: LnOptions = {
    singleLine: false,
    startFrom: 1,
  }
  const $ = cheerio.load(source, null, false)

  duplicateMultilineNodes($)

  return addLineNumbersBlockFor($, lnOptions)
}

function addLineNumbersBlockFor($: CheerioAPI, options: LnOptions) {
  const inputHtml = $.root().html()!
  const lines = getLines(inputHtml)

  // if last line contains only carriage return remove it
  if (lines[lines.length - 1].trim() === '')
    lines.pop()

  if (lines.length > 1 || options.singleLine) {
    let html = ''

    for (let i = 0; i < lines.length; i++) {
      const ln = i + options.startFrom
      const content = lines[i].length > 0 ? lines[i] : ' '
      html
        += '<tr>'
        + `<td class="${LINE_NAME} ${NUMBERS_BLOCK_NAME}" ${DATA_ATTR_NAME}="${ln}">`
        + `<div class="${NUMBER_LINE_NAME}" ${DATA_ATTR_NAME}="${ln}" />`
        + '</td>'
        + `<td class="${LINE_NAME} ${CODE_BLOCK_NAME}" ${DATA_ATTR_NAME}="${ln}">${content}</td>`
        + '</tr>'
    }

    return `<table class="${TABLE_NAME}">${html}</table>`
  }

  return inputHtml
}

function duplicateMultilineNodes($: CheerioAPI, node?: Element) {
  const nodes = node ? $(node).children() : $.root().children()
  for (const child of nodes) {
    if (getLinesCount($(child).text()) > 0) {
      if (child.childNodes.length > 0)
        duplicateMultilineNodes($, child)
      else
        duplicateMultilineNode($, child.parentNode!)
    }
  }
}

function duplicateMultilineNode($: CheerioAPI, element: Node) {
  const className = $(element).attr('class')

  if (className && !/hljs-/.test(className)) return

  const lines = getLines($(element).html()!)
  let result = ''

  for (let i = 0; i < lines.length; i++) {
    const lineText = lines[i].length > 0 ? lines[i] : ' '
    result += `<span class="${className}">${lineText}</span>\n`
  }

  $(element).html(result.trim())
}

function getLinesCount(text: string) {
  return (text.trim().match(BREAK_LINE_REGEXP) || []).length
}

function getLines(text: string) {
  if (text.length === 0) return []
  return text.split(BREAK_LINE_REGEXP)
}
