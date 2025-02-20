<script setup lang="ts">
    import logo from "@/assets/logo.svg";
</script>

<template>
  <header class="w-screen flex items-center px-4 py-2 justify-between">
    <div class="flex items-center text-2xl">
      <img :src="logo" alt="" class="w-auto h-[50px] pr-2" />
      <span>Nuxtcipes</span>
    </div>
    <nav>
      <ul>
        <router-link to="/" class="text-lg font-semibold">Home</router-link>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
</style>