import { render, screen } from "@testing-library/react";
import RecipeTagsGroup from "./RecipeTagsGroup.jsx";

describe("RecipeTagsGroup component", () => {
  it("renders the correct number of tags", () => {
    const tags = ["Vegan", "Gluten-free", "Dairy-free", "Nut-free", "Soy-free"];
    render(<RecipeTagsGroup tags={tags} maxTags={4} />);
    const tagElements = screen.getAllByLabelText("RecipeTag");
    expect(tagElements.length).toBe(5);
  });

  it('renders "..." when more than five tags are provided', () => {
    const tags = [
      "Vegan",
      "Gluten-free",
      "Dairy-free",
      "Nut-free",
      "Soy-free",
      "Egg-free",
    ];
    render(<RecipeTagsGroup tags={tags} />);
    const ellipsisElement = screen.getByText("...");
    expect(ellipsisElement).toBeInTheDocument();
  });

  it('does not render "..." when five or fewer tags are provided', () => {
    const tags = ["Vegan", "Gluten-free", "Dairy-free", "Nut-free"];
    render(<RecipeTagsGroup tags={tags} maxTags={5} />);
    const ellipsisElement = screen.queryByText("...");
    expect(ellipsisElement).not.toBeInTheDocument();
  });

  it("renders the correct tags", () => {
    const tags = ["Vegan", "Gluten-free", "Dairy-free", "Nut-free", "Soy-free"];
    render(<RecipeTagsGroup tags={tags} maxTags={5} />);
    tags.forEach((tag) => {
      const tagElement = screen.getByText(tag);
      expect(tagElement).toBeInTheDocument();
    });
  });
});
