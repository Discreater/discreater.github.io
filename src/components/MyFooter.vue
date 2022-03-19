<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NDropdown } from 'naive-ui'

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
  <nav text="xl" m="t-6" space="x-2">
    <router-link to="/" :title="t('button.home')">
      <button primary-clickable i-mdi-home />
    </router-link>

    <button primary-clickable i-ri-moon-fill dark:i-ri-sun-fill :title="t('button.toggle_dark')" @click="() => toggleDark()" />

    <n-dropdown trigger="click" :options="localeDropdownMenuOptions" @select="handleLocaleSelect">
      <button i-ooui-language primary-clickable :title="t('button.toggle_langs')" />
    </n-dropdown>

    <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <button primary-clickable i-ri-information-fill />
    </router-link>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/Discreater" target="_blank" title="GitHub">
      <button primary-clickable i-mdi-github />
    </a>
  </nav>
</template>
