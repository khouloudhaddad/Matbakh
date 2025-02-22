<script setup lang="ts">
import Recipe from "../components/Recipe.vue";
import Hero from "../components/Hero.vue";
import { useRecipeStore } from "@/stores/recipeStore";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const store = useRecipeStore();
const recipes = ref([]);
const route = useRoute();
const tag = ref(route.params.tag);

onMounted(async () => {
  recipes.value = await store.fetchRecipesByTag(tag.value);
  console.log(tag.value, recipes.value);
});

watch(
  () => route.params.tag,
  async (newTag) => {
    recipes.value = await store.fetchRecipesByTag(newTag);
    console.log(newTag, recipes.value);
  }
);
</script>

<template>
  <main>
    <Hero />
    <div class="max-w-[1200px] mx-auto mb-10 px-4">
      <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-10">
        <Recipe
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
    </div>
  </main>
</template>