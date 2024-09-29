/*
 * The entry points of pseudocode-js
 **/

import type { Options } from './src/Renderer';
import { Lexer } from './src/Lexer';
import { Parser } from './src/Parser';
import { Renderer } from './src/Renderer';

export { ParseError } from './src/ParseError';

export type { Options } from './src/Renderer';
function makeRenderer(data: string, options?: Options) {
  const lexer = new Lexer(data);
  const parser = new Parser(lexer);
  return new Renderer(parser, options);
}

export function render(input: string, baseDomEle: HTMLElement, options?: Options) {
  if (input === null || input === undefined)
    throw new Error('input cannot be empty');

  const renderer = makeRenderer(input, options);
  const elem = renderer.toDOM();
  if (baseDomEle)
    baseDomEle.appendChild(elem);

  return elem;
}
export function renderToString(input: string, options?: Options) {
  if (input === null || input === undefined)
    throw new Error('input cannot be empty');

  const renderer = makeRenderer(input, options);

  return renderer.toMarkup();
}
export function renderElement(elem: HTMLElement, options?: Options) {
  if (!(elem instanceof Element))
    throw new Error('a DOM element is required');

  elem.style.display = 'none';

  const renderer = makeRenderer(elem.textContent ?? '', options);
  const newElem = renderer.toDOM();
  elem.replaceWith(newElem);
}

export function renderClass(class_name: string, options: Options) {
  [].forEach.call(
    document.getElementsByClassName(class_name),
    (el) => { renderElement(el, options); },
  );
}
