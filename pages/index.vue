<script setup lang="ts">
definePageMeta({
  layout: 'home',
});
const appConfig = useAppConfig();
</script>

<template>
  <NuxtLink to="/meaningless">
    <QClock class="fixed" />
  </NuxtLink>
  <div class="flex flex-col items-center">
    <h1 class="text-3xl mb-5">
      {{ appConfig.meta.name }} 的主页
    </h1>
    <NuxtLink :to="appConfig.meta.homeUrl" target="_blank">
      <img class="w-20 h-20 object-cover rounded" src="~/assets/img/mxl.png">
      <p>{{ appConfig.meta.name }}</p>
    </NuxtLink>
  </div>
</template>
