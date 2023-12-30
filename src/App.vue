<script setup lang="ts">
import { computed } from 'vue';
import { useHead } from '@unhead/vue';
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

const naiveLocale = computed(() => getLocale(locale.value));

useHead({
  title: `${meta.name}'s Site`,
  meta: [
    { name: 'description', content: 'Blogs and others' },
  ],
});
</script>

<template>
  <NConfigProvider
    :locale="naiveLocale.locale" :date-locale="naiveLocale.dateLocale" :theme="theme"
    :theme-overrides="themePrint"
  >
    <RouterView />
  </NConfigProvider>
</template>
