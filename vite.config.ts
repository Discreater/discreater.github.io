import path, { resolve } from 'node:path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Layouts from 'vite-plugin-vue-layouts';
import Markdown from 'unplugin-vue-markdown/vite';
import VueRouter from 'unplugin-vue-router/vite';
import VueI18n from '@intlify/unplugin-vue-i18n/vite';
import Inspect from 'vite-plugin-inspect';
import { VitePWA } from 'vite-plugin-pwa';
import Anchor from 'markdown-it-anchor';
import LinkAttributes from 'markdown-it-link-attributes';

// @ts-expect-error missing types
import TexMath from 'markdown-it-texmath';

// @ts-expect-error missing types
import MarkdownItFootNote from 'markdown-it-footnote';
import Katex from 'katex';
import Unocss from 'unocss/vite';
import { presetAttributify, presetIcons, presetUno } from 'unocss';
import transformerDirective from '@unocss/transformer-directives';
import { blogsPlugin  } from './plugins/vite/get_blogs_info';
import { markdownItTakki } from './plugins/md/md_takki';
import { markdownItPseudocode } from './plugins/md/pseudocode_md.js';

const markdownWrapperClasses = 'prose prose-sm m-auto text-left';

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    VueRouter({
      extensions: ['.vue', '.md'],
      importMode: 'async',
    }),
    // Vue must be placed after VueRouter()
    Vue({
      include: [/\.vue$/, /\.md$/],
      template: {
        compilerOptions: {
          // TODO: remove vite plugin md
          isCustomElement: tag => ['msubsup', 'mtext', 'mspace', 'msub', 'eq', 'math', 'semantics', 'annotation', 'mrow', 'msup', 'mn', 'mo', 'mi', 'mover', 'eqn', 'munderover', 'mfrac'].includes(tag),
        },
      },
    }),
    blogsPlugin({
      path: path.resolve(__dirname)
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    Unocss({
      presets: [
        presetAttributify({}),
        presetUno({}),
        presetIcons({}),
      ],
      transformers: [
        transformerDirective(),
      ],
      shortcuts: {
        'q-trans': 'transition-all duration-300 ease-in-out',
        'primary-clickable': 'q-trans hover:text-green-300',
      },
      theme: {
        colors: {
          strong: {
            light: '#363636',
            dark: '#f3f3f3',
          },
        },
        breakpoints: {
          xs: '320px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          xxl: '1600px',
        },
      },
    }),

    // https://github.com/antfu/vite-plugin-md
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      headEnabled: true,
      markdownItSetup(md) {
        md
          .use(markdownItTakki)
          .use(LinkAttributes, {
            pattern: /^https?:\/\//,
            attrs: {
              target: '_blank',
              rel: 'noopener',
            },
          })
          .use(TexMath, {
            engine: Katex,
            delimiters: 'dollars',
          })
          .use(markdownItPseudocode, {
            lineNumber: true,
            commentDelimiter: '▷ ',
          })
          .use(MarkdownItFootNote)
          .use(Anchor);
      },
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    // https://github.com/antfu/vite-plugin-inspect
    Inspect({
      // change this to enable inspect for debugging
      enabled: false,
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'robots.txt'],
      manifest: {
        name: 'Discreater\'s Blog',
        short_name: 'Discreater',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, '404.html'),
      }
    }
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head',
    ],
    exclude: [
      'vue-demi',
    ],
  },
});
