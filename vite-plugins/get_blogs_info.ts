import path from 'path'
import fs from 'fs'
import fm from 'front-matter'
import type { BlogInfo, FrontMatter } from '../src/types/blog_info'

export function get_all_blogs(project_path: string): string {
  const base_path = path.resolve(project_path, 'src/pages/blog')
  const blogs = fs.readdirSync(base_path)
  const blogs_path = blogs.map(blog => ({ path: path.join(base_path, blog, 'index.md'), name: blog }))
  const blog_attributes = blogs_path.flatMap((blog) => {
    let data
    try {
      data = fs.readFileSync(blog.path, 'utf-8')
      const fmResult = fm(data)
      return [
        {
          fm: fmResult.attributes as FrontMatter,
          path: `blog/${blog.name}`,
        } as BlogInfo,
      ]
    }
    catch (_) {
      return []
    }
  })
  return JSON.stringify(blog_attributes)
}
