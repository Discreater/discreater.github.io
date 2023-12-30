<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import type { MenuOption } from 'naive-ui';
import { NA, NAvatar, NButton, NH1, NList, NListItem, NMenu, NSpace, NTabPane, NTabs, NTag, NThing } from 'naive-ui';
import { useI18n } from 'vue-i18n';

import { routes } from 'vue-router/auto/routes';
import { h } from 'vue';
import { useStorage } from '@vueuse/core';
import type { ArticleInfo } from 'virtual:article';
import { articles as allBlogs } from 'virtual:article';
import MxlIcon from '~/assets/icons/mxl.png';
import QClock from '~/components/QClock.vue';
import meta from '~/meta';

const router = useRouter();
const { t } = useI18n();

function tags(blog: ArticleInfo) {
  return blog.attributes.tags.split(',').map(tag => tag.trim());
}

// show dev blogs only in dev mode
const blogs = allBlogs.filter(blog => !tags(blog).includes('WIP') || import.meta.env.DEV);

function handleBlogTitleClick(key: unknown) {
  router.push(`/${key}`);
}

function lastChild(route: typeof routes[0]) {
  if (route.children) {
    if (route.children.length === 1) {
      return lastChild(route.children[0]);
    } else {
      console.error('route.children.length != 1');
      return route;
    }
  } else {
    return route;
  }
}

const diaries = routes
  .find(route => route.path === '/diaries' && route.children)
  ?.children!
  .sort((a, b) => {
    return Number(b.path) - Number(a.path);
  }).map((yearRoute) => {
    const year = yearRoute.path;
    return {
      label: year,
      key: year,
      children: yearRoute.children!.sort((a, b) => {
        return Number(b.path) - Number(a.path);
      }).map((monthRoute) => {
        const month = monthRoute.path;
        const date = `${year}.${month}`;
        return {
          label: () => h(
            RouterLink,
            {
              to: {
                path: lastChild(monthRoute).name as string,
              },
            },
            { default: () => date },
          ),
          key: date,
        };
      }),
    } as MenuOption;
  });

const tabValue = useStorage('homeTabValue', 'blogs');

function handleTabChange(value: string) {
  tabValue.value = value;
}
</script>

<template>
  <RouterLink to="/meaningless">
    <QClock class="fixed" />
  </RouterLink>
  <div flex flex-col items-center>
    <NH1>{{ t('intro.whos-site', { name: meta.name }) }}</NH1>
    <NA rel="noreferrer" :href="meta.homeUrl" target="_blank">
      <NAvatar :size="80" :src="MxlIcon" object-fit="cover" />
      <p>{{ meta.name }}</p>
    </NA>
    <NTabs type="line" justify-content="space-evenly" :value="tabValue" animated @update:value="handleTabChange">
      <NTabPane name="blogs" :tab="t('intro.blogs')">
        <NList class="px-2">
          <NListItem v-for="blog in blogs" :key="blog.path">
            <NThing>
              <template #avatar>
                <button
                  class="text-4xl primary-clickable i-carbon-blog text"
                  @click="() => handleBlogTitleClick(blog.path)"
                />
              </template>
              <template #header>
                <NButton class="hover:underline" text @click="() => handleBlogTitleClick(blog.path)">
                  {{ blog.attributes.title }}
                </NButton>
              </template>
              <template #header-extra>
                {{ blog.attributes.createdAt }}
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
