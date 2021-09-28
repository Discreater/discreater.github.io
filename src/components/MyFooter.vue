<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NDropdown, NIcon } from 'naive-ui'
import { InformationCircleOutline, LanguageOutline, LogoGithub, SunnyOutline, MoonOutline, HomeOutline } from '@vicons/ionicons5'

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
      <n-icon>
        <home-outline />
      </n-icon>
    </router-link>

    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="() => toggleDark()">
      <n-icon>
        <moon-outline v-if="isDark" />
        <sunny-outline v-else />
      </n-icon>
    </button>

    <n-dropdown trigger="click" :options="localeDropdownMenuOptions" @select="handleLocaleSelect">
      <a class="icon-btn mx-2" :title="t('button.toggle_langs')">
        <n-icon>
          <language-outline />
        </n-icon>
      </a>
    </n-dropdown>

    <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <n-icon><information-circle-outline /></n-icon>
    </router-link>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/Discreater" target="_blank" title="GitHub">
      <n-icon>
        <logo-github />
      </n-icon>
    </a>
  </nav>
</template>
