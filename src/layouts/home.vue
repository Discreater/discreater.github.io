<script setup lang="ts">
import MyFooter from '~/components/MyFooter.vue'
</script>

<template>
  <main class="px-4 py-10 text-center max-w-42rem ml-auto mr-auto text-gray-700 dark:text-gray-200">
    <router-view />
    <my-footer />
  </main>
</template>
