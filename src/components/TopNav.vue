<script setup lang="ts">
    import logo from "@/assets/logo.svg";
</script>

<template>
  <header class="max-w-screen w-full flex items-center px-4 py-2 justify-between border-b">
    <div class="flex items-center text-2xl">
      <img :src="logo" alt="" class="w-auto h-[50px] pr-2" />
      <span>Nuxtcipes</span>
    </div>
    <nav>
      <ul class="flex gap-4">
        <router-link to="/" class="text-lg  hover:text-sea-buckthorn-500 transition-all">Home</router-link>
        <router-link to="/recipes" class="text-lg  hover:text-sea-buckthorn-500 transition-all">Recipes</router-link>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
</style>