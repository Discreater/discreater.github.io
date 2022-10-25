/**
 * The Parser class parses the token stream from Lexer into an abstract syntax
 * tree, represented by ParseNode.
 *
 * The grammar of pseudocode required by Pseudocode.js mimics that of TeX/Latex
 * and its algorithm packages. It is designed intentionally to be less powerful
 * than Tex/LaTeX for the convinience of implementation. As a consequence, the
 * grammar is context-free, which can be expressed in production rules:
 *
 *     <pseudo>        :== ( <algorithm> | <algorithmic> )[0..n]
 *
 *     <algorithm>     :== \begin{algorithm}
 *                           ( <caption> | <algorithmic> )[0..n]
 *                         \end{algorithm}
 *     <caption>       :== \caption{ <close-text> }
 *
 *     <algorithmic>   :== \begin{algorithmic}
 *                           ( <ensure> | <require> | <block> )[0..n]
 *                         \end{algorithmic}
 *     <require>       :== \REQUIRE <open-text>
 *     <ensure>        :== \ENSURE <open-text>
 *
 *     <block>         :== ( <comment> | <command> | <control> | <function> |
 *                           <statement> )[0..n]
 *
 *     <control>       :== <if> | <for> | <while> | <repeat>
 *     <if>            :== \IF{<cond>} <block>
 *                         ( \ELIF{<cond>} <block> )[0..n]
 *                         ( \ELSE <block> )[0..1]
 *                         \ENDIF
 *
 *     <for>           :== \FOR{<cond>} <block> \ENDFOR
 *     <while>         :== \WHILE{<cond>} <block> \ENDWHILE
 *     <repeat>        :== \REPEAT <block> \UNTIL{<cond>}
 *
 *     <function>      :== \FUNCTION{<name>}{<params>} <block> \ENDFUNCTION
 *                         (same for <procedure>)
 *
 *     <statement>     :== <state> | <return> | <print>
 *     <state>         :== \STATE <open-text>
 *     <return>        :== \RETURN <open-text>
 *     <print>         :== \PRINT <open-text>
 *
 *     <commands>      :== <break> | <continue>
 *     <break>         :== \BREAK
 *     <continue>      :== \CONTINUE
 *
 *     <comment>       :== \COMMENT{<close-text>}
 *
 *     <cond>          :== <close-text>
 *     <open-text>     :== ( <atom> | <call> ) <open-text> |
 *                         { <close-text> } | <empty>
 *     <close-text>    :== ( <atom> | <call> ) <close-text> |
 *                         { <close-text> } | <empty>
 *
 *     <atom>          :== <ordinary>[1..n] | <special> | <symbol>
 *                         | <size> | <font> | <bool> | <math>
 *     <name>          :== <ordinary>
 *
 *     <call>          :== \CALL{<name>}({<close-text>})
 *     <special>       :== \\ | \{ | \} | \$ | \& | \# | \% | \_
 *     <cond-symbol>   :== \AND | \OR | \NOT | \TRUE | \FALSE | \TO | \DOWNTO
 *     <text-symbol>   :== \textbackslash
 *     <quote-symbol>  :== ` | `` | ' | ''
 *     (More LaTeX symbols can be added if necessary. See
 *     http://tug.ctan.org/info/symbols/comprehensive/symbols-a4.pdf)
 *     <math>          :== \( ... \) | $ ... $
 *     (Math are handled by KaTeX)
 *     <size>          :== \tiny | \scriptsize | \footnotesize | \small
 *                         | \normalsize | \large | \Large | \LARGE | \huge
 *                         | \HUGE
 *     <font>          :== \rmfamily | \sffamily | \ttfamily
 *                         | \upshape | \itshape | \slshape | \scshape
 *     <ordinary>      :== not any of \ { } $ & # % _
 *     <empty>         :==
 *
 * There are many well-known ways to parse a context-free grammar, like the
 * top-down approach LL(k) or the bottom-up approach like LR(k). Both methods
 * are usually implemented in a table-driven fashion, which is not suitable to
 * write by hand. As our grammar is simple enough and its input is not expected
 * to be large, the performance wouldn't be a problem. Thus, I choose to write
 * the parser in the most natural form--- a (predictive) recursive descent
 * parser. The major benefit of a recursive descent parser is **simplity** for
 * the structure of resulting program closely mirrors that of the grammar. *
 *
 */
import * as utils from './utils'
import { ParseError } from './ParseError'
import type { Lexer } from './Lexer'

