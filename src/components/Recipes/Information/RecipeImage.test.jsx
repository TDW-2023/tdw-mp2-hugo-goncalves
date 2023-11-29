import { render, screen } from "@testing-library/react";
import RecipeImage from "./RecipeImage.jsx";

describe('RecipeImage component', () => {
  it('renders the small image correctly', () => {
    render(<RecipeImage recipeImage="https://example.com/image.jpg" scale="small" />);
    const imageElement = screen.getByAltText('Search Result Recipe Image');
    expect(imageElement.src).toBe('https://example.com/image.jpg');
    expect(imageElement.className).toContain('h-24');
  });

  it('renders the medium image correctly', () => {
    render(<RecipeImage recipeImage="https://example.com/image.jpg" scale="medium" />);
    const imageElement = screen.getByAltText('Search Result Recipe Image');
    expect(imageElement.src).toBe('https://example.com/image.jpg');
    expect(imageElement.className).toContain('h-32');
  });

  it('renders the large image correctly', () => {
    render(<RecipeImage recipeImage="https://example.com/image.jpg" scale="large" />);
    const imageElement = screen.getByAltText('Search Result Recipe Image');
    expect(imageElement.src).toBe('https://example.com/image.jpg');
    expect(imageElement.className).toContain('h-64');
  });

  it('renders the default image correctly', () => {
    render(<RecipeImage recipeImage="https://example.com/image.jpg" />);
    const imageElement = screen.getByAltText('Search Result Recipe Image');
    expect(imageElement.src).toBe('https://example.com/image.jpg');
    expect(imageElement.className).toContain('h-16');
  });

  it('renders the placeholder image when no image is provided', () => {
    render(<RecipeImage scale="small" />);
    const imageElement = screen.getByAltText('Search Result Recipe Image');
    expect(imageElement.src).toBe('https://placeholder.co/100');
  });
});