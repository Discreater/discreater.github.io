/**
 * The Lexer class tokenizes the input sequentially, looking ahead only one
 * token.
 */
import * as utils from './utils';
import { ParseError } from './ParseError';

/* Math pattern
    Math environtment like $ $ or \( \) cannot be matched using regular
    expression. This object simulates a RegEx object
*/
const mathPattern = {
  exec(str: string) {
    const delimiters = [
      { start: '$', end: '$' },
      { start: '\\(', end: '\\)' },
    ];
    const totalLen = str.length;

    for (let di = 0; di < delimiters.length; di++) {
      const startDel = delimiters[di].start;
      if (str.indexOf(startDel) !== 0)
        continue;

      const endDel = delimiters[di].end;
      let endPos = startDel.length;
      let remain = str.slice(endPos);
      while (endPos < totalLen) {
        const pos = remain.indexOf(endDel);
        if (pos < 0)
          throw new Error('Math environment is not closed');

        // false positive, it's escaped, not a match
        if (pos > 0 && remain[pos - 1] === '\\') {
          const skipLen = pos + endDel.length;
          remain = remain.slice(skipLen);
          endPos += skipLen;
          continue;
        }

        const res = [str.slice(0, endPos + pos + endDel.length), str.slice(startDel.length, endPos + pos)];
        return res;
      }
    }

    return null;
  },
};

const atomRegex: {
  [key: string]: {
    exec: (str: string) => string[] | null
  }
} = {
  // TODO: which is correct? func: /^\\(?:[a-zA-Z]+|.)/,
  special: /^(\\\\|\\{|\\}|\\\$|\\&|\\#|\\%|\\_)/,
  math: mathPattern, /// ^\$.*\$/
  func: /^\\([a-zA-Z]+)/,
  open: /^\{/,
  close: /^\}/,
  quote: /^(`|``|'|'')/,
  ordinary: /^[^\\{}$&#%_\s]+/,
};
const commentRegex = /^%.*/;
const whitespaceRegex = /^\s+/;

interface Atom {
  type: string
  text: string | null
  whitespace: boolean
}

export class Lexer {
  _input: string;
  _remain: string;
  _pos: number;
  _nextAtom: Atom;
  _currentAtom: Atom;

  constructor(input: string) {
    this._input = input;
    this._remain = input;
    this._pos = 0;
    // @ts-expect-error _nextAtom and _currentAtom indeed assigned in `this._next()` before used
    this._nextAtom = this._currentAtom = null;
    this._next(); // get the next atom
  }

  accept(type: string, text?: string | readonly string[]) {
    if (this._nextAtom.type === type && this._matchText(text)) {
      this._next();
      return this._currentAtom.text;
    }
    return null;
  }

  expect(type: string, text?: string) {
    const nextAtom = this._nextAtom;
    // The next atom is NOT of the right type
    if (nextAtom.type !== type)
      throw new ParseError(`Expect an atom of ${type} but received ${nextAtom.type}`, this._pos, this._input);

    // Check whether the text is exactly the same
    if (!this._matchText(text))
      throw new ParseError(`Expect \`${text}\` but received \`${nextAtom.text}\``, this._pos, this._input);

    this._next();
    // Not EOF
    return this._currentAtom.text!;
  }

  get() {
    return this._currentAtom;
  }

  _skip(len: number) {
    this._pos += len;
    this._remain = this._remain.slice(len);
  }

  /* Get the next atom */
  _next() {
    let anyWhitespace = false;
    while (1) {
      // Skip whitespace (one or more)
      const whitespaceMatch = whitespaceRegex.exec(this._remain);
      if (whitespaceMatch) {
        anyWhitespace = true;
        const whitespaceLen = whitespaceMatch[0].length;
        this._skip(whitespaceLen);
      }

      // Skip comment
      const commentMatch = commentRegex.exec(this._remain);
      if (!commentMatch)
        break;
      const commentLen = commentMatch[0].length;
      this._skip(commentLen);
    }

    // Remember the current atom
    this._currentAtom = this._nextAtom;

    // Reach the end of string
    if (this._remain === '') {
      this._nextAtom = {
        type: 'EOF',
        text: null,
        whitespace: false,
      };
      return false;
    }

    // Try all kinds of atoms
    for (const type in atomRegex) {
      const regex = atomRegex[type];

      let match;
      try {
        match = regex.exec(this._remain);
      } catch (e) {
        if (e instanceof Error && e.message === 'Math environment is not closed')
          throw new ParseError('Math environment is not closed', this._pos, this._input);
        else
          throw e;
      }
      if (!match)
        continue; // not matched

      // match[1] is the useful part, e.g. '123' of '$123$', 'it' of '\\it'
      const matchText = match[0];
      const usefulText = match[1] ? match[1] : matchText;

      this._nextAtom = {
        type,
        text: usefulText,
        whitespace: anyWhitespace, /* any whitespace before the atom */
      };

      this._pos += matchText.length;
      this._remain = this._remain.slice(match[0].length);

      return true;
    }

    throw new ParseError('Unrecoganizable atom', this._pos, this._input);
  }

  /* Check whether the text of the next atom matches */
  _matchText(text?: string | readonly string[]) {
    // don't need to match
    if (text === null || text === undefined)
      return true;

    if (this._nextAtom.text === null)
      return false;

    // string comparisons are case-insensitive
    if (utils.isString(text)) { // is a string, exactly the same?
      return text.toLowerCase() === this._nextAtom.text.toLowerCase();
    } else { // is a list, match any of them?
      text = text.map((str) => {
        return str.toLowerCase();
      });
      return text.includes(this._nextAtom.text.toLowerCase());
    }
  }
}
