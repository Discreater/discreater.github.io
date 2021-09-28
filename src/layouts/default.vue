<script setup lang="ts">
import { ref, computed } from 'vue'
import { NLayout, NLayoutSider, NLayoutFooter, NLayoutHeader, NGradientText, NAnchor, NAnchorLink } from 'naive-ui'
import { useRoute } from 'vue-router'

import MyHeader from '~/components/MyHeader.vue'
import MyFooter from '~/components/MyFooter.vue'
import meta from '~/meta'
import type { FrontMatter } from '~/types/blog_info'

const current = ref()
const frontmatter = computed(() => current.value?.frontmatter as FrontMatter)
const route = useRoute()
const currentBlog = meta.blogs.find(blog => blog.path === route.path.substring(1))
</script>

<template>
  <n-layout position="absolute" content-style="padding: 4px 24px;" class="px-4 text-center text-gray-700 dark:text-gray-200">
    <n-layout-header bordered class="h-50px">
      <my-header />
    </n-layout-header>
    <n-layout has-sider position="absolute" style="top: 70px; margin: 0 24px;">
      <n-layout :native-scrollbar="false">
        <n-gradient-text v-if="current" type="info" class="block m-auto">
          {{ frontmatter.date }}
        </n-gradient-text>
        <router-view v-slot="{ Component }">
          <component :is="Component" ref="current" />
        </router-view>
        <n-layout-footer>
          <my-footer />
          <div class="mt-5 mx-auto text-center opacity-25 text-sm">
            [Default Layout]
          </div>
        </n-layout-footer>
      </n-layout>
      <n-layout-sider>
        <n-anchor
          v-if="currentBlog"
          class="text-left"
          ignore-gap
        >
          <n-anchor-link v-for="header in currentBlog.headers" :key="header.slug" :title="header.title" :href="`#${header.slug}`" />
        </n-anchor>
      </n-layout-sider>
    </n-layout>
  </n-layout>
</template>
