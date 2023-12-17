<script setup lang="ts">
import { NDropdown } from 'naive-ui';
import { useI18n } from 'vue-i18n';
import { getLocaleDropdownMenuOptions } from '~/logic/locale';
import { toggleDark } from '~/logic';
import DButton from '~/ui/DButton.vue';

const { t, locale } = useI18n();
const localeDropdownMenuOptions = getLocaleDropdownMenuOptions();

function handleLocaleSelect(key: unknown) {
  locale.value = key as string;
}
</script>

<template>
  <div flex="~" justify="center" items="center" space="x-2" h="12">
    <DButton to="/" :title="t('button.home')" icon="i-mdi-home" class="text-3xl" />
    <DButton
      text="3xl" icon="i-ri-moon-fill dark:i-ri-sun-fill" :title="t('button.toggle_dark')"
      @click="() => toggleDark()"
    />
    <NDropdown trigger="click" :options="localeDropdownMenuOptions" @select="handleLocaleSelect">
      <DButton icon="i-ooui-language" class="text-3xl" :title="t('button.toggle_langs')" />
    </NDropdown>
  </div>
</template>
