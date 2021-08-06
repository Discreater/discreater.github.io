<script setup lang="ts">
import { useRouter } from 'vue-router'
import { NButton, NTag, NThing, NListItem, NList, NH1, NAvatar, NA, NIcon, NTabs, NTabPane } from 'naive-ui'
import { useI18n } from 'vue-i18n'

import CarbonBook from 'virtual:vite-icons/carbon/book'

import MioIcon from '~/assets/icons/mio.png'
import meta from '~/meta'

const router = useRouter()
const { t } = useI18n()

const blogs = meta.blogs

const handleBlogTitleClick = (key: unknown) => {
  router.push(`/${key}`)
}

</script>

<template>
  <div>
    <n-h1>{{ t('intro.whos-blog', {name: "Discreater"}) }}</n-h1>
    <n-a rel="noreferrer" href="https://github.com/discreater" target="_blank">
      <n-avatar size="large" :src="MioIcon" />
      <p>
        Discreater
      </p>
    </n-a>
    <n-tabs type="line" justify-content="space-evenly" default-value="blogs">
      <n-tab-pane name="blogs" :tab="t('intro.blogs')" class="text-left">
        <n-list>
          <n-list-item v-for="blog in blogs" :key="blog.path">
            <n-thing>
              <template #avatar>
                <n-button text @click="() => handleBlogTitleClick(blog.path)">
                  <n-icon size="45">
                    <carbon-book />
                  </n-icon>
                </n-button>
              </template>
              <template #header>
                <n-button text @click="() => handleBlogTitleClick(blog.path)">
                  {{ blog.fm.title }}
                </n-button>
              </template>
              <template #header-extra>
                {{ blog.fm.date }}
              </template>
              <template #description>
                <n-tag type="success">
                  {{ blog.fm.tags }}
                </n-tag>
              </template>
            </n-thing>
          </n-list-item>
        </n-list>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
