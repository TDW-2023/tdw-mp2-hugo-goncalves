import { render, screen } from "@testing-library/react";
import RecipeTag from "./RecipeTag.jsx";

describe("RecipeTag component", () => {
  it("renders the tag text correctly", () => {
    render(<RecipeTag tag="Vegan" />);
    const tagElement = screen.getByText(/Vegan/i);
    expect(tagElement).toBeInTheDocument();
  });

  it("does not render when no tag is provided", () => {
    render(<RecipeTag />);
    const tagElement = screen.queryByText(/Vegan/i);
    expect(tagElement).not.toBeInTheDocument();
  });

  it("renders correctly with different tag text", () => {
    render(<RecipeTag tag="Gluten-free" />);
    const tagElement = screen.getByText(/Gluten-free/i);
    expect(tagElement).toBeInTheDocument();
  });
});
