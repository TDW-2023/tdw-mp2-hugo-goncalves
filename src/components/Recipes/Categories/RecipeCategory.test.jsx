import { render, screen } from "@testing-library/react";
import RecipeCategory from "./RecipeCategory.jsx";
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../../../redux/slices/searchSlice.js";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

describe("RecipeCategory", () => {

  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        search: searchReducer,
      },
    });
  });

  it("renders with provided category data", () => {
    render(
      <Provider store={store}>
        <Router location={"/"} navigator={null}>
        <RecipeCategory
          categoryName="Test Category"
          categoryImageURI="https://test.com/image.jpg" />
        </Router>
      </Provider>,
    );

    expect(screen.getByText("Test Category")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://test.com/image.jpg",
    );
  });

  it("renders with default data when no category data is provided", () => {
    render(
      <Provider store={store}>
        <Router location={"/"} navigator={null}>
          <RecipeCategory />
        </Router>
      </Provider>,
    );

    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://placeholder.co/150",
    );
  });
});
