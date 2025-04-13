<script setup lang="ts">
import { ArticleHeader } from 'virtual:article';
import { onMounted, onUnmounted, reactive } from 'vue';
const props = defineProps<{
  headers: ArticleHeader[]
}>()

interface FlattenedHeader {
  level: number
  slug: string
  title: string
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

const flattenedHeaders = flattenHeaders(props.headers);
const visibleHeaders = reactive(new Set<String>());

function observeHeaders() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visibleHeaders.add(entry.target.id);
        } else {
          visibleHeaders.delete(entry.target.id);
        }
      })
    }
  )

  flattenedHeaders.forEach((header) => {
    const element = document.getElementById(header.slug);
    if (element) {
      observer.observe(element);

      // 页面加载时手动检查是否在视口中
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        visibleHeaders.add(header.slug);
      }
    }
  });

  return observer;
}

function scrollToHeader(slug: string) {
  const target = document.getElementById(slug);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', `#${slug}`); // 更新 URL 的 hash
  }
}

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = observeHeaders();

});
// TODO: highlight last header
onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <div>
    <div v-for="header of flattenedHeaders" :key="header.slug" :style="{ paddingLeft: `${header.level * 1.5}rem` }">
      <a :href="`#${header.slug}`" @click.prevent="scrollToHeader(header.slug)" :class="[
        'transition-colors duration-300',
        visibleHeaders.has(header.slug) ? 'bg-foreground color-link-hover' : ''
      ]" class="block whitespace-nowrap overflow-hidden text-ellipsis text-sm">{{ header.title }}</a>
    </div>
  </div>
</template>