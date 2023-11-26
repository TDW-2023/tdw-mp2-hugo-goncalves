import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders Yummy text', () => {
    render(<App />);
    const linkElement = screen.getByText("Yummy");
    expect(linkElement).toBeInTheDocument();
  });
});