<script setup lang="ts">
import { NIcon, NButton, NDropdown } from 'naive-ui'
import { useI18n } from 'vue-i18n'
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
  <div class="flex">
    <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
      <n-icon size="40">
        <carbon-home />
      </n-icon>
    </router-link>
    <div class="flex-grow" />
    <n-button text class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="() => toggleDark()">
      <n-icon size="40">
        <carbon-moon v-if="isDark" />
        <carbon-sun v-else />
      </n-icon>
    </n-button>
    <n-dropdown trigger="click" :options="localeDropdownMenuOptions" @select="handleLocaleSelect">
      <a class="icon-btn mx-2" :title="t('button.toggle_langs')">
        <n-icon size="40">
          <carbon-language />
        </n-icon>
      </a>
    </n-dropdown>
  </div>
</template>
