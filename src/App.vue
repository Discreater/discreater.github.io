<script setup lang="ts">
import { useHead } from "@unhead/vue";
import { darkTheme, NConfigProvider } from "naive-ui";
import { computed } from "vue";

import { RouterView } from "vue-router";
import { isDark } from "~/logic";
import meta from "./meta";

const theme = computed(() => {
  return isDark.value ? darkTheme : null;
});

const themePrint = computed(() => {
  return isDark.value
    ? undefined
    : {
        Card: {
          colorEmbedded: "#fff",
        },
      };
});

useHead({
  title: `${meta.name}'s Site`,
  meta: [{ name: "description", content: "Blogs and others" }],
});
</script>

<template>
  <NConfigProvider :theme="theme" :theme-overrides="themePrint">
    <RouterView />
  </NConfigProvider>
</template>
