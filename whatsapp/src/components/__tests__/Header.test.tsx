import { render, screen } from "@testing-library/react";

import { Header } from "../Header";

describe("renders Header component", () => {
  test("Header component tests", () => {
    render(<Header />);

    const headerContainer=screen.getByTestId('header-container')

    expect(headerContainer).toBeInTheDocument()
    expect(headerContainer).toHaveClass('flex items-center justify-between h-full w-full py-4')
  });
});
