<script setup lang="ts">
import { ArticleHeader } from "virtual:article";
import { computed, nextTick, onMounted, onUnmounted, reactive, ref } from "vue";
const props = defineProps<{
  headers: ArticleHeader[];
}>();

interface FlattenedHeader {
  level: number;
  slug: string;
  title: string;
}

function flattenHeaders(headers: ArticleHeader[], level = 0): FlattenedHeader[] {
  const flattened: FlattenedHeader[] = [];
  for (const header of headers) {
    flattened.push({ level, slug: header.slug, title: header.title });
    if (header.children) {
      flattened.push(...flattenHeaders(header.children, level + 1));
    }
  }
  return flattened;
}

const flattenedHeaders = computed(() => flattenHeaders(props.headers));
const highlightedHeaders = reactive(new Set<string>());
const anchorContainerRef = ref<HTMLElement | null>(null);
const anchorElementMap = new Map<string, HTMLElement>();
const highlightBox = reactive({
  top: 0,
  height: 0,
  visible: false,
});

const highlightedRange = computed(() => {
  const active = flattenedHeaders.value.filter((header) => highlightedHeaders.has(header.slug));
  return {
    first: active[0]?.slug,
    last: active[active.length - 1]?.slug,
  };
});

const highlightLayerStyle = computed(() => ({
  transform: `translateY(${highlightBox.top}px)`,
  height: `${highlightBox.height}px`,
  opacity: highlightBox.visible ? "1" : "0",
}));

function setAnchorRef(slug: string, element: Element | { $el: Element } | null) {
  const resolvedElement =
    element instanceof Element
      ? element
      : element && "$el" in element && element.$el instanceof Element
        ? element.$el
        : null;

  if (resolvedElement instanceof HTMLElement) {
    anchorElementMap.set(slug, resolvedElement);
  } else {
    anchorElementMap.delete(slug);
  }
}

function updateHighlightBox() {
  const firstSlug = highlightedRange.value.first;
  const lastSlug = highlightedRange.value.last;

  if (!firstSlug || !lastSlug || !anchorContainerRef.value) {
    highlightBox.visible = false;
    highlightBox.height = 0;
    return;
  }

  const firstElement = anchorElementMap.get(firstSlug);
  const lastElement = anchorElementMap.get(lastSlug);
  if (!firstElement || !lastElement) {
    highlightBox.visible = false;
    highlightBox.height = 0;
    return;
  }

  const containerRect = anchorContainerRef.value.getBoundingClientRect();
  const firstRect = firstElement.getBoundingClientRect();
  const lastRect = lastElement.getBoundingClientRect();

  highlightBox.top = firstRect.top - containerRect.top;
  highlightBox.height = Math.max(lastRect.bottom - firstRect.top, 0);
  highlightBox.visible = true;
}

function updateHighlightedHeaders() {
  if (flattenedHeaders.value.length === 0) {
    highlightedHeaders.clear();
    updateHighlightBox();
    return;
  }
  const nextHighlightedHeaders = new Set<string>();

  const viewportTop = 0;
  const viewportBottom = window.innerHeight;
  const viewportTopTolerance = 1;

  const positions = flattenedHeaders.value.flatMap((header) => {
    const element = document.getElementById(header.slug);
    if (!element) {
      return [];
    }

    return [
      {
        slug: header.slug,
        top: element.getBoundingClientRect().top,
      },
    ];
  });

  for (let index = 0; index < positions.length; index++) {
    const current = positions[index];
    const next = positions[index + 1];
    const sectionTop = current.top;
    const sectionBottom = next ? next.top : Number.POSITIVE_INFINITY;

    const isVisibleSection =
      sectionBottom > viewportTop + viewportTopTolerance && sectionTop < viewportBottom;
    if (isVisibleSection) {
      nextHighlightedHeaders.add(current.slug);
    }
  }

  highlightedHeaders.clear();
  nextHighlightedHeaders.forEach((slug) => highlightedHeaders.add(slug));
  updateHighlightBox();
}

let ticking = false;
function scheduleUpdateHighlightedHeaders() {
  if (ticking) {
    return;
  }
  ticking = true;
  requestAnimationFrame(() => {
    updateHighlightedHeaders();
    ticking = false;
  });
}

function isHighlighted(slug: string) {
  return highlightedHeaders.has(slug);
}

function scrollToHeader(slug: string) {
  const target = document.getElementById(slug);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", `#${slug}`); // 更新 URL 的 hash
    scheduleUpdateHighlightedHeaders();
  }
}

onMounted(() => {
  nextTick(() => {
    updateHighlightedHeaders();
  });
  document.addEventListener("scroll", scheduleUpdateHighlightedHeaders, {
    capture: true,
    passive: true,
  });
  window.addEventListener("resize", scheduleUpdateHighlightedHeaders);
});

onUnmounted(() => {
  document.removeEventListener("scroll", scheduleUpdateHighlightedHeaders, true);
  window.removeEventListener("resize", scheduleUpdateHighlightedHeaders);
  anchorElementMap.clear();
});
</script>

<template>
  <div ref="anchorContainerRef" class="anchor-container">
    <span
      :class="[
        'anchor-highlight-layer',
        highlightBox.visible ? 'bg-foreground-light dark:bg-foreground-dark' : '',
      ]"
      :style="highlightLayerStyle"
    />
    <div
      v-for="header of flattenedHeaders"
      :key="header.slug"
      @click.prevent="scrollToHeader(header.slug)"
      :class="[isHighlighted(header.slug) ? 'color-link-hover' : '']"
      :ref="(element) => setAnchorRef(header.slug, element)"
      class="anchor-item transition-colors ease-out duration-300 mt-2 pr-2"
      :style="{ paddingLeft: `${header.level * 1.5 + 0.5}rem` }"
    >
      <a
        :href="`#${header.slug}`"
        class="relative z-1 block whitespace-nowrap overflow-hidden text-ellipsis text-sm"
        >{{ header.title }}</a
      >
    </div>
  </div>
</template>

<style scoped>
.anchor-container {
  position: relative;
}

.anchor-item {
  position: relative;
}

.anchor-highlight-layer {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  pointer-events: none;
  border-radius: 0.375rem;
  transition:
    transform 320ms ease-out,
    height 320ms ease-out,
    opacity 220ms ease-out;
}
</style>
