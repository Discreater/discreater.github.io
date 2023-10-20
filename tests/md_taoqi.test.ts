import { writeFileSync } from 'node:fs';
import MarkdownIt from 'markdown-it';
import { expect, it } from 'vitest';
import { markdownItTaOqi } from '../vite-plugins/md_plugins';
import { getLines } from '../vite-plugins/line_number';

it('should work', () => {
  const md = MarkdownIt().use(markdownItTaOqi);

  const _rendered = md.render('```cmd\n'
    + 'G:\\Scripts\\multiWindow.xlaunch\n'
    + '```');

  writeFileSync('tests/md_taoqi.test.html', _rendered);
});

it('get lines', () => {
  expect(getLines('<span>abcd</span>\n<span>a</span><span>\n</span><span>ddde</span>'))
    .toEqual(['<span>abcd</span>', '<span>a</span><span></span>', '<span>ddde</span>']);
  expect(getLines('<span>first line <span>\n</span></span>second<span> line</span>\n third line'))
    .toEqual(['<span>first line <span></span></span>', 'second<span> line</span>', ' third line']);
});
