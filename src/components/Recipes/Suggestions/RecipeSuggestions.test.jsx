import { render, screen } from "@testing-library/react";
import RecipeSuggestions from "./RecipeSuggestions.jsx";

describe("RecipeSuggestions", () => {
  it("renders with provided recipes", () => {
    const recipes = [
      {
        id: 1,
        name: "Test Recipe 1",
        image: "https://test.com/image1.jpg",
        description: "Test description 1",
      },
      {
        id: 2,
        name: "Test Recipe 2",
        image: "https://test.com/image2.jpg",
        description: "Test description 2",
      },
      {
        id: 3,
        name: "Test Recipe 3",
        image: "https://test.com/image3.jpg",
        description: "Test description 3",
      },
    ];

    render(<RecipeSuggestions recipes={recipes} />);

    recipes.forEach((recipe) => {
      expect(screen.getByText(recipe.name)).toBeInTheDocument();
      expect(screen.getByText(recipe.description)).toBeInTheDocument();
      expect(screen.getByRole("img", { name: recipe.name })).toHaveAttribute(
        "src",
        recipe.image,
      );
      expect(
        screen.getByRole("link", { name: new RegExp(recipe.name, "i") }),
      ).toHaveAttribute("href", `/recipes/${recipe.id}`);
    });
  });

  it("renders with default recipes when no recipes are provided", () => {
    render(<RecipeSuggestions />);

    for (let i = 0; i < 3; i++) {
      expect(
        screen.getAllByText("Recipe Name Placeholder")[i],
      ).toBeInTheDocument();
      expect(
        screen.getAllByText(/lorem ipsum dolor sit amet/i)[i],
      ).toBeInTheDocument();
      expect(
        screen.getAllByRole("img", { name: "Recipe Name Placeholder" })[i],
      ).toHaveAttribute("src", "https://placeholder.co/150x150");
      expect(
        screen.getAllByRole("link", { name: /check it out/i })[i],
      ).toHaveAttribute("href", "/recipes/undefined");
    }
  });
});
