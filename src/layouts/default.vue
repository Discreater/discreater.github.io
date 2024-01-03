<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { NCard, NGradientText, NLayout, NLayoutHeader } from 'naive-ui';
import { useRoute } from 'vue-router';

import { articles } from 'virtual:article';
import type { ArticleAttributes, ArticleInfo } from 'virtual:article';
import { useI18n } from 'vue-i18n';
import MyHeader from '~/components/MyHeader.vue';
import MyFooter from '~/components/MyFooter.vue';
import BlogAnchor from '~/components/BlogAnchor';
import QTime from '~/components/QTime.vue';
import SpotLight from '~/components/SpotLight.vue';
import meta from '~/meta';

const { t } = useI18n();

const route = useRoute();
const currentBlog = ref<ArticleInfo | undefined>(articles.find(article => article.routePath === route.path.substring(1)));
watch(() => route.path, async (path) => {
  currentBlog.value = articles.find(article => article.routePath === path.substring(1));
});
const frontmatter = computed(() => currentBlog.value?.attributes as ArticleAttributes | undefined);
const blogHistory = `${meta.repoUrl}/commits/${meta.repoBranch}/${currentBlog.value?.repoPath}`;
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
          <div class="flex gap-2">
            <NGradientText v-if="frontmatter && frontmatter.createdAt" class="block">
              {{ t("article.created_at") }}
              <QTime :time="frontmatter.createdAt" />
            </NGradientText>
            <a v-if="frontmatter && frontmatter.changedAt" class="text-sky-500 hover:text-green-500 hover:underline primary-clickable cursor-pointer" :href="blogHistory" target="_blank">
              {{ t("article.changed_at") }}
              <QTime :time="frontmatter.changedAt" />
            </a>
          </div>
          <RouterView v-slot="{ Component }">
            <component :is="Component" />
          </RouterView>
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
