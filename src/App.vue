<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import {
  NConfigProvider, darkTheme,
  dateDeDE, dateEnUS, dateEsAR, dateFrFR, dateItIT, dateJaJP, dateRuRU, dateZhCN,
  deDE, enUS, esAR, frFR, itIT, jaJP, ruRU, zhCN,
} from 'naive-ui'

import { useI18n } from 'vue-i18n'
import meta from './meta'
import { isDark } from '~/logic'

const theme = computed(() => {
  return isDark.value ? darkTheme : null
})

const { locale } = useI18n()

const localeMap: Record<string, [any, any]> = {
  'en': [enUS, dateEnUS],
  'zh-CN': [zhCN, dateZhCN],
  'ja': [jaJP, dateJaJP],
  'de': [deDE, dateDeDE],
  'es': [esAR, dateEsAR],
  'fr': [frFR, dateFrFR],
  'it': [itIT, dateItIT],
  'ru': [ruRU, dateRuRU],
}

function getLocale(locale: string) {
  if (locale in localeMap)
    return localeMap[locale]

  return localeMap.en
}

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
  <n-config-provider :locale="getLocale(locale)[0]" :date-locale="getLocale(locale)[1]" :theme="theme">
    <router-view />
  </n-config-provider>
</template>
