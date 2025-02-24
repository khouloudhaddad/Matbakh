import { defineStore } from "pinia";
import axios from "axios";

export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard"; // Assuming fixed values
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

export const useRecipeStore = defineStore("recipeStore", {
  state: () => ({
    recipes: [] as Recipe[],
    loading: false,
    error: null as string | null,
    sortKey: "id" as "name" | "prepTime" | "rating" | "id",
    sortOrder: "asc" as "asc" | "desc",
  }),

  actions: {
    async fetchRecipes(query = "") {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(
          `https://dummyjson.com/recipes/${query}`
        );
        this.recipes = response.data.recipes.sort((a, b) => a.id - b.id) || [];
      } catch (err) {
        this.error = "Failed to fetch recipes";
      } finally {
        this.loading = false;
      }
    },

    async fetchRecipesByTag(tag = "Salad") {
      this.loading = true;
      this.error = null;

      if (this.recipes.length === 0) {
        await this.fetchRecipes(); // Fetch if empty
      }

      const filteredRecipes = this.recipes.filter((recipe) =>
        recipe.tags.some((itemTag) => itemTag === tag)
      );

      this.loading = false;
      return filteredRecipes;
    },

    sortRecipes(key: "name" | "prepTime" | "rating") {
      if (this.sortKey === key) {
        this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
      } else {
        this.sortKey = key;
        this.sortOrder = "asc";
      }

      const modifier = this.sortOrder === "asc" ? 1 : -1;
      this.recipes.sort((a, b) => {
        if (a[this.sortKey] < b[this.sortKey]) return -1 * modifier;
        if (a[this.sortKey] > b[this.sortKey]) return 1 * modifier;
        return 0;
      });
    },
  },
});