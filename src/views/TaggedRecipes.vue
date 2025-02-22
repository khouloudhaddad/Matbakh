<script setup lang="ts">
import Recipe from "../components/Recipe.vue";
import Hero from "../components/Hero.vue";
import { useRecipeStore } from "@/stores/recipeStore";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const store = useRecipeStore();
const recipes = ref([]);
const route = useRoute();
const tag = ref(route.params.tag);

const filterByTags = async (tag: string) => {
  recipes.value = await store.fetchRecipesByTag(tag);
  console.log(recipes.value);
};

onMounted(() => {
  filterByTags(tag.value);
});
</script>

<template>
  <main>
    <Hero />
    <div class="max-w-[1200px] mx-auto mb-10 px-4">
      <div
        class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-10"
        v-if="store.recipes.length"
      >
        <Recipe
          v-if="recipes.length > 0"
          v-for="recipe in recipes"
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
      <p v-else class="w-full text-center">
        No recipes corresponding to the <b>{{ tag }}</b> tag
      </p>
    </div>
  </main>
</template>