interface TypedNode {
  root: undefined
  algorithm: undefined
  algorithmic: undefined
  caption: undefined
  block: undefined
  function: {
    type: string
    name: string
  }
  if: undefined | {
    numElif: number
    hasElse: boolean
  }
  loop: string
  repeat: string
  statement: string
  command: string
  comment: undefined
  call: undefined | string
  'open-text': undefined
  'close-text': undefined
}

type OmitUndefined<T extends readonly unknown[]> = T extends readonly [...infer Front, infer R]
  ? undefined extends R
    ? OmitUndefined<Front> | T
    : T
  : T

type NodeType = keyof TypedNode

export class ParseNode<T extends NodeType> {
  type: NodeType
  value: TypedNode[T]
  whitespace?: boolean

  children: ParseNode<NodeType>[]
  constructor(type: T, ...[val]: OmitUndefined<[TypedNode[T]]>) {
    this.type = type
    // @ts-expect-error we know when the value will be undefined
    this.value = val
    this.children = []
  }

  toString(level: number) {
    if (!level)
      level = 0

    let indent = ''
    for (let i = 0; i < level; i++)
      indent += '  '

    let res = `${indent}<${this.type}>`
    if (this.value)
      res += ` (${utils.toString(this.value)})`
    res += '\n'

    if (this.children) {
      for (let ci = 0; ci < this.children.length; ci++) {
        const child = this.children[ci]
        res += child.toString(level + 1)
      }
    }

    return res
  }

  addChild(childNode: ParseNode<NodeType>) {
    if (!childNode)
      throw new Error('argument cannot be null')
    this.children.push(childNode)
  }
}

/* AtomNode is the leaf node of parse tree */
class AtomNode<T extends keyof typeof ACCEPTED_TOKEN_BY_ATOM> extends ParseNode<T> {
  constructor(type: T, value: string, whitespace: boolean) {
    super(type, value)
    this.whitespace = whitespace
  }
}

const IO_STATEMENTS = ['ensure', 'require', 'input', 'output'] as const
const STATEMENTS = ['state', 'print', 'return'] as const
const COMMANDS = ['break', 'continue'] as const

// type Suit<T extends (readonly string[])> = T[number]

/* The token accepted by atom of specific type */
const ACCEPTED_TOKEN_BY_ATOM = {
  'ordinary': { tokenType: 'ordinary' },
  'math': { tokenType: 'math' },
  'special': { tokenType: 'special' },
  'cond-symbol': {
    tokenType: 'func',
    tokenValues: ['and', 'or', 'not', 'true', 'false', 'to', 'downto'],
  },
  'quote-symbol': {
    tokenType: 'quote',
  },
  'sizing-dclr': {
    tokenType: 'func',
    tokenValues: ['tiny', 'scriptsize', 'footnotesize', 'small', 'normalsize',
      'large', 'Large', 'LARGE', 'huge', 'Huge'],
  },
  'font-dclr': {
    tokenType: 'func',
    tokenValues: ['normalfont', 'rmfamily', 'sffamily', 'ttfamily',
      'upshape', 'itshape', 'slshape', 'scshape',
      'bfseries', 'mdseries', 'lfseries'],
  },
  'font-cmd': {
    tokenType: 'func',
    tokenValues: ['textnormal', 'textrm', 'textsf', 'texttt', 'textup',
      'textit', 'textsl', 'textsc', 'uppercase', 'lowercase', 'textbf',
      'textmd', 'textlf'],
  },
  'text-symbol': {
    tokenType: 'func',
    tokenValues: ['textbackslash'],
  },
} as const

export class Parser {
  _lexer: Lexer
  constructor(lexer: Lexer) {
    this._lexer = lexer
  }

  parse() {
    const root = new ParseNode('root')

    while (true) {
      const envName = this._acceptEnvironment()
      if (envName === null)
        break

      let envNode
      if (envName === 'algorithm')
        envNode = this._parseAlgorithmInner()
      else if (envName === 'algorithmic')
        envNode = this._parseAlgorithmicInner()

      else
        throw new ParseError(`Unexpected environment ${envName}`)

      this._closeEnvironment(envName)
      root.addChild(envNode)
    }
    this._lexer.expect('EOF')
    return root
  }

  _acceptEnvironment() {
    const lexer = this._lexer
    // \begin{XXXXX}
    if (!lexer.accept('func', 'begin'))
      return null

    lexer.expect('open')
    const envName = lexer.expect('ordinary')
    lexer.expect('close')
    return envName
  }

