<script setup lang="ts">
import { toggleDark } from "~/logic";
import DButton from "~/ui/DButton.vue";
import DButtonGroup from "~/ui/DButtonGroup.vue";
</script>

<template>
  <DButtonGroup class="gap-2 h-12">
    <DButton to="/" title="首页" icon="icon-[carbon--home]" class="text-3xl" />
    <DButton
      class="text-3xl"
      icon="icon-[carbon--moon] dark:icon-[carbon--sun]"
      title="切换到深色模式"
      @click="() => toggleDark()"
    />
  </DButtonGroup>
</template>
