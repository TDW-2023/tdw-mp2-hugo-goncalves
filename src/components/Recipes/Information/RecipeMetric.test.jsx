import { render, screen } from "@testing-library/react";
import RecipeMetric from "./RecipeMetric.jsx";

describe("RecipeMetric component", () => {
  it("renders the metric name correctly", () => {
    render(<RecipeMetric name="Calories" value="200" unit="kcal" />);
    const nameElement = screen.getByText(/Calories/i);
    expect(nameElement).toBeInTheDocument();
  });

  it("renders the metric value correctly", () => {
    render(<RecipeMetric name="Calories" value="200" unit="kcal" />);
    const valueElement = screen.getByText(/200/i);
    expect(valueElement).toBeInTheDocument();
  });

  it("renders the metric unit correctly", () => {
    render(<RecipeMetric name="Calories" value="200" unit="kcal" />);
    const unitElement = screen.getByText(/kcal/i);
    expect(unitElement).toBeInTheDocument();
  });

  it("renders the metric name in bold", () => {
    render(<RecipeMetric name="Calories" value="200" unit="kcal" />);
    const nameElement = screen.getByText(/Calories/i);
    expect(nameElement).toHaveClass("font-bold");
  });
});
