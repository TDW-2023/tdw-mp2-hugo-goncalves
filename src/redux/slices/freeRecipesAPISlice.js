import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const appId = import.meta.env.VITE_EDAMAM_APP_ID;
const apiKey = import.meta.env.VITE_EDAMAM_API_KEY;

const transformRecipesResponse = (response) => {
  const responseHitsArray = response.hits;

  return responseHitsArray.map((hit) => {
    const recipe = hit.recipe;
    const recipeId = hit._links.self.href.split("/").pop().split("?")[0];

    return {
      id: recipeId,
      title: recipe.label,
      author: recipe.source,
      tags: recipe.dietLabels.concat(recipe.healthLabels),
      image: recipe.image,
      ingredients: recipe.ingredients,
      calories: recipe.calories,
      time: recipe.totalTime,
      cuisineType: recipe.cuisineType,
      mealType: recipe.mealType,
      dishType: recipe.dishType,
      nutrients: recipe.totalNutrients,
    };
  });
};

export const freeRecipesAPISlice = createApi({
  reducerPath: "recipesAPISlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.edamam.com",
  }),
  endpoints: (builder) => ({
    getRandomRecipes: builder.query({
      query: () => {
        console.log("appId", appId);
        return {
          url: "/api/recipes/v2",
          params: {
            type: "public",
            app_id: appId,
            app_key: apiKey,
            diet: "balanced",
            random: true,
          },
        };
      },
      transformResponse: (response) => {
        return transformRecipesResponse(response);
      },
    }),
    getRecipeCategories: builder.query({
      query: () => {
        return {
          url: "/doc/open-api/recipe-search-v2.json",
        };
      },
      transformResponse: (response) => {
        return response.paths[
          "/api/recipes/v2"
        ].get.parameters[10].items.enum.map((category) => {
          const categoriesImages = {
            Breakfast:
              "https://unpeeledjournal.com/wp-content/uploads/2023/04/52828002762_99f3b99b45_b.jpg",
            Lunch:
              "https://images.immediate.co.uk/production/volatile/sites/30/2023/03/Sumac-turkey-stuffed-pittas-73482d5.jpg?quality=90&resize=556,505",
            Dinner:
              "https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Speedy-stroganoff-pasta-dbb29a0.jpg?quality=90&resize=556,505",
            Snack:
              "https://www.twopeasandtheirpod.com/wp-content/uploads/2017/09/Sweet-and-Salty-Snack-Board-3.jpg",
            Teatime:
              "https://teatimemagazine.com/wp-content/uploads/2017/07/Teatime-Celebrations-2017-Special-Issue-Preview-696x537.jpg",
          };
          return {
            title: category,
            image: categoriesImages[category],
          };
        });
      },
    }),
    getRecipesFromSearch: builder.query({
      query: (query) => {
        return {
          url: "/api/recipes/v2",
          params: {
            type: "public",
            app_id: appId,
            app_key: apiKey,
            q: query,
          },
        };
      },
      transformResponse: (response) => {
        return transformRecipesResponse(response);
      },
    }),
    getRecipeById: builder.query({
      query: (recipeId) => {
        return {
          url: `/api/recipes/v2/${recipeId}`,
          params: {
            type: "public",
            app_id: appId,
            app_key: apiKey,
          },
        };
      },
      transformResponse: (response) => {
        const recipe = response.recipe;

        return {
          title: recipe.label,
          author: recipe.source,
          url: recipe.url,
          tags: recipe.dietLabels.concat(recipe.healthLabels),
          image: recipe.image,
          ingredients: recipe.ingredients,
          calories: recipe.calories,
          time: recipe.totalTime,
          weight: recipe.totalWeight,
          cuisineType: recipe.cuisineType,
          mealType: recipe.mealType,
          dishType: recipe.dishType,
          nutrients: recipe.totalNutrients,
        };
      },
    }),
  }),
});

export const {
  useGetRandomRecipesQuery,
  useGetRecipeCategoriesQuery,
  useGetRecipeByCategoryQuery,
  useGetRecipesFromSearchQuery,
  useGetRecipeByIdQuery,
} = freeRecipesAPISlice;
