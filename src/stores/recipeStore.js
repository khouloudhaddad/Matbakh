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
    async fetchRecipesByTag(tag = "Salad") {
      this.loading = true;
      this.error = null;

      // Ensure recipes are available
      if (this.recipes.length === 0) {
        await this.fetchRecipes(); // Fetch if empty
      }

      // Filter recipes by tag
      const filteredRecipes = this.recipes.filter((recipe) =>
        recipe.tags.some((itemTag) => itemTag === tag)
      );

      this.loading = false;
      return filteredRecipes; // Ensure it returns an array
    },
  },
});
