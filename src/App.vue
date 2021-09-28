<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { darkTheme, NConfigProvider } from 'naive-ui'

import meta from './meta'
import { isDark } from '~/logic'

const theme = computed(() => {
  return isDark.value ? darkTheme : null
})

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: `${meta.name}'s Site`,
  meta: [
    { name: 'description', content: 'Blogs and others' },
  ],
})
</script>

<template>
  <n-config-provider :theme="theme">
    <router-view />
  </n-config-provider>
</template>
