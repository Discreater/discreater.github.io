import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        'strong-light': '#363636',
        'strong-dark': '#f3f3f3',
      }
    }
  }
}
