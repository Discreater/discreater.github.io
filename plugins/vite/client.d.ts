declare module 'virtual:article' {
  export interface FrontMatter {
    title: string
    lang?: string
    tags: string
    date: string
  }
  
  export interface ArticleHeader {
    slug: string
    title: string
    children: ArticleHeader[]
  }
  
  export interface ArticleInfo {
    fm: FrontMatter
    headers: ArticleHeader[]
    path: string
  }
  
  export const blogs: ArticleInfo[];
}
