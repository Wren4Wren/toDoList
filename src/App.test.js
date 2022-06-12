import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Header test", () => {
  it("should find the test of the header", () => {
    render(<App />);
    const headerElement = screen.getByText(/To-Do List/i);
    expect(headerElement).toBeInTheDocument();
  });
});
