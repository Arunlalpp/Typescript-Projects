import { render, screen } from "@testing-library/react";

import { Button } from "../Button";

describe("renders Button component", () => {
  const onClick = jest.fn();
  const text = "Sample text";

  test("Button component tests", () => {
    render(<Button text={text} icon onClick={onClick} />);

    const buttonElement = screen.getByTestId("button-element");
    const buttonIcon = screen.getByTestId("button-icon");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      "text-xs flex  justify-center w-full h-full p-4 rounded-full bg-[#25d366] gap-6 shadow-lg"
    );
    expect(buttonIcon).toBeInTheDocument();
  });
});
