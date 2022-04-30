<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { NA, NAvatar, NButton, NH1, NList, NListItem, NSkeleton, NTabPane, NTabs, NTag, NText, NThing } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import axios from 'axios'

import MioIcon from '~/assets/icons/mio.png'
import meta from '~/meta'
import QClock from '~/components/QClock.vue'

const router = useRouter()
const { t } = useI18n()

const blogs = meta.blogs

const handleBlogTitleClick = (key: unknown) => {
  router.push(`/${key}`)
}

const ip = reactive({
  ip: '',
  loading: true,
})

axios.get('https://api.github.com/repos/discreater/discreater.github.io/issues/2/comments', {
}).then((resp) => {
  const data = (resp.data as any[])
  const comment = data.reduce((p, c) => {
    const pDate = new Date(p.created_at)
    const cDate = new Date(c.created_at)
    if (pDate > cDate)
      return p
    else
      return c
  })

  ip.ip = JSON.stringify(comment.body)
  ip.loading = false
}).catch((reason) => {
  console.error(reason)
})

</script>

<template>
  <n-a href="/meaningless">
    <q-clock class="fixed" />
  </n-a>
  <div flex flex-col items-center>
    <n-h1>{{ t('intro.whos-site', { name: "Discreater" }) }}</n-h1>
    <n-a rel="noreferrer" href="https://github.com/discreater" target="_blank">
      <n-avatar size="large" :src="MioIcon" />
      <p>Discreater</p>
    </n-a>
    <n-tabs type="line" justify-content="space-evenly" default-value="blogs">
      <n-tab-pane name="blogs" :tab="t('intro.blogs')" class="text-left">
        <n-list>
          <n-list-item v-for="blog in blogs" :key="blog.path">
            <n-thing>
              <template #avatar>
                <button primary-clickable i-carbon-blog class="text-4xl" text @click="() => handleBlogTitleClick(blog.path)" />
              </template>
              <template #header>
                <n-button class="hover:underline" text @click="() => handleBlogTitleClick(blog.path)">
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
      <n-tab-pane name="lan-ip" tab="LAN-ip">
        <n-skeleton v-if="ip.loading" text class="w-1/3" />
        <n-text>{{ ip.ip }}</n-text>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<style>

</style>

<route lang="yaml">
meta:
  layout: home
</route>
