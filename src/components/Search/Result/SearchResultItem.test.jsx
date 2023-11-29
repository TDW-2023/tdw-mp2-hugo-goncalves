import { render, screen } from "@testing-library/react";
import SearchResultItem from "./SearchResultItem.jsx";

describe("SearchResultItem component", () => {
  it("renders the recipe title correctly", () => {
    const recipe = { id: "1", title: "Vegan Pancakes", author: "John Doe" };
    render(<SearchResultItem recipe={recipe} />);
    const titleElement = screen.getByText(/Vegan Pancakes/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the recipe author correctly", () => {
    const recipe = { id: "1", title: "Vegan Pancakes", author: "John Doe" };
    render(<SearchResultItem recipe={recipe} />);
    const authorElement = screen.getByText(/John Doe/i);
    expect(authorElement).toBeInTheDocument();
  });

  it("renders the recipe image correctly", () => {
    const recipe = {
      id: "1",
      title: "Vegan Pancakes",
      author: "John Doe",
      image: "https://example.com/image.jpg",
    };
    render(<SearchResultItem recipe={recipe} />);
    const imageElement = screen.getByAltText("Search Result Recipe Image");
    expect(imageElement.src).toBe("https://example.com/image.jpg");
  });

  it("renders the placeholder image when no image is provided", () => {
    const recipe = { id: "1", title: "Vegan Pancakes", author: "John Doe" };
    render(<SearchResultItem recipe={recipe} />);
    const imageElement = screen.getByAltText("Search Result Recipe Image");
    expect(imageElement.src).toBe("https://placeholder.co/150");
  });

  it("renders the correct number of RecipeMetric components", () => {
    const recipe = {
      id: "1",
      title: "Vegan Pancakes",
      author: "John Doe",
      time: 30,
      ingredients: ["ingredient1", "ingredient2"],
      calories: 200,
    };
    render(<SearchResultItem recipe={recipe} />);
    const metricElements = screen.getAllByLabelText("recipe-metric");
    expect(metricElements.length).toBe(3);
  });

  it("does not render the time RecipeMetric component when no time is provided", () => {
    const recipe = {
      id: "1",
      title: "Vegan Pancakes",
      author: "John Doe",
      ingredients: ["ingredient1", "ingredient2"],
      calories: 200,
    };
    render(<SearchResultItem recipe={recipe} />);
    const timeElement = screen.queryByText(/Time/i);
    expect(timeElement).not.toBeInTheDocument();
  });
});
