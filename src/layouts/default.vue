<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { NCard, NGradientText, NLayout, NLayoutHeader } from 'naive-ui';
import { useRoute } from 'vue-router';

import MyHeader from '~/components/MyHeader.vue';
import MyFooter from '~/components/MyFooter.vue';
import BlogAnchor from '~/components/BlogAnchor';
import meta from '~/meta';
import QTime from '~/components/QTime.vue';
import type { BlogInfo, FrontMatter } from '~/types/blog_info';
import SpotLight from '~/components/SpotLight.vue';

const current = ref();
const frontmatter = computed(() => current.value?.frontmatter as FrontMatter | undefined);

const route = useRoute();
const currentBlog = ref<BlogInfo | undefined>(meta.blogs.find(blog => blog.path === route.path.substring(1)));
watch(() => route.path, async (path) => {
  currentBlog.value = meta.blogs.find(blog => blog.path === path.substring(1));
});

onMounted(() => {
  // Add copy function to code blocks
  const copies = document.querySelectorAll('figure.code-block button.copy');
  copies.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.parentNode && btn.parentNode.nextSibling) {
        const pre = btn.parentNode.nextSibling;
        const content = pre.textContent;
        if (content) {
          navigator.clipboard.writeText(content);
          btn.classList.remove('copy');
          btn.classList.add('copied');
          setTimeout(() => {
            btn.classList.remove('copied');
            btn.classList.add('copy');
          }, 1000);
        }
      }
    });
  });
});
</script>

<template>
  <NLayout scroll-smooth position="absolute" class="text-gray-700 dark:text-gray-200" :native-scrollbar="false">
    <NLayoutHeader bordered>
      <MyHeader />
    </NLayoutHeader>
    <section p="y-6 x-6">
      <div container max-w="320" m="auto" flex space="x-2">
        <!-- z-15 to render above the spotlight (which is z-10) -->
        <NCard embedded flex-grow z-15>
          <NGradientText v-if="frontmatter && frontmatter.date" class="block m-auto">
            <QTime :time="frontmatter.date" />
          </NGradientText>
          <router-view v-slot="{ Component }">
            <component :is="Component" ref="current" />
          </router-view>
          <div>
            <MyFooter />
          </div>
        </NCard>
        <aside sticky top="4" self-start class="hidden xl:block" max-w="70">
          <NCard embedded hoverable content-style="padding-left: 0.5rem;">
            <BlogAnchor v-if="currentBlog" text="left" :headers="currentBlog.headers" />
          </NCard>
        </aside>
      </div>
    </section>
  </NLayout>
  <SpotLight />
</template>
