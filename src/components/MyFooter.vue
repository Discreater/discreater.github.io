<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { NDropdown } from 'naive-ui';
import { getLocaleDropdownMenuOptions } from '~/logic/locale';

import { isDark, toggleDark } from '~/logic';
import DButton from '~/ui/DButton.vue';

const { t, locale } = useI18n();

function handleLocaleSelect(key: unknown) {
  locale.value = key as string;
}
const localeDropdownMenuOptions = getLocaleDropdownMenuOptions();
</script>

<template>
  <nav text="xl" m="t-6" flex justify-center items-center space="x-2">
    <DButton icon="i-mdi-home" to="/" :title="t('button.home')" />

    <DButton icon="i-ri-moon-fill dark:i-ri-sun-fill" :title="isDark ? t('button.toggle_light') : t('button.toggle_dark')" @click="() => toggleDark()" />

    <NDropdown trigger="click" :options="localeDropdownMenuOptions" @select="handleLocaleSelect">
      <DButton icon="i-ooui-language" :title="t('button.toggle_langs')" />
    </NDropdown>

    <DButton to="/about" icon="i-mdi-information" :title="t('button.about')" />

    <DButton to="https://github.com/Discreater" icon="i-mdi-github" target="_blank" />
  </nav>
</template>
