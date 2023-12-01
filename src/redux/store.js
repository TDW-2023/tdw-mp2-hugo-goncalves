import { configureStore } from "@reduxjs/toolkit";
import { freeRecipesAPISlice } from "./slices/freeRecipesAPISlice.js";
import searchSlice from "./slices/searchSlice.js";

export const store = configureStore({
  reducer: {
    [freeRecipesAPISlice.reducerPath]: freeRecipesAPISlice.reducer,
    search: searchSlice,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(freeRecipesAPISlice.middleware),
});
