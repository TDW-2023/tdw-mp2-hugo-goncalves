import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const appId = import.meta.env.VITE_EDAMAM_APP_ID;
const apiKey = import.meta.env.VITE_EDAMAM_API_KEY;

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
          url: '/api/recipes/v2',
          params: {
            type: 'public',
            app_id: appId,
            app_key: apiKey,
            diet: 'balanced',
            random: true,
          },
        };
      },
      transformResponse: (response) => {

        const responseHitsArray = response.hits;

        return responseHitsArray.map((hit) => {

          const recipe = hit.recipe;
          const recipeId = hit._links.self.href.split("/").pop().split("?")[0];

          return {
            id: recipeId,
            title: recipe.label,
            description: recipe.ingredientLines.slice(0, 2).join(", "),
            image: recipe.image
          };
        });
      },
    }),
  }),
});

export const { useGetRandomRecipesQuery } = freeRecipesAPISlice;

