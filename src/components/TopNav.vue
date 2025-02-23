<script setup lang="ts">
import logo from "@/assets/logo.svg";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
</script>

<template>
  <header
    class="max-w-screen w-full flex items-center px-4 py-2 justify-between border-b"
  >
    <div class="flex items-center text-2xl">
      <router-link to="/">
        <img :src="logo" alt="" class="w-auto h-[50px] pr-2" />
      </router-link>
      <span>{{ $t("Matbakh") }}</span>
    </div>
    <nav class="flex items-center gap-2">
      <ul class="flex gap-4">
        <router-link
          to="/"
          class="text-lg hover:text-sea-buckthorn-500 transition-all"
          >{{ $t("home") }}</router-link
        >
        <router-link
          to="/recipes"
          class="text-lg hover:text-sea-buckthorn-500 transition-all"
          >{{ $t("recipes") }}</router-link
        >
      </ul>
      <!-- Language Selector Dropdown -->
      <LanguageSwitcher />
    </nav>
  </header>
</template>