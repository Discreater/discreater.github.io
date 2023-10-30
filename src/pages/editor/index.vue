<script setup lang="ts">
// import { editor } from 'monaco-editor';
import { onMounted } from 'vue';

// let editorRef = null;
onMounted(() => {
  // editorRef = editor.create(document.getElementById("container"), {
  //   value: 'hello world',
  //   language: 'markdown',
  //   automaticLayout: true,
  // })
})

</script>

<template>
  <div class="h-full">
    <div id="container" class="h-full">
      hello world
    </div>
  </div>
</template>

<style></style>
