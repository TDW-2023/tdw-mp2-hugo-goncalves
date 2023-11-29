import { render, screen } from "@testing-library/react";
import RecipeNutrient from "./RecipeNutrient.jsx";

describe("RecipeNutrient component", () => {
  it("renders the nutrient name correctly", () => {
    render(
      <RecipeNutrient
        nutrientName="Protein"
        nutrientAmount={20}
        nutrientUnit="g"
        nutrientColor="#FF0000"
      />,
    );
    const nameElement = screen.getByText(/Protein/i);
    expect(nameElement).toBeInTheDocument();
  });

  it("renders the nutrient amount correctly", () => {
    render(
      <RecipeNutrient
        nutrientName="Protein"
        nutrientAmount={20}
        nutrientUnit="g"
        nutrientColor="#FF0000"
      />,
    );
    const amountElement = screen.getByText(/20/i);
    expect(amountElement).toBeInTheDocument();
  });

  it("renders the nutrient unit correctly", () => {
    render(
      <RecipeNutrient
        nutrientName="Protein"
        nutrientAmount={20}
        nutrientUnit="g"
        nutrientColor="#FF0000"
      />,
    );
    const unitElement = screen.getByText(/g/i);
    expect(unitElement).toBeInTheDocument();
  });

  it("renders the nutrient color correctly", () => {
    render(
      <RecipeNutrient
        nutrientName="Protein"
        nutrientAmount={20}
        nutrientUnit="g"
        nutrientColor="#FF0000"
      />,
    );
    const colorElement = screen.getByText(/Protein/i);
    expect(colorElement).toHaveStyle({ color: "#FF0000" });
  });
});
