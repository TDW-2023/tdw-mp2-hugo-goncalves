import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../../../redux/slices/searchSlice.js";
import SearchFilterIndicator from "./SearchFilterIndicator.jsx";

describe("SearchFilterIndicator", () => {
  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        search: searchReducer,
      },
    });
  });

  it("does not render when no filters are active", () => {
    render(
      <Provider store={store}>
        <SearchFilterIndicator />
      </Provider>,
    );
    expect(screen.queryByText(/./)).toBeNull();
  });

  it("renders with correct count when filters are active", () => {
    store.dispatch({
      type: "search/addSelectedFilter",
      payload: {
        filterName: "Test",
        filterType: store.getState().search.filterOption,
      },
    });
    render(
      <Provider store={store}>
        <SearchFilterIndicator />
      </Provider>,
    );
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
