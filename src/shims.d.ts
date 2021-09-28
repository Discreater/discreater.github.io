/* eslint-disable import/no-duplicates */

import type { BlogInfo } from './types/blog_info'

declare interface Window {
  // extend the window
}

// with vite-plugin-md, markdowns can be treat as Vue components
declare module '*.md' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}
declare global { const __BLOGS__: BlogInfo[] }
