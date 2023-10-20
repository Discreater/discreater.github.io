<script setup lang="ts">
import { useRouter } from 'vue-router';
import { NA, NAvatar, NButton, NH1, NList, NListItem, NSpace, NTabPane, NTabs, NTag, NThing } from 'naive-ui';
import { useI18n } from 'vue-i18n';

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
    <NTabs type="line" justify-content="space-evenly" default-value="blogs">
      <NTabPane name="blogs" :tab="t('intro.blogs')" class="text-left">
        <NList>
          <NListItem v-for="blog in blogs" :key="blog.path">
            <NThing>
              <template #avatar>
                <button primary-clickable i-carbon-blog class="text-4xl" text @click="() => handleBlogTitleClick(blog.path)" />
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
    </NTabs>
  </div>
</template>

<style>

</style>

<route lang="yaml">
meta:
  layout: home
</route>
