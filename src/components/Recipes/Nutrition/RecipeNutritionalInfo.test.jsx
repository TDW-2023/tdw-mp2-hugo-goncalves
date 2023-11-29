import { render, screen } from "@testing-library/react";
import RecipeNutritionalInfo from "./RecipeNutritionalInfo.jsx";

describe("RecipeNutritionalInfo component", () => {
  it("renders the correct number of nutrients", () => {
    const nutrients = {
      Carbs: { label: "Carbs", quantity: 50, unit: "g" },
      Fat: { label: "Fat", quantity: 20, unit: "g" },
      Fiber: { label: "Fiber", quantity: 10, unit: "g" },
      Protein: { label: "Protein", quantity: 30, unit: "g" },
    };
    render(<RecipeNutritionalInfo nutrients={nutrients} />);
    const nutrientElements = screen.getAllByRole("listitem");
    expect(nutrientElements.length).toBe(4);
  });

  it("renders the correct nutrient names", () => {
    const nutrients = {
      Carbs: { label: "Carbs", quantity: 50, unit: "g" },
      Fat: { label: "Fat", quantity: 20, unit: "g" },
      Fiber: { label: "Fiber", quantity: 10, unit: "g" },
      Protein: { label: "Protein", quantity: 30, unit: "g" },
    };
    render(<RecipeNutritionalInfo nutrients={nutrients} />);
    Object.keys(nutrients).forEach((nutrient) => {
      const nutrientElement = screen.getByText(nutrient);
      expect(nutrientElement).toBeInTheDocument();
    });
  });

  it("renders the correct nutrient amounts", () => {
    const nutrients = {
      Carbs: { label: "Carbs", quantity: 50, unit: "g" },
      Fat: { label: "Fat", quantity: 20, unit: "g" },
      Fiber: { label: "Fiber", quantity: 10, unit: "g" },
      Protein: { label: "Protein", quantity: 30, unit: "g" },
    };
    render(<RecipeNutritionalInfo nutrients={nutrients} />);
    Object.values(nutrients).forEach((nutrient) => {
      const nutrientElement = screen.getByText(
        Math.round(nutrient.quantity).toString(),
      );
      expect(nutrientElement).toBeInTheDocument();
    });
  });

  it("renders the correct nutrient units", () => {
    const nutrients = {
      Carbs: { label: "Carbs", quantity: 50, unit: "g" },
      Fat: { label: "Fat", quantity: 20, unit: "g" },
      Fiber: { label: "Fiber", quantity: 10, unit: "g" },
      Protein: { label: "Protein", quantity: 30, unit: "g" },
    };
    render(<RecipeNutritionalInfo nutrients={nutrients} />);
    Object.values(nutrients).forEach((nutrient) => {
      const nutrientElement = screen.getByText(nutrient.unit);
      expect(nutrientElement).toBeInTheDocument();
    });
  });
});
