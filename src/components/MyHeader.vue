<script setup lang="ts">
import { NDropdown } from 'naive-ui';
import { useI18n } from 'vue-i18n';
import { toggleDark } from '~/logic';
import { getLocaleDropdownMenuOptions } from '~/logic/locale';
import DButton from '~/ui/DButton.vue';

const { t, locale } = useI18n();
const localeDropdownMenuOptions = getLocaleDropdownMenuOptions();

function handleLocaleSelect(key: unknown) {
  locale.value = key as string;
}
</script>

<template>
  <div flex="~" justify="center" items="center" space="x-2" h="12">
    <DButton to="/" :title="t('button.home')" icon="i-carbon-home" class="text-3xl" />
    <DButton text="3xl" icon="i-carbon-moon dark:i-carbon-sun" :title="t('button.toggle_dark')"
      @click="() => toggleDark()" />
    <NDropdown trigger="click" :options="localeDropdownMenuOptions" @select="handleLocaleSelect">
      <DButton icon="i-carbon-ibm-watson-language-translator" class="text-3xl" :title="t('button.toggle_langs')" />
    </NDropdown>
  </div>
</template>