  _closeEnvironment(envName?: string) {
    // \close{XXXXX}
    const lexer = this._lexer
    lexer.expect('func', 'end')
    lexer.expect('open')
    lexer.expect('ordinary', envName)
    lexer.expect('close')
  }

  _parseAlgorithmInner() {
    const algNode = new ParseNode('algorithm')
    while (true) {
      const envName = this._acceptEnvironment()
      if (envName !== null) {
        if (envName !== 'algorithmic')
          throw new ParseError(`Unexpected environment ${envName}`)
        const algmicNode = this._parseAlgorithmicInner()
        this._closeEnvironment()
        algNode.addChild(algmicNode)
        continue
      }

      const captionNode = this._parseCaption()
      if (captionNode) {
        algNode.addChild(captionNode)
        continue
      }

      break
    }
    return algNode
  }

  _parseAlgorithmicInner() {
    const algmicNode = new ParseNode('algorithmic')
    let node
    while (true) {
      node = this._parseStatement(IO_STATEMENTS)
      if (node) {
        algmicNode.addChild(node)
        continue
      }

      node = this._parseBlock()
      if (node.children.length > 0) {
        algmicNode.addChild(node)
        continue
      }

      break
    }
    return algmicNode
  }

  _parseCaption() {
    const lexer = this._lexer
    if (!lexer.accept('func', 'caption'))
      return null

    const captionNode = new ParseNode('caption')
    lexer.expect('open')
    captionNode.addChild(this._parseCloseText())
    lexer.expect('close')

    return captionNode
  }

  _parseBlock() {
    const blockNode = new ParseNode('block')

    while (true) {
      const controlNode = this._parseControl()
      if (controlNode) { blockNode.addChild(controlNode); continue }

      const functionNode = this._parseFunction()
      if (functionNode) { blockNode.addChild(functionNode); continue }

      const statementNode = this._parseStatement(STATEMENTS)
      if (statementNode) { blockNode.addChild(statementNode); continue }

      const commandNode = this._parseCommand(COMMANDS)
      if (commandNode) { blockNode.addChild(commandNode); continue }

      const commentNode = this._parseComment()
      if (commentNode) { blockNode.addChild(commentNode); continue }

      break
    }

    return blockNode
  }

  _parseControl() {
    const controlNodeIf = this._parseIf()
    if (controlNodeIf)
      return controlNodeIf
    const controlNodeLoop = this._parseLoop()
    if (controlNodeLoop)
      return controlNodeLoop
    const controlNodeRepeat = this._parseRepeat()
    if (controlNodeRepeat)
      return controlNodeRepeat
  }

  _parseFunction() {
    const lexer = this._lexer
    if (!lexer.accept('func', ['function', 'procedure']))
      return null

    // \FUNCTION{funcName}{funcArgs}
    const funcType = this._lexer.get().text! // FUNCTION or PROCEDURE
    lexer.expect('open')
    const funcName = lexer.expect('ordinary')
    lexer.expect('close')
    lexer.expect('open')
    const argsNode = this._parseCloseText()
    lexer.expect('close')
    // <block>
    const blockNode = this._parseBlock()
    // \ENDFUNCTION
    lexer.expect('func', `end${funcType}`)

    const functionNode = new ParseNode('function', { type: funcType, name: funcName })
    functionNode.addChild(argsNode)
    functionNode.addChild(blockNode)
    return functionNode
  }

  _parseIf() {
    if (!this._lexer.accept('func', 'if'))
      return null

    const ifNode = new ParseNode('if')

    // { <cond> } <block>
    this._lexer.expect('open')
    ifNode.addChild(this._parseCond())
    this._lexer.expect('close')
    ifNode.addChild(this._parseBlock())

    // ( \ELIF { <cond> } <block> )[0...n]
    let numElif = 0
    while (this._lexer.accept('func', ['elif', 'elsif', 'elseif'])) {
      this._lexer.expect('open')
      ifNode.addChild(this._parseCond())
      this._lexer.expect('close')
      ifNode.addChild(this._parseBlock())
      numElif++
    }

    // ( \ELSE <block> )[0..1]
    let hasElse = false
    if (this._lexer.accept('func', 'else')) {
      hasElse = true
      ifNode.addChild(this._parseBlock())
    }

    // \ENDIF
    this._lexer.expect('func', 'endif')

    ifNode.value = { numElif, hasElse }
    return ifNode
  }

