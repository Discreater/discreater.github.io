import process from 'node:process';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },
  modules: [
    // should add before content!
    'nuxt-content-assets',
    '@nuxt/content',
    '@nuxt/ui',
  ],
  content: {
    markdown: {

    },
  },
  ui: {
    icons: ['mdi'],
  },
  hooks: {
    close: (nuxt) => {
      if (!nuxt.options._prepare)
        process.exit();
    },
  },
  devtools: { enabled: true },
});
