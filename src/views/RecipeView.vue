<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, watch, computed } from "vue";
import { useRecipeStore } from "@/stores/recipeStore";

import timeIcon from "@/assets/img/clock.svg";
import fireIcon from "@/assets/img/fire.svg";
import ratingIcon from "@/assets/img/stars.svg";

import Tags from "@/components/Tags.vue";

const store = useRecipeStore();

const route = useRoute();
const router = useRouter();
const id = ref(Number(route.params.id));
const currentRecipe = ref({});
const previousRecipe = ref({});
const nextRecipe = ref({});

onMounted(async () => {
  await store.fetchRecipes();
  if (id.value > 1) {
    previousRecipe.value =
      store.recipes.find((recipe) => recipe.id === id.value - 1) || {};
  }

  if (id.value < store.recipes.length) {
    nextRecipe.value =
      store.recipes.find((recipe) => recipe.id === id.value + 1) || {};
  }

  currentRecipe.value =
    store.recipes.find((recipe) => recipe.id === id.value) || {};

  const found = store.recipes.find((recipe) => recipe.id === id.value);
  console.log(found);
  if (!found) {
    router.push({ name: "not-found" });
  }
});

watch(
  () => route.params.id,
  async (newId) => {
    id.value = Number(newId); // Ensure ID is updated and converted
    await store.fetchRecipes();
    if (id.value > 1) {
      previousRecipe.value =
        store.recipes.find((recipe) => recipe.id === id.value - 1) || {};
    }

    if (id.value < store.recipes.length) {
      nextRecipe.value =
        store.recipes.find((recipe) => recipe.id === id.value + 1) || {};
    }

    currentRecipe.value =
      store.recipes.find((recipe) => recipe.id === id.value) || {};
  }
);
</script>

<template>
  <div class="px-4 w-full max-w-[1200px] mx-auto py-10">
    <h1 class="text-5xl font-bold capitalize">{{ currentRecipe.name }}</h1>
    <div class="flex justify-between items-center border-b mb-8 py-4">
      <div class="flex w-full gap-3">
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
          <span
            >{{ currentRecipe.rating }} ({{ currentRecipe.reviewCount }})</span
          >
        </div>
      </div>
      <!--Next/Prev-->
      <div class="flex gap-2 rtl:flex-row-reverse">
        <router-link
          :to="`/recipes/${previousRecipe.id}`"
          class="bg-sea-buckthorn-500 rounded-lg font-bold hover:bg-sea-buckthorn-600 transition-all text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 p-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </router-link>
        <router-link
          :to="`/recipes/${nextRecipe.id}`"
          class="bg-sea-buckthorn-500 rounded-lg font-bold hover:bg-sea-buckthorn-600 transition-all text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 p-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </router-link>
      </div>
    </div>

    <img
      :src="currentRecipe.image"
      :alt="currentRecipe.name"
      class="w-full max-h-[450px] object-cover rounded-md mb-6 shadow-md"
    />
    <!--Tags-->
    <Tags :tags="currentRecipe.tags" />
    <!--Ingredients-->
    <h3 class="text-2xl my-4 font-semibold border-t pt-4">{{ $t('Ingredients') }}</h3>
    <div class="circled-items flex">
      <ul class="gap-2 md:grid md:grid-cols-2 flex flex-col">
        <li
          class="flex items-center gap-2"
          v-for="ingredient in currentRecipe.ingredients"
          :key="ingredient"
        >
          <span></span>{{ ingredient }}
        </li>
        <!-- <li class="barred"><span></span>Fresh mozzarella</li> -->
      </ul>
    </div>

    <!--Instructions-->
    <h3 class="text-2xl my-4 font-semibold">{{ $t('Instructions') }}</h3>
    <ul class="list-numbered">
      <li v-for="instruction in currentRecipe.instructions" :key="instruction" class="flex items-center gap-2">
        {{ instruction }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.circled-items ul li span {
  content: "";
  width: 25px;
  height: 25px;
  border: 1px solid var(--primary);
  border-radius: 50%;
  display: table;
  padding: 2.4px;
  flex: 0 0 25px;
}

.circled-items ul li.barred {
  text-decoration: line-through;
  span::before {
    content: "";
    display: table-cell;
    border: 5px solid var(--primary);
    border-radius: 50%;
    background-color: var(--primary);
  }
}

.list-numbered {
  counter-reset: list-counter;
  li {
    counter-increment: list-counter;
    margin-bottom: 0.5rem;
    &::before {
      content: counter(list-counter);
      width: 30px;
      height: 30px;
      background: var(--primary);
      display: flex;
      border-radius: 50%;
      color: white;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 0 0 30px;
    }
  }
}
</style>