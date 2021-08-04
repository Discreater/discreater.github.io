<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { darkTheme, NConfigProvider } from 'naive-ui'

import { isDark } from '~/logic'

const theme = computed(() => {
  return isDark.value ? darkTheme : null
})

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})
</script>

<template>
  <n-config-provider :theme="theme">
    <router-view />
  </n-config-provider>
</template>
