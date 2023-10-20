<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { NDropdown } from 'naive-ui';
import { getLocaleDropdownMenuOptions } from '~/logic/locale';

import { isDark, toggleDark } from '~/logic';

const { t, locale } = useI18n();

function handleLocaleSelect(key: unknown) {
  locale.value = key as string;
}
const localeDropdownMenuOptions = getLocaleDropdownMenuOptions();
</script>

<template>
  <nav text="xl" m="t-6" flex justify-center items-center space="x-2">
    <router-link primary-clickable i-mdi-home inline-block to="/" :title="t('button.home')" />

    <button primary-clickable i-ri-moon-fill dark:i-ri-sun-fill :title="isDark ? t('button.toggle_light') : t('button.toggle_dark')" @click="() => toggleDark()" />

    <NDropdown trigger="click" :options="localeDropdownMenuOptions" @select="handleLocaleSelect">
      <button i-ooui-language primary-clickable :title="t('button.toggle_langs')" />
    </NDropdown>

    <router-link primary-clickable i-ri-information-fill to="/about" :title="t('button.about')" />

    <a primary-clickable i-mdi-github rel="noreferrer" href="https://github.com/Discreater" target="_blank" title="GitHub" />
  </nav>
</template>
