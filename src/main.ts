import { createApp } from 'vue';
import type { RouteRecordRaw } from 'vue-router/auto';
import { createRouter, createWebHistory } from 'vue-router/auto';
import { setupLayouts } from 'virtual:generated-layouts';
import App from './App.vue';

import '@unocss/reset/tailwind.css';
import 'uno.css';
import './styles/main.css';
import type { UserModule } from './types';

function setupLayoutsRec(rs: RouteRecordRaw[]) {
  rs.forEach((r) => {
    if (r.children && r.children.length > 0)
      r.children = setupLayoutsRec(r.children);
  });
  
  return setupLayouts(rs);
}

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: setupLayoutsRec,
});

const app = createApp(App);

app.use(router);

// install all modules under `modules/`
Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
  .forEach(i => i.install?.(app));

app.mount('#app');
