<script setup lang="ts">
import Hero from "../components/Hero.vue";
import Recipes from "../components/Recipes.vue";
</script>

<template>
  <main>
    <Hero showBtn />
    <Recipes showHeader :limit="Number('0')" />
  </main>
</template>
