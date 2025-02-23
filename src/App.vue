<script setup lang="ts">
  import TopNav from '@/components/TopNav.vue';
  import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <Analytics />
  <TopNav />
  <router-view />
</template>

<style scoped>

</style>