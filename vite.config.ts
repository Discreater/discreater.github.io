import path, { resolve } from 'node:path';
import VueI18n from '@intlify/unplugin-vue-i18n/vite';
import transformerDirective from '@unocss/transformer-directives';
import Vue from '@vitejs/plugin-vue';
import Anchor from 'markdown-it-anchor';
// @ts-expect-error no-type
import MarkdownItFootNote from 'markdown-it-footnote';
import LinkAttributes from 'markdown-it-link-attributes';
import { simpleGit } from 'simple-git';
import { presetAttributify, presetIcons, presetUno } from 'unocss';
import Unocss from 'unocss/vite';
import Markdown from 'unplugin-vue-markdown/vite';
import VueRouter from 'unplugin-vue-router/vite';
import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import Layouts from 'vite-plugin-vue-layouts-next';
import { markdownItTakki } from './plugins/md/md_takki';
import { markdownItPseudocode } from './plugins/md/pseudocode_md.js';
import { markdownItTexMath } from './plugins/md/texmath';
import { articlePlugin } from './plugins/vite/article';

const markdownWrapperClasses = 'prose prose-sm m-auto text-left';

async function getLastCommitHash() {
  const git = simpleGit({
    baseDir: __dirname,
  });
  const logR = await git.log();
  const lastCommitHash = logR.latest?.hash;
  return lastCommitHash;
}

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  define: {
    'import.meta.env.VITE_BUILD_DATE': JSON.stringify(new Date().toISOString()),
    'import.meta.env.VITE_BUILD_COMMIT_HASH': JSON.stringify(await getLastCommitHash()),
  },
  plugins: [
    VueRouter({
      extensions: ['.vue', '.md'],
      // Should be sync, otherwise `vite-plugin-vue-layouts` won't work.
      importMode: (filepath) => {
        if (filepath.includes('.md'))
          return 'async';
        return 'sync';
      },
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
    articlePlugin({
      path: path.resolve(__dirname, 'src/pages/blogs'),
      route: 'blogs',
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
          .use(markdownItTexMath, {
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
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    // https://github.com/antfu/vite-plugin-inspect
    Inspect({
      // change this to enable inspect for debugging
      enabled: false,
    }),
  ],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, '404.html'),
      },
    },
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
    exclude: [
      'vue-demi',
    ],
  },
});
