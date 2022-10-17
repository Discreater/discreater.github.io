<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { NA, NAvatar, NButton, NH1, NList, NListItem, NSkeleton, NSpace, NTabPane, NTabs, NTag, NText, NThing } from 'naive-ui'
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
  <NA href="/meaningless">
    <QClock class="fixed" />
  </NA>
  <div flex flex-col items-center>
    <NH1>{{ t('intro.whos-site', { name: "Discreater" }) }}</NH1>
    <NA rel="noreferrer" href="https://github.com/discreater" target="_blank">
      <NAvatar size="large" :src="MioIcon" />
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
                  <NTag v-for="tag, idx in blog.fm.tags.split(',')" :key="idx" type="success">
                    {{ tag }}
                  </NTag>
                </NSpace>
              </template>
            </NThing>
          </NListItem>
        </NList>
      </NTabPane>
      <NTabPane name="lan-ip" tab="LAN-ip">
        <NSkeleton v-if="ip.loading" text class="w-1/3" />
        <NText>{{ ip.ip }}</NText>
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
