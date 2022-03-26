<script setup lang="ts">
import QClock from '~/components/QClock.vue'
</script>

<template>
  <div flex flex-col items="center" space="y-2">
    <q-clock w-60 h-60 />
  </div>
</template>

<route lang="yaml">
meta:
  layout: display
</route>
