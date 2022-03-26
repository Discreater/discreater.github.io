<script setup lang="ts">
import MyFooter from '~/components/MyFooter.vue'
</script>

<template>
  <div h-100vh w-100vw flex flex-col text-gray-700 dark:text-gray-200 justify="center" items="center">
    <router-view />
    <my-footer />
  </div>
</template>
