import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("app Component", () => {
  it("renders Yummy text", () => {
    render(<App />);
    const linkElement = screen.getByText("Yummy");
    expect(linkElement).toBeInTheDocument();
  });
});
