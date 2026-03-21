<script setup lang="ts">
import { computed, inject } from "vue";
import { RouterLink } from "vue-router";
import { BUTTON_GROUP_CONTEXT_KEY } from "~/ui/buttonGroupContext";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

const props = defineProps<{
  icon?: string;
  type?: "button" | "a";
  to?: string;
  label?: string;
  size?: Size;
}>();

const relativeLink = props.to !== undefined && props.to.startsWith("/");
const localType = (props.type ?? props.to) ? "a" : "button";
const isInButtonGroup = inject(BUTTON_GROUP_CONTEXT_KEY, false);

const staticClass =
  "cursor-pointer focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 shrink-0 font-medium rounded-md gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-700 dark:hover:text-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center";

const buttonClass = computed(() =>
  isInButtonGroup
    ? "hover:bg-transparent dark:hover:bg-transparent"
    : "hover:bg-gray-200 dark:hover:bg-gray-800",
);
</script>

<template>
  <component
    :is="localType"
    v-if="!relativeLink"
    :href="to"
    data-d-button
    :class="[staticClass, buttonClass]"
  >
    <span v-if="icon" :class="icon" />
    <span v-if="label" />
  </component>
  <RouterLink v-else :to="to!" data-d-button :class="[staticClass, buttonClass]">
    <span v-if="icon" :class="icon" />
    <span v-if="label" />
  </RouterLink>
</template>
