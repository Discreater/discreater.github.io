<script setup lang="ts">
// import { useI18n } from 'vue-i18n';
// import { NDropdown } from 'naive-ui';
// import { getLocaleDropdownMenuOptions } from '~/logic/locale';

// import { isDark, toggleDark } from '~/logic';

// const { t, locale } = useI18n();

// function handleLocaleSelect(key: unknown) {
//   locale.value = key as string;
// }
// const localeDropdownMenuOptions = getLocaleDropdownMenuOptions();
</script>

<template>
  <nav class="text-xl mt-6 flex justify-center items-center space-x-2">
    <UButton to="/" title="主页" icon="i-heroicons-home-20-solid" variant="ghost" color="gray" />

    <ColorModeButton />

    <UButton icon="i-heroicons-information-circle-20-solid" to="/about" title="关于" color="gray" variant="ghost" />

    <UButton
      icon="i-mdi-github" rel="noreferrer" to="https://github.com/Discreater" target="_blank" title="GitHub"
      color="gray" variant="ghost"
    />
  </nav>
</template>
