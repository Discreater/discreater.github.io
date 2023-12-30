<script setup lang="ts">
import { computed } from 'vue';

type SubPosition = 'left' | 'right' | 'top' | 'bottom'

const props = withDefaults(defineProps<{
  subPosition?: SubPosition,
  mainPercentage?: number,
  subPercentage?: number,
}>(),
{
  subPosition: 'right',
  mainPercentage: 50,
  subPercentage: 50,
});

const flexDirections = {
  'left': 'flex-row-reverse',
  'right': 'flex-row',
  'top': 'flex-col',
  'bottom': 'flex-col-reverse'
}

const isRow = computed(() => props.subPosition === 'left' || props.subPosition === 'right');


const mainStyle = computed(()=> {
  if(isRow) {
    return {
      
    }
  }
})

</script>

<template>
  <div class="h-full w-full flex" :class="flexDirections[subPosition]">
    <div class="h-full w-full">
      <slot name="main" />
    </div>
    <div class="h-full w-full">
      <slot name="sub" />
    </div>
  </div>
</template>