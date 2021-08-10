export interface FrontMatter {
  title: string
  lang?: string
  tags: string
  date: string
}

export interface BlogHeader {
  slug: string
  title: string
}

export interface BlogInfo {
  fm: FrontMatter
  headers: BlogHeader[]
  path: string
}
