declare module 'virtual:article' {
  export interface ArticleAttributes {
    title: string
    lang?: string
    tags: string
    createdAt?: string
    changedAt?: string
  }

  export interface ArticleHeader {
    slug: string
    title: string
    children: ArticleHeader[]
  }

  export interface ArticleInfo {
    attributes: ArticleAttributes
    headers: ArticleHeader[]
    routePath: string
    repoPath: string
  }

  export const articles: ArticleInfo[];
}