  _parseLoop() {
    if (!this._lexer.accept('func', ['FOR', 'FORALL', 'WHILE']))
      return null

    const loopName = this._lexer.get().text!.toLowerCase()
    const loopNode = new ParseNode('loop', loopName)

    // { <cond> } <block>
    this._lexer.expect('open')
    loopNode.addChild(this._parseCond())
    this._lexer.expect('close')
    loopNode.addChild(this._parseBlock())

    // \ENDFOR
    const endLoop = loopName !== 'forall' ? `end${loopName}` : 'endfor'
    this._lexer.expect('func', endLoop)

    return loopNode
  }

  _parseRepeat() {
    if (!this._lexer.accept('func', ['REPEAT']))
      return null

    const repeatName = this._lexer.get().text!.toLowerCase()
    const repeatNode = new ParseNode('repeat', repeatName)

    // <block>
    repeatNode.addChild(this._parseBlock())

    // \UNTIL
    this._lexer.expect('func', 'until')

    // {<cond>}
    this._lexer.expect('open')
    repeatNode.addChild(this._parseCond())
    this._lexer.expect('close')

    return repeatNode
  }

  _parseStatement(acceptStatements: typeof STATEMENTS | typeof IO_STATEMENTS) {
    if (!this._lexer.accept('func', acceptStatements))
      return null

    const stmtName = this._lexer.get().text!.toLowerCase()
    const stmtNode = new ParseNode('statement', stmtName)

    stmtNode.addChild(this._parseOpenText())

    return stmtNode
  }

  _parseCommand(acceptCommands: typeof COMMANDS) {
    if (!this._lexer.accept('func', acceptCommands))
      return null

    const cmdName = this._lexer.get().text!.toLowerCase()
    const cmdNode = new ParseNode('command', cmdName)

    return cmdNode
  }

  _parseComment() {
    if (!this._lexer.accept('func', 'comment'))
      return null

    const commentNode = new ParseNode('comment')

    // { \text }
    this._lexer.expect('open')
    commentNode.addChild(this._parseCloseText())
    this._lexer.expect('close')

    return commentNode
  }

  _parseCall() {
    const lexer = this._lexer
    if (!lexer.accept('func', 'call'))
      return null

    const anyWhitespace = lexer.get().whitespace

    // \CALL { <ordinary> } ({ <text> })[0..1]
    lexer.expect('open')
    const funcName = lexer.expect('ordinary')
    lexer.expect('close')

    const callNode = new ParseNode('call')
    callNode.whitespace = anyWhitespace
    callNode.value = funcName

    lexer.expect('open')
    const argsNode = this._parseCloseText()
    callNode.addChild(argsNode)
    lexer.expect('close')
    return callNode
  }

  _parseCond() {
    return this._parseText('close')
  }

  _parseCloseText() {
    return this._parseText('close')
  }

  _parseOpenText() {
    return this._parseText('open')
  }

  _parseText(openOrClose: 'open' | 'close') {
    const textNode = new ParseNode(`${openOrClose}-text`)
    // any whitespace between Atom and CloseText
    let anyWhitespace = false
    let subTextNode
    while (true) {
      // atom or call
      subTextNode = this._parseAtom() || this._parseCall()
      if (subTextNode) {
        if (anyWhitespace)
          subTextNode.whitespace = subTextNode.whitespace || anyWhitespace
        textNode.addChild(subTextNode)
        continue
      }

      // or close text
      if (this._lexer.accept('open')) {
        subTextNode = this._parseCloseText()

        anyWhitespace = this._lexer.get().whitespace
        subTextNode.whitespace = anyWhitespace

        textNode.addChild(subTextNode)
        this._lexer.expect('close')
        anyWhitespace = this._lexer.get().whitespace
        continue
      }

      break
    }

    return textNode
  }

  _parseAtom() {
    for (const tokens of Object.entries(ACCEPTED_TOKEN_BY_ATOM)) {
      const [atomType, acceptToken] = tokens
      let tokenText = this._lexer.accept(acceptToken.tokenType, acceptToken.tokenValues)
      if (tokenText === null)
        continue

      const anyWhitespace = this._lexer.get().whitespace
      if (atomType !== 'ordinary' && atomType !== 'math')
        tokenText = tokenText.toLowerCase()
      return new AtomNode(atomType, tokenText, anyWhitespace)
    }
    return null
  }
}

