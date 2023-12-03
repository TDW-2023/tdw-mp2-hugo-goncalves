import { render, screen } from "@testing-library/react";
import RecipeIngredient from "./RecipeIngredient.jsx";

describe("RecipeIngredient component", () => {
  it("renders the ingredient image correctly", () => {
    const ingredient = {
      food: "Apple",
      quantity: 1,
      measure: "piece",
      weight: 100,
      image: "https://example.com/apple.jpg",
      text: "A fresh apple",
    };
    render(<RecipeIngredient ingredient={ingredient} />);
    const imageElement = screen.getByAltText("Recipe Ingredient Image");
    expect(imageElement.src).toBe("https://example.com/apple.jpg");
  });

  it("renders the ingredient food correctly", () => {
    const ingredient = {
      food: "Apple",
      quantity: 1,
      measure: "piece",
      weight: 100,
      image: "https://example.com/apple.jpg",
      text: "A fresh apple",
    };
    render(<RecipeIngredient ingredient={ingredient} />);
    const foodElement = screen.getAllByText(/Apple/i)[0];
    expect(foodElement).toBeInTheDocument();
  });

  it("renders the ingredient quantity and measure correctly", () => {
    const ingredient = {
      food: "Apple",
      quantity: 1,
      measure: "piece",
      weight: 100,
      image: "https://example.com/apple.jpg",
      text: "A fresh apple",
    };
    render(<RecipeIngredient ingredient={ingredient} />);
    const quantityMeasureElement = screen.getAllByText(/1.0/i)[0];
    const unitMeasureElement = screen.getByText(/piece/i);
    expect(quantityMeasureElement).toBeInTheDocument();
    expect(unitMeasureElement).toBeInTheDocument();
  });

  it("renders the ingredient weight correctly", () => {
    const ingredient = {
      food: "Apple",
      quantity: 1,
      measure: "piece",
      weight: 100,
      image: "https://example.com/apple.jpg",
      text: "A fresh apple",
    };
    render(<RecipeIngredient ingredient={ingredient} />);
    const weightElement = screen.getByText(/100 g/i);
    expect(weightElement).toBeInTheDocument();
  });

  it("renders the ingredient text correctly", () => {
    const ingredient = {
      food: "Apple",
      quantity: 1,
      measure: "piece",
      weight: 100,
      image: "https://example.com/apple.jpg",
      text: "A fresh apple",
    };
    render(<RecipeIngredient ingredient={ingredient} />);
    const textElement = screen.getByText(/A fresh apple/i);
    expect(textElement).toBeInTheDocument();
  });
});
