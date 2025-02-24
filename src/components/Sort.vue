<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRecipeStore } from "@/stores/recipeStore";


const store = useRecipeStore();
const emit = defineEmits<{ 
  "update:sortedRecipes": (recipes: Recipe[]) => void 
}>();

const sortKey = ref("id");
const sortOrder = ref<"asc" | "desc">("asc");

const sortedRecipes = computed(() => {
  return [...store.recipes].sort((a, b) => {
    const modifier = sortOrder.value === "asc" ? 1 : -1;
    if (a[sortKey.value] < b[sortKey.value]) return -1 * modifier;
    if (a[sortKey.value] > b[sortKey.value]) return 1 * modifier;
    return 0;
  });
});

const updateSort = (key: "name" | "prepTime" | "rating") => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  } else {
    sortKey.value = key;
    sortOrder.value = "asc";
  }
  emit("update:sortedRecipes", sortedRecipes);
};
</script>

<template>
  <div class="max-w-[1200px] mx-auto px-4">
   <div class="d-flex border-b pb-5">
    <label class="font-semibold">{{ $t('Sort by') }}: </label>
    <button class="bg-soft-peach-600 px-4 py-1 mx-2 shadow-md rounded-md text-white hover:bg-soft-peach-800 transition-all" @click="updateSort('name')">Name</button>
    <button class="bg-soft-peach-600 px-4 py-1 mx-2 shadow-md rounded-md text-white hover:bg-soft-peach-800 transition-all" @click="updateSort('prepTime')">Prep Time</button>
    <button class="bg-soft-peach-600 px-4 py-1 mx-2 shadow-md rounded-md text-white hover:bg-soft-peach-800 transition-all" @click="updateSort('rating')">Rating</button>
   </div>
  </div>
</template>