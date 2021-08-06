<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NDropdown } from 'naive-ui'
import { isDark, toggleDark } from '~/logic'

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
  <nav class="text-xl mt-6">
    <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
      <carbon-home />
    </router-link>

    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="() => toggleDark()">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button>

    <n-dropdown trigger="click" :options="localeDropdownMenuOptions" @select="handleLocaleSelect">
      <a class="icon-btn mx-2" :title="t('button.toggle_langs')">
        <carbon-language />
      </a>
    </n-dropdown>

    <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <carbon-dicom-overlay />
    </router-link>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/Discreater" target="_blank" title="GitHub">
      <carbon-logo-github />
    </a>
  </nav>
</template>
