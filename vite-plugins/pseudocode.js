// https://github.com/samuelhorwitz/markdown-it-pseudocodejs

/**
The MIT License (MIT)

Copyright (c) 2018 Samuel Horwitz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

'use strict'

const pseudocode = require('pseudocode')

function pseudocode_block(state, start, end, silent) {
  let lastLine
  let pos = state.bMarks[start] + state.tShift[start]
  let max = state.eMarks[start]

  if (pos + 14 > max)
    return false
  if (state.src.slice(pos, pos + 14) !== '::: pseudocode')
    return false

  pos += 14
  let firstLine = state.src.slice(pos, max)

  if (silent)
    return true
  let found = false
  if (firstLine.trim().slice(-3) === ':::') {
    // Single line expression
    firstLine = firstLine.trim().slice(0, -3)
    found = true
  }
  let next = start
  while (!found) {
    next++

    if (next >= end)
      break

    pos = state.bMarks[next] + state.tShift[next]
    max = state.eMarks[next]

    if (pos < max && state.tShift[next] < state.blkIndent) {
      // non-empty line with negative indent should stop the list:
      break
    }

    if (state.src.slice(pos, max).trim().slice(-3) === ':::') {
      const lastPos = state.src.slice(0, max).lastIndexOf(':::')
      lastLine = state.src.slice(pos, lastPos)
      found = true
    }
  }

  state.line = next + 1

  const token = state.push('pseudocode_block', 'pseudocode', 0)
  token.block = true
  token.content = (firstLine && firstLine.trim() ? `${firstLine}\n` : '')
    + state.getLines(start + 1, next, state.tShift[start], true)
    + (lastLine && lastLine.trim() ? lastLine : '')
  token.map = [start, state.line]
  token.markup = '::: pseudocode'
  return true
}

module.exports = function pseudocode_plugin(md, options) {
  // Default options

  options = options || {}

  const pseudocodeBlock = function (code) {
    try {
      return `<p>${pseudocode.renderToString(code, options)}</p>`
    } catch (error) {
      if (options.throwOnError)
        console.error(error)
      return code
    }
  }

  const blockRenderer = function (tokens, idx) {
    return `${pseudocodeBlock(tokens[idx].content)}\n`
  }

  md.block.ruler.after('blockquote', 'pseudocode_block', pseudocode_block, {
    alt: ['paragraph', 'reference', 'blockquote', 'list'],
  })
  md.renderer.rules.pseudocode_block = blockRenderer
}
