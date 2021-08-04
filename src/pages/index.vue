<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { NMenu, NEllipsis, NH1, NAvatar, NA, NIcon } from 'naive-ui'
import { h } from 'vue'
import {
  BookOutline as BookIcon,
} from '@vicons/ionicons5'

import MioIcon from '~/assets/icons/mio.png'
const name = ref('')

const router = useRouter()

const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()

const blogs = __BLOGS__

const menuOptions = blogs.map(blog => ({
  label: () => h(NEllipsis, null, { default: () => blog.fm.title }),
  key: blog.path,
  icon: renderIcon(BookIcon)
}))

const handleUpdateValue = (key: string) => {
  router.push(`/${key}`)
}

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

</script>

<template>
  <div>
    <n-h1>Discreater's Blogs</n-h1>
    <n-avatar size="large" :src="MioIcon" />
    <p>
      <n-a rel="noreferrer" href="https://github.com/discreater" target="_blank">
        Discreater
      </n-a>
    </p>
    <n-menu :options="menuOptions" @update:value="handleUpdateValue" />
    <p>
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>

    <div class="py-4" />

    <input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
