<script setup lang="ts">
import { RouterLink } from 'vue-router/auto';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const props = defineProps<{
  icon?: string
  type?: 'button' | 'a'
  to?: string
  label?: string
  size?: Size
}>();

const relativeLink = props.to !== undefined && props.to.startsWith('/');
const localType = props.type ?? props.to ? 'a' : 'button';

const buttonClass = 'cursor-pointer focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center';
</script>

<template>
  <component
    :is="localType"
    v-if="!relativeLink" :href="to" :class="buttonClass"
  >
    <span v-if="icon" :class="icon" />
    <span v-if="label" />
  </component>
  <RouterLink
    v-else :to="to!" :class="buttonClass"
  >
    <span v-if="icon" :class="icon" />
    <span v-if="label" />
  </RouterLink>
</template>
