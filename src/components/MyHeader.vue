<script setup lang="ts">
import { NDropdown } from 'naive-ui'
import { useI18n } from 'vue-i18n'

import { toggleDark } from '~/logic'
const { t, availableLocales, locale } = useI18n()

const localeDropdownMenuOptions = availableLocales.map((al) => {
  return {
    label: al,
    key: al,
  }
})

function handleLocaleSelect(key: unknown) {
  locale.value = key as string
}
</script>

<template>
  <div flex="~" justify="center" items="center" space="x-2" h="full">
    <router-link to="/" :title="t('button.home')">
      <button i-mdi-home primary-clickable text="5xl" />
    </router-link>
    <button
      primary-clickable text="3xl" i-ri-moon-fill dark:i-ri-sun-fill :title="t('button.toggle_dark')"
      @click="() => toggleDark()"
    />
    <NDropdown trigger="click" :options="localeDropdownMenuOptions" @select="handleLocaleSelect">
      <button i-ooui-language primary-clickable text="3xl" :title="t('button.toggle_langs')" />
    </NDropdown>
  </div>
</template>
