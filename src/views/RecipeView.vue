<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted, watch  } from "vue";
import { useRecipeStore } from "@/stores/recipeStore";

import timeIcon from "@/assets/img/clock.svg";
import fireIcon from "@/assets/img/fire.svg";
import ratingIcon from "@/assets/img/stars.svg";

const store = useRecipeStore();

const route = useRoute();
const id = ref(Number(route.params.id));
const currentRecipe = ref({});

const fetchRecipe = async () => {
  await store.fetchRecipes(); // Assuming fetchRecipes gets all recipes
  currentRecipe.value = store.recipes.find((recipe) => recipe.id === id.value) || {};
};

onMounted(fetchRecipe);

watch(() => route.params.id, (newId) => {
  id.value = Number(newId); // Ensure ID is updated and converted
  fetchRecipe();
});
</script>

<template>
  <div class="px-4 w-full max-w-[1200px] mx-auto py-10">
    <h1 class="text-5xl font-bold capitalize">{{ currentRecipe.name }}</h1>
    <div class="flex w-full gap-3 mb-8 border-b py-4">
        <div class="flex gap-1">
          <img :src="timeIcon" alt="duration" />
          <span>{{ currentRecipe.prepTimeMinutes }}</span>
        </div>
        <div class="flex gap-1">
          <img :src="fireIcon" alt="calories" />
          <span>{{ currentRecipe.caloriesPerServing }}</span>
        </div>
        <div class="flex gap-1">
          <img :src="ratingIcon" alt="rating" />
          <span>{{ currentRecipe.rating }} ({{ currentRecipe.reviewCount }})</span>
        </div>
      </div>

      <img :src="currentRecipe.image" :alt="currentRecipe.name" class="w-full max-h-[450px] object-cover rounded-md mb-8">
      <!--Ingredients-->
      <h3 class="text-2xl mb-3 font-semibold">Ingredients</h3>
      <div class="flex items-center gap-4 circled-items">
        <ul>
            <li><span></span>Pizza dough</li>
            <li class="barred"><span></span>Fresh mozzarella</li>
            <li><span></span>Olive Oil</li>
        </ul>
        <ul>
            <li><span></span>Tomato sauce</li>
            <li><span></span>Fresh basil leaves</li>
            <li><span></span>Salt and pepper to taste</li>
        </ul>
      </div>

       <!--Instructions-->
       <h3 class="text-2xl my-3 font-semibold">Instructions</h3>
       <ul class="list-numbered">
        <li>Preheat the oven to 475°F (245°C).</li>
        <li>Roll out the pizza douth and spread tomato sauce evenly.</li>
        <li>Top with slices of fresh mozzarella and fresh basil leaves.</li>
        <li>Dizzle with olive oil and season with salt and pepper.</li>
        <li>Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.</li>
        <li>Slice and serve hot.</li>
       </ul>
  </div>
</template>

<style scoped lang="scss">
.list-numbered{
  counter-reset: list-counter;
  li{
    counter-increment: list-counter;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    &::before{
      content: counter(list-counter);
      width: 30px;
      height: 30px;
      background: var(--primary);
      display: flex;
      border-radius: 50%;
      margin-right: 0.5rem;
      color: white;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>