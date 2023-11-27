import { render, screen } from "@testing-library/react";
import RecipeCategory from "./RecipeCategory.jsx";

describe('RecipeCategory', () => {
  it('renders with provided category data', () => {
    render(
      <RecipeCategory
        categoryName="Test Category"
        categoryImageURI="https://test.com/image.jpg"
      />
    );

    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://test.com/image.jpg');
  });

  it('renders with default data when no category data is provided', () => {
    render(<RecipeCategory />);

    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://placeholder.co/150');
  });
});