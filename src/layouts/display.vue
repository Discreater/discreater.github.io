<script setup lang="ts">
import MyFooter from '~/components/MyFooter.vue';
import SpotLight from '~/components/SpotLight.vue';
</script>

<template>
  <main h-100vh w-100vw flex flex-col text-gray-700 dark:text-gray-200 justify="center" items="center">
    <SpotLight />
    <RouterView />
    <MyFooter />
  </main>
</template>
