<script lang="ts" setup>
import { NTime } from 'naive-ui'
import { computed, onMounted, ref } from 'vue'
const props = defineProps<{
  time: string | Date | number
}>()

const date_type = ref<'relative' | 'date' | undefined>(undefined)

const date = computed(() => new Date(props.time))
onMounted(() => {
  const now = new Date()
  const years = now.getFullYear() - date.value.getFullYear()
  const months = years - now.getMonth() + date.value.getMonth()
  date_type.value = (months <= 0 || months > 2) ? 'relative' : 'date'
})
</script>

<template>
  <NTime :time="date" :type="date_type" />
</template>
