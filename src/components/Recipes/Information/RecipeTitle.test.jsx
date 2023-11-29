import { render, screen } from "@testing-library/react";
import RecipeTitle from "./RecipeTitle.jsx";

describe("RecipeTitle component", () => {
  it("renders the recipe name correctly", () => {
    render(<RecipeTitle id="1" name="Vegan Pancakes" author="John Doe" />);
    const nameElement = screen.getByText(/Vegan Pancakes/i);
    expect(nameElement).toBeInTheDocument();
  });

  it('renders "Untitled Recipe" when no name is provided', () => {
    render(<RecipeTitle id="1" name="" author="John Doe" />);
    const nameElement = screen.getByText(/Untitled Recipe/i);
    expect(nameElement).toBeInTheDocument();
  });

  it("renders the author name correctly", () => {
    render(<RecipeTitle id="1" name="Vegan Pancakes" author="John Doe" />);
    const authorElement = screen.getByText(/John Doe/i);
    expect(authorElement).toBeInTheDocument();
  });

  it('renders "Anonymous" when no author is provided', () => {
    render(<RecipeTitle id="1" name="Vegan Pancakes" author="" />);
    const authorElement = screen.getByText(/Anonymous/i);
    expect(authorElement).toBeInTheDocument();
  });

  it("renders the correct recipe link", () => {
    render(<RecipeTitle id="1" name="Vegan Pancakes" author="John Doe" />);
    const linkElement = screen.getByRole("link", { name: /Vegan Pancakes/i });
    expect(linkElement.getAttribute("href")).toBe("/recipes/1");
  });
});
