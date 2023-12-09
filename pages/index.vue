<script setup lang="ts">
import type { TabItem } from '@nuxt/ui/dist/runtime/types';

definePageMeta({
  layout: 'home',
});
const appConfig = useAppConfig();

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());

const blogs = navigation.value?.find(item => item._path === '/blogs')?.children;
const diaries = navigation.value?.find(item => item._path === '/diaries')?.children;

const tabItems: TabItem[] = [
  {
    key: 'blogs',
    label: 'Blogs',
  },
  {
    key: 'diaries',
    label: 'Diaries',
  },
];
</script>

<template>
  <NuxtLink to="/meaningless">
    <QClock class="fixed" />
  </NuxtLink>
  <div class="flex flex-col items-center">
    <h1 class="text-3xl mb-5">
      {{ appConfig.meta.name }} 的主页
    </h1>
    <NuxtLink :to="appConfig.meta.homeUrl" target="_blank">
      <img class="w-20 h-20 object-cover rounded" src="~/assets/img/mxl.png">
      <p>{{ appConfig.meta.name }}</p>
    </NuxtLink>
    <UTabs :items="tabItems">
      <template #item="{ item }">
        <template v-if="item.key === 'blogs'">
          <UCard v-for="blog in blogs" :key="blog._path">
            <template #header>
              {{ blog.title }}
            </template>
          </UCard>
        </template>
        <template v-else>
          diaries
        </template>
      </template>
    </UTabs>
  </div>
</template>
