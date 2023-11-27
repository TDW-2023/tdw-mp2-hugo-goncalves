import { render, screen } from "@testing-library/react";
import RecipesCategories from "./RecipesCategories.jsx";

describe("RecipesCategories", () => {
  it("renders with provided categories", () => {
    const categories = [
      { id: 1, name: "Test Category 1", image: "https://test.com/image1.jpg" },
      { id: 2, name: "Test Category 2", image: "https://test.com/image2.jpg" },
    ];

    render(<RecipesCategories recipesCategories={categories} />);

    categories.forEach((category) => {
      expect(screen.getByText(category.name)).toBeInTheDocument();
      expect(screen.getByRole("img", { name: category.name })).toHaveAttribute(
        "src",
        category.image,
      );
    });
  });

  it("renders with default categories when no categories are provided", () => {
    render(<RecipesCategories />);

    for (let i = 0; i < 2; i++) {
      expect(screen.getAllByText("Category")[i]).toBeInTheDocument();
      expect(
        screen.getAllByRole("img", { name: "Category Placeholder" })[i],
      ).toHaveAttribute("src", "https://placeholder.co/150");
    }
  });
});
