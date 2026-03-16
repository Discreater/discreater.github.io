<script setup lang="ts">
import { NDropdown } from "naive-ui";
import { useI18n } from "vue-i18n";
import { toggleDark } from "~/logic";
import { getLocaleDropdownMenuOptions } from "~/logic/locale";
import DButton from "~/ui/DButton.vue";
import DButtonGroup from "~/ui/DButtonGroup.vue";

const { t, locale } = useI18n();
const localeDropdownMenuOptions = getLocaleDropdownMenuOptions();

function handleLocaleSelect(key: unknown) {
  locale.value = key as string;
}
</script>

<template>
  <DButtonGroup class="gap-2 h-12">
    <DButton to="/" :title="t('button.home')" icon="icon-[carbon--home]" class="text-3xl" />
    <DButton
      class="text-3xl"
      icon="icon-[carbon--moon] dark:icon-[carbon--sun]"
      :title="t('button.toggle_dark')"
      @click="() => toggleDark()"
    />
    <NDropdown trigger="click" :options="localeDropdownMenuOptions" @select="handleLocaleSelect">
      <DButton
        icon="icon-[carbon--ibm-watson-language-translator]"
        class="text-3xl"
        :title="t('button.toggle_langs')"
      />
    </NDropdown>
  </DButtonGroup>
</template>
