import { render, screen } from "@testing-library/react";
import RecipeItem from "./RecipeItem.jsx";

describe("RecipeItem", () => {
  it("renders with provided data", () => {
    render(
      <RecipeItem
        recipeId={1}
        recipeName="Test Recipe"
        recipeImage="https://test.com/image.jpg"
        recipeDescription="Test description"
      />,
    );

    expect(screen.getByText("Test Recipe")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Test Recipe" })).toHaveAttribute(
      "src",
      "https://test.com/image.jpg",
    );
    expect(screen.getByRole("link", { name: /check it out/i })).toHaveAttribute(
      "href",
      "/recipes/1",
    );
  });

  it("renders with default data when no data is provided", () => {
    render(<RecipeItem />);

    expect(screen.getByText("Recipe Name Placeholder")).toBeInTheDocument();
    expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Recipe Name Placeholder" }),
    ).toHaveAttribute("src", "https://placeholder.co/150x150");
    expect(screen.getByRole("link", { name: /check it out/i })).toHaveAttribute(
      "href",
      "/recipes/undefined",
    );
  });
});
