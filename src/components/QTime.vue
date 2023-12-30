<script lang="ts" setup>
import { NTime } from 'naive-ui';
import { computed } from 'vue';

const props = defineProps<{
  time: string | Date | number
}>();

const date = computed(() => new Date(props.time));
const now = new Date();

const dateType = computed(() => {
  const years = now.getFullYear() - date.value.getFullYear();
  const months = years * 12 + now.getMonth() - date.value.getMonth();
  console.warn("years:" ,years)
  console.warn("months:", months)
  return (months > 0 && months < 4) ? 'relative' : 'date';
})
</script>

<template>
  <NTime :time="date" :type="dateType" :title="time" />
</template>
