<script setup lang="ts">
import { computed, provide, ref } from "vue";
import { BUTTON_GROUP_CONTEXT_KEY } from "~/ui/buttonGroupContext";

const buttonGroupRef = ref<HTMLElement | null>(null);
const hasPlacedHighlight = ref(false);
provide(BUTTON_GROUP_CONTEXT_KEY, true);
const highlightStyle = ref({
  width: "0px",
  height: "0px",
  transform: "translate3d(0, 0, 0)",
  opacity: "0",
});

const highlightClass = computed(() =>
  hasPlacedHighlight.value
    ? "transition-[transform,width,height,opacity] duration-250 ease-out"
    : "",
);

function updateHighlight(target: EventTarget | null) {
  const group = buttonGroupRef.value;
  if (!group || !(target instanceof Element)) return;

  const button = target.closest("[data-d-button]") as HTMLElement | null;
  if (!button || !group.contains(button)) return;

  const groupRect = group.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();

  highlightStyle.value = {
    width: `${buttonRect.width}px`,
    height: `${buttonRect.height}px`,
    transform: `translate3d(${buttonRect.left - groupRect.left}px, ${buttonRect.top - groupRect.top}px, 0)`,
    opacity: "1",
  };

  if (!hasPlacedHighlight.value) {
    requestAnimationFrame(() => {
      hasPlacedHighlight.value = true;
    });
  }
}

function hideHighlight() {
  highlightStyle.value.opacity = "0";
}
</script>

<template>
  <div
    ref="buttonGroupRef"
    data-d-button-group
    class="relative flex justify-center items-center"
    @pointerover="updateHighlight($event.target)"
    @focusin="updateHighlight($event.target)"
    @pointerleave="hideHighlight"
  >
    <span
      class="pointer-events-none absolute left-0 top-0 rounded-md bg-gray-200 dark:bg-gray-800 ease-in-out"
      :class="highlightClass"
      :style="highlightStyle"
    />
    <slot />
  </div>
</template>
