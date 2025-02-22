<script setup lang="ts">
import Recipes from "../components/Recipes.vue";
import Hero from '../components/Hero.vue'

</script>

<template>
  <main>
    <Hero />
    <Recipes :limit="Number('0')" />
  </main>
</template>