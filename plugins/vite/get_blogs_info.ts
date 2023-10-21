import path from 'node:path';
import fs from 'node:fs';
import fm from 'front-matter';
import MarkdownIt from 'markdown-it';
import Anchor from 'markdown-it-anchor';

import type { BlogHeader, BlogInfo, FrontMatter } from '../../src/types/blog_info';

function insertHeader(headers: BlogHeader[], header: BlogHeader, level: number) {
  if (level === 1 || headers.length === 0)
    headers.push(header);
  else
    insertHeader(headers[headers.length - 1].children, header, level - 1);
}

function extractBodyIt(body: string) {
  const headers: BlogHeader[] = [];
  const md = MarkdownIt().use(Anchor, {
    callback: (_token, { slug, title }) => {
      const header = {
        title,
        slug,
        children: [],
      };
      const level = Number.parseInt(_token.tag.substring(1));
      if (!Number.isNaN(level))
        insertHeader(headers, header, level);
    },
  });
  md.render(body);
  return headers;
}

// function extractBody(body: string) {
//   const tokens = marked.lexer(body)
//   const headers = tokens.filter(token => token.type === 'heading' && token.depth === 2).map((token) => {
//     const tokenList = [token];
//     (tokenList as TokensList).links = {}
//     return { html: marked.parser(tokenList as TokensList), token: token as Tokens.Heading }
//   })
//   return headers
// }

export function get_all_blogs(project_path: string): string {
  const base_path = path.resolve(project_path, 'src/pages/blogs');
  const blogs = fs.readdirSync(base_path);
  const blogs_path = blogs.map(blog => ({ path: path.join(base_path, blog, 'index.md'), name: blog }));
  const blog_attributes = blogs_path.flatMap((blog) => {
    let data;
    try {
      data = fs.readFileSync(blog.path, 'utf-8');
      const fmResult = fm(data);
      const headers = extractBodyIt(fmResult.body);
      return [
        {
          fm: fmResult.attributes as FrontMatter,
          headers,
          path: `blogs/${blog.name}`,
        } as BlogInfo,
      ];
    } catch (_) {
      return [];
    }
  });
  blog_attributes.sort((a, b) => {
    let aDate: Date | undefined;
    let bDate: Date | undefined;
    try {
      aDate = new Date(a.fm.date);
      bDate = new Date(b.fm.date);
    } catch (_) {
    }
    let dateRes: number;
    if (aDate === undefined && bDate === undefined)
      dateRes = 0;
    else if (aDate === undefined || bDate === undefined)
      return aDate === undefined ? -1 : 1;
    else
      dateRes = bDate.getTime() - aDate.getTime();
    if (dateRes !== 0)
      return dateRes;
    return a.path > b.path ? -1 : 1;
  });
  return JSON.stringify(blog_attributes);
}
