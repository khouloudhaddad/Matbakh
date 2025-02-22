import { defineStore } from "pinia";
import axios from "axios";

export const useRecipeStore = defineStore("recipeStore", {
  state: () => ({
    recipes: [],
    loading: false,
    error: null,
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
  },
});
