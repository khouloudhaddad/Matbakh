<script setup lang="ts">
defineProps<{
  tags: Array<string>
}>();
</script>
<template>
  <div class="flex items-center gap-1 w-full">
    <span
      class="bg-soft-peach-500 text-white text-xs font-medium me-2 px-3 py-1 rounded-sm dark:bg-soft-peach-900 dark:text-soft-peach-300 shadow-md"
      v-for="tag in tags"
      :key="tag"
      >{{ tag }}</span
    >
  </div>
</template>

<style scoped>
</style>