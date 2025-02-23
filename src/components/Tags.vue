<script setup lang="ts">
import { useRouter } from "vue-router";

defineProps<{
  tags?: string[];
}>();

const router = useRouter();

const filterByTags = (tag: string) => {
  router.push({ name: 'tagged-recipes', params: {tag: tag}})
};
</script>
<template>
  <div class="flex items-center gap-1 w-full flex-wrap">
    <button
      @click="filterByTags(tag)"
      class="bg-soft-peach-500 text-white text-xs font-medium me-2 px-3 py-1 rounded-sm dark:bg-soft-peach-900 dark:text-soft-peach-300 shadow-md"
      v-for="tag in tags"
      :key="tag"
    >
      {{ tag }}
    </button>
  </div>
</template>

<style scoped>
</style>