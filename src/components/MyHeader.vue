<script setup lang="ts">
import { NDropdown } from 'naive-ui';
import { useI18n } from 'vue-i18n';
import { getLocaleDropdownMenuOptions } from '~/logic/locale';
import { toggleDark } from '~/logic';

const { t, locale } = useI18n();
const localeDropdownMenuOptions = getLocaleDropdownMenuOptions();

function handleLocaleSelect(key: unknown) {
  locale.value = key as string;
}
</script>

<template>
  <div flex="~" justify="center" items="center" space="x-2" h="12">
    <RouterLink to="/" :title="t('button.home')">
      <button i-mdi-home primary-clickable text="3xl" />
    </RouterLink>
    <button
      primary-clickable text="3xl" i-ri-moon-fill dark:i-ri-sun-fill :title="t('button.toggle_dark')"
      @click="() => toggleDark()"
    />
    <NDropdown trigger="click" :options="localeDropdownMenuOptions" @select="handleLocaleSelect">
      <button i-ooui-language primary-clickable text="3xl" :title="t('button.toggle_langs')" />
    </NDropdown>
  </div>
</template>
