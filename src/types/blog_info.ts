export interface FrontMatter {
  title: string
  lang: string
  tags: string
  data: string
}

export interface BlogInfo {
  fm: FrontMatter
  path: string
}
