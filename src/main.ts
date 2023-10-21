// register vue composition api globally
import { ViteSSG } from 'vite-ssg';
import { routes } from 'vue-router/auto/routes'
import { setupLayouts } from 'virtual:generated-layouts';
import App from './App.vue';

import '@unocss/reset/tailwind.css';
import 'uno.css';
import './styles/main.css';
import type { UserModule } from './types';


// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes: setupLayouts(routes) },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx));
  },
);
