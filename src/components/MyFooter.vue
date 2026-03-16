<script setup lang="ts">
import { NDropdown } from "naive-ui";
import { useI18n } from "vue-i18n";
import { isDark, toggleDark } from "~/logic";

import { getLocaleDropdownMenuOptions } from "~/logic/locale";
import DButton from "~/ui/DButton.vue";
import DButtonGroup from "~/ui/DButtonGroup.vue";

const { t, locale } = useI18n();

function handleLocaleSelect(key: unknown) {
  locale.value = key as string;
}
const localeDropdownMenuOptions = getLocaleDropdownMenuOptions();
</script>

<template>
  <nav class="text-xl mt-6 flex justify-center items-center">
    <DButtonGroup class="gap-2">
      <DButton icon="icon-[carbon--home]" to="/" :title="t('button.home')" />

      <DButton
        icon="icon-[carbon--moon] dark:icon-[carbon--sun]"
        :title="isDark ? t('button.toggle_light') : t('button.toggle_dark')"
        @click="() => toggleDark()"
      />

      <DButton to="/about" icon="icon-[carbon--information]" :title="t('button.about')" />

      <NDropdown trigger="click" :options="localeDropdownMenuOptions" @select="handleLocaleSelect">
        <DButton
          icon="icon-[carbon--ibm-watson-language-translator]"
          :title="t('button.toggle_langs')"
        />
      </NDropdown>

      <DButton
        to="https://github.com/Discreater"
        icon="icon-[carbon--logo-github]"
        target="_blank"
      />
    </DButtonGroup>
  </nav>
</template>
