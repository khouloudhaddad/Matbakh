<script setup lang="ts" >
import { onMounted, ref, defineProps, withDefaults } from "vue";
import { useRecipeStore } from "@/stores/recipeStore";
import Recipe from "../components/Recipe.vue";

const props = withDefaults(
  defineProps<{
    limit: number;
    showHeader?: boolean;
  }>(),
  {
    showHeader: false,
  }
);

const store = useRecipeStore();
const searchQuery = ref("");

onMounted(() => {
  store.fetchRecipes();
});
</script>

<template>
  <div class="max-w-[1200px] mx-auto mb-10 px-4">
    <div class="w-full" v-if="showHeader">
      <h2 class="text-4xl font-semibold mb-2">Discover, Create, Share</h2>
      <p class="text-lg">Check out our most recent recipes !</p>
    </div>
    <div
      class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-10"
      v-if="store.recipes.length"
    >
      <Recipe
        v-for="recipe in store.recipes"
        :key="recipe.id"
        :title="recipe.name"
        :duration="recipe.prepTimeMinutes"
        :calories="recipe.caloriesPerServing"
        :rating="recipe.rating"
        :reviewCount="recipe.reviewCount"
        :img="recipe.image"
        :id="recipe.id"
      />
    </div>
    <div v-else>No recipes are found!</div>
  </div>
</template>

<style scoped>
</style>