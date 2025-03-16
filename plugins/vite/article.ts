import type { SimpleGit } from 'simple-git';
import type { ArticleAttributes, ArticleHeader, ArticleInfo } from 'virtual:article';
import type { Plugin } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import fm from 'front-matter';
import MarkdownIt from 'markdown-it';
import Anchor from 'markdown-it-anchor';
import { simpleGit } from 'simple-git';
import { normalizePath } from 'vite';

function insertHeader(headers: ArticleHeader[], header: ArticleHeader, level: number) {
  if (level === 1 || headers.length === 0)
    headers.push(header);
  else
    insertHeader(headers[headers.length - 1].children, header, level - 1);
}

function extractBodyIt(body: string) {
  const headers: ArticleHeader[] = [];
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

interface Article {
  path: string
  name: string
}

type ISO8601Date = string;

interface GitFileStatus {
  /** ISO 8601 */
  created_at: ISO8601Date
  /** ISO 8601 */
  changed_at?: ISO8601Date
}

async function parseArticleGitInfo(article: Article, git: SimpleGit): Promise<GitFileStatus> {
  const logResp = await git.log({
    file: article.path,
  });

  const dates = logResp.all.map(t => t.date);
  if (dates.length === 0)
    dates.push(new Date().toISOString());

  const created_at = dates[dates.length - 1];
  const changed_at = dates.length === 1 ? undefined : dates[0];
  return {
    created_at,
    changed_at,
  };
}

async function getArticleInfo(article: Article, git: SimpleGit, route: (name: string) => string): Promise<ArticleInfo> {
  const data = fs.readFileSync(article.path, 'utf-8');
  const fmResult = fm<any>(data);
  const headers = extractBodyIt(fmResult.body);

  const created_at = fmResult.attributes.date;
  const articleGitInfo = await parseArticleGitInfo(article, git);

  const attributes: ArticleAttributes = {
    title: fmResult.attributes.title,
    tags: fmResult.attributes.tags,
    createdAt: created_at ?? articleGitInfo.created_at,
    changedAt: articleGitInfo.changed_at,
  };
  const routePath = route(article.name);
  const repoPath = path.relative(process.cwd(), article.path);
  return {
    attributes,
    headers,
    routePath,
    repoPath: normalizePath(repoPath),
  };
}

async function getAllArticlesInfo(config: InternalArticlePluginOptions): Promise<string> {
  const base_path = config.path;

  const articles = fs.readdirSync(base_path);
  const git = simpleGit(base_path);
  const articlePaths = articles
    .map(article => ({ path: path.join(base_path, article, 'index.md'), name: article }))
    .filter(article => (fs.existsSync(article.path)));
  const articleAttributesPromise = articlePaths.map(article => getArticleInfo(article, git, config.route));
  const articleAttributes = (await Promise.allSettled(articleAttributesPromise)).flatMap((value) => {
    if (value.status === 'rejected') {
      console.error(`Error: parsing info of article: ${value.reason}`);
      return [];
    }
    return [value.value];
  });
  articleAttributes.sort((a, b) => {
    let aDate: Date | undefined;
    let bDate: Date | undefined;
    let dateRes: number;

    if (a.attributes.createdAt === undefined && b.attributes.createdAt === undefined) {
      dateRes = 0;
    } else if (a.attributes.createdAt === undefined || b.attributes.createdAt === undefined) {
      return a.attributes.createdAt === undefined ? -1 : 1;
    } else {
      try {
        aDate = new Date(a.attributes.createdAt);
        bDate = new Date(b.attributes.createdAt);
      } catch (_) {
      }
      if (aDate === undefined && bDate === undefined)
        dateRes = 0;
      else if (aDate === undefined || bDate === undefined)
        return aDate === undefined ? -1 : 1;
      else
        dateRes = bDate.getTime() - aDate.getTime();
    }
    if (dateRes !== 0)
      return dateRes;
    return a.routePath > b.routePath ? -1 : 1;
  });
  return JSON.stringify(articleAttributes, null, 2);
}

interface InternalArticlePluginOptions {
  path: string
  route: (name: string) => string
}

export interface ArticlePluginOptions {
  path: string
  /** base route path or the map function */
  route: string | ((name: string) => string)
}

function resolveOptions(config: ArticlePluginOptions): InternalArticlePluginOptions {
  let route = config.route;
  if (typeof route === 'string')
    route = (name: string) => `${config.route}/${name}`;
  return {
    path: config.path,
    route,
  };
}

export async function articlePlugin(config: ArticlePluginOptions): Promise<Plugin<any>> {
  const virtualModuleId = 'virtual:article';
  const resolvedVirtualModuleId = `\0${virtualModuleId}`;
  const internalConfig = resolveOptions(config);
  const articles = await getAllArticlesInfo(internalConfig);

  return {
    name: 'blogs-plugin',
    resolveId(id) {
      if (id === virtualModuleId)
        return resolvedVirtualModuleId;
    },
    load(id) {
      if (id === resolvedVirtualModuleId)
        return `export const articles = ${articles};`;
    },
  };
}
