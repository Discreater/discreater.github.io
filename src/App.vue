<script setup lang="ts">
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import {
  NConfigProvider,
  darkTheme,
} from 'naive-ui';

import { useI18n } from 'vue-i18n';
import { RouterView } from 'vue-router';
import meta from './meta';
import { getLocale } from './logic/locale';
import { isDark } from '~/logic';

const theme = computed(() => {
  return isDark.value ? darkTheme : null;
});

const themePrint = computed(() => {
  return isDark.value
    ? undefined
    : {
        Card: {
          colorEmbedded: '#fff',
        },
      };
});

const { locale } = useI18n();

const [nLocale, nDateLocale] = getLocale(locale.value);

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: `${meta.name}'s Site`,
  meta: [
    { name: 'description', content: 'Blogs and others' },
  ],
});
</script>

<template>
  <NConfigProvider :locale="nLocale" :date-locale="nDateLocale" :theme="theme" :theme-overrides="themePrint">
    <RouterView />
  </NConfigProvider>
</template>
