<script setup lang="ts">
import { isDark, toggleDark } from "~/logic";

import DButton from "~/ui/DButton.vue";
import DButtonGroup from "~/ui/DButtonGroup.vue";
</script>

<template>
  <nav class="text-xl mt-6 flex justify-center items-center">
    <DButtonGroup class="gap-2">
      <DButton icon="icon-[carbon--home]" to="/" title="首页" />

      <DButton
        icon="icon-[carbon--moon] dark:icon-[carbon--sun]"
        :title="isDark ? '切换到亮色模式' : '切换到深色模式'"
        @click="() => toggleDark()"
      />

      <DButton to="/about" icon="icon-[carbon--information]" title="关于" />

      <DButton
        to="https://github.com/Discreater"
        icon="icon-[carbon--logo-github]"
        target="_blank"
      />
    </DButtonGroup>
  </nav>
</template>
