<script setup lang="ts">
import { computed, ref } from 'vue'
import { NAnchor, NAnchorLink, NCard, NGradientText, NLayout, NLayoutHeader } from 'naive-ui'
import { useRoute } from 'vue-router'

import MyHeader from '~/components/MyHeader.vue'
import MyFooter from '~/components/MyFooter.vue'
import meta from '~/meta'
import QTime from '~/components/QTime.vue'
import type { FrontMatter } from '~/types/blog_info'

const current = ref()
const frontmatter = computed(() => current.value?.frontmatter as FrontMatter)
const route = useRoute()
const currentBlog = meta.blogs.find(blog => blog.path === route.path.substring(1))
</script>

<template>
  <n-layout position="absolute" class="text-gray-700 dark:text-gray-200" :native-scrollbar="false">
    <n-layout-header bordered min-h="13">
      <my-header />
    </n-layout-header>
    <section p="y-6 x-6">
      <div container max-w="320" m="auto" flex space="x-2">
        <n-card embedded flex-grow>
          <n-gradient-text v-if="current" class="block m-auto">
            <q-time :time="frontmatter.date" />
          </n-gradient-text>
          <router-view v-slot="{ Component }">
            <component :is="Component" ref="current" />
          </router-view>
          <div>
            <my-footer />
            <div m="t-5 x-auto" text="center sm" opacity="25">
              [Default Layout]
            </div>
          </div>
        </n-card>
        <aside sticky top="4" self-start>
          <n-card embedded hoverable content-style="padding-left: 0.5rem;">
            <n-anchor
              v-if="currentBlog"
              text="left"
              ignore-gap
            >
              <n-anchor-link v-for="header in currentBlog.headers" :key="header.slug" :title="header.title" :href="`#${header.slug}`" />
            </n-anchor>
          </n-card>
        </aside>
      </div>
    </section>
  </n-layout>
</template>
