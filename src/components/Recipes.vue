<script setup lang="ts" >
import { onMounted, ref, withDefaults } from "vue";
import { useRecipeStore } from "@/stores/recipeStore";
import Recipe from "@/components/Recipe.vue";

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
    <div class="d-flex border-b pb-5 mb-4">
    <label class="font-semibold">{{ $t('Sort by') }}: </label>
    <button class="bg-soft-peach-600 px-4 py-1 mx-2 shadow-md rounded-md text-white hover:bg-soft-peach-800 transition-all" @click="store.sortRecipes('name')">Name</button>
    <button class="bg-soft-peach-600 px-4 py-1 mx-2 shadow-md rounded-md text-white hover:bg-soft-peach-800 transition-all" @click="store.sortRecipes('prepTime')">Prep Time</button>
    <button class="bg-soft-peach-600 px-4 py-1 mx-2 shadow-md rounded-md text-white hover:bg-soft-peach-800 transition-all" @click="store.sortRecipes('rating')">Rating</button>
   </div>

    <div v-if="store.loading">Loading...</div>
    <div v-else-if="store.error">{{ store.error }}</div>
    <div v-else>
      <div class="w-full" v-if="showHeader">
        <h2 class="text-4xl font-semibold mb-2">
          {{ $t("Discover, Create, Share") }}
        </h2>
        <p class="text-lg">{{ $t("Check out our most recent recipes !") }}</p>
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
          :tags="recipe.tags"
        />
      </div>
      <div v-else>No recipes are found!</div>
    </div>
  </div>
</template>

<style scoped>
</style>