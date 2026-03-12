import type { UserModule } from './types';
import { setupLayouts } from 'virtual:generated-layouts';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';

import App from './App.vue';
import '@unocss/reset/tailwind.css';
import 'uno.css';
import './styles/main.css';

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
});

const app = createApp(App);

app.use(router);

// install all modules under `modules/`
Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
  .forEach(i => i.install?.(app));

app.mount('#app');
