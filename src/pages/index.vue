<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import type { MenuOption } from 'naive-ui';
import { NA, NAvatar, NButton, NH1, NList, NListItem, NMenu, NSpace, NTabPane, NTabs, NTag, NThing } from 'naive-ui';
import { useI18n } from 'vue-i18n';

import generatedRoutes from 'virtual:generated-pages';
import { h } from 'vue';
import { useStorage } from '@vueuse/core';
import MxlIcon from '~/assets/icons/mxl.png';
import meta from '~/meta';
import QClock from '~/components/QClock.vue';
import type { BlogInfo } from '~/types/blog_info';

const router = useRouter();
const { t } = useI18n();

function tags(blog: BlogInfo) {
  return blog.fm.tags.split(',').map(tag => tag.trim());
}

const blogs = meta.blogs.filter(blog => !tags(blog).includes('WIP') || import.meta.env.DEV);

function handleBlogTitleClick(key: unknown) {
  router.push(`/${key}`);
}

const diaries = generatedRoutes.filter((route) => {
  // route: /diary/2022/11
  const splitted = route.path.split('/');
  return splitted[1] === 'diaries' && splitted.length >= 4;
}).map((route) => {
  const splitted = route.path.split('/');
  return {
    year: splitted[2],
    month: splitted[3],
    route,
  };
}).sort((a, b) => {
  if (a.year === b.year)
    return Number(b.month) - Number(a.month);
  return Number(b.year) - Number(a.year);
}).map(({ year, month, route }) => {
  return {
    label: () => h(
      RouterLink,
      {
        to: {
          path: route.path,
        },
      },
      { default: () => `${year}.${month}` },
    ),
    key: `${year}/${month}`,
    route,
  } as MenuOption;
});

const tabValue = useStorage('homeTabValue', 'blogs');

function handleTabChange(value: string) {
  tabValue.value = value;
}
</script>

<template>
  <NA href="/meaningless">
    <QClock class="fixed" />
  </NA>
  <div flex flex-col items-center>
    <NH1>{{ t('intro.whos-site', { name: "Discreater" }) }}</NH1>
    <NA rel="noreferrer" href="https://github.com/discreater" target="_blank">
      <NAvatar :size="80" :src="MxlIcon" object-fit="cover" />
      <p>Discreater</p>
    </NA>
    <NTabs type="line" justify-content="space-evenly" :value="tabValue" animated @update:value="handleTabChange">
      <NTabPane name="blogs" :tab="t('intro.blogs')">
        <NList class="px-2">
          <NListItem v-for="blog in blogs" :key="blog.path">
            <NThing>
              <template #avatar>
                <button class="text-4xl primary-clickable i-carbon-blog text" @click="() => handleBlogTitleClick(blog.path)" />
              </template>
              <template #header>
                <NButton class="hover:underline" text @click="() => handleBlogTitleClick(blog.path)">
                  {{ blog.fm.title }}
                </NButton>
              </template>
              <template #header-extra>
                {{ blog.fm.date }}
              </template>
              <template #description>
                <NSpace>
                  <NTag v-for="tag, idx in tags(blog)" :key="idx" type="success">
                    {{ tag.trim() }}
                  </NTag>
                </NSpace>
              </template>
            </NThing>
          </NListItem>
        </NList>
      </NTabPane>
      <NTabPane name="diaries" :tab="t('home.diaries')">
        <NMenu :options="diaries" />
      </NTabPane>
    </NTabs>
  </div>
</template>

<style></style>

<route lang="yaml">
meta:
  layout: home
</route>
