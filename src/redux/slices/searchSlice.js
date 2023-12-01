import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    filterOption: { id: "diet", name: "Diet" },
    selectedFilters: [],
    searchQuery: undefined,
    searchResults: [],
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    addSearchResults: (state, action) => {
      state.searchResults.concat(action.payload);
    },
    clearSearchResults: (state) => {
      state.searchResults = [];
    },
    setFilterOption: (state, action) => {
      state.filterOption = action.payload;
    },
    addSelectedFilter: (state, action) => {
      state.selectedFilters.push(action.payload);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    removeSelectedFilter: (state, action) => {
      state.selectedFilters = state.selectedFilters.filter(
        (filter) => filter.filterName !== action.payload,
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSearchResults,
  addSearchResults,
  clearSearchResults,
  setSearchQuery,
  setFilterOption,
  addSelectedFilter,
  removeSelectedFilter,
} = searchSlice.actions;

export default searchSlice.reducer;
