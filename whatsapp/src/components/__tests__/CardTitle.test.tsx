import { render, screen } from "@testing-library/react";

import CardTitle from "../CardTitle";

describe("renders CardTitle component", () => {
  test("CardTitle component tests", () => {
    render(<CardTitle description="" header="" imageURL="" title="" />);

    const cardTitleContainer = screen.getByTestId("card-title-container");
    const cardTitleWrapper = screen.getByTestId("card-title-wrapper");
    const cardTitleImage = screen.getByTestId("card-title-image");

    expect(cardTitleContainer).toBeInTheDocument();
    expect(cardTitleContainer).toHaveClass(
      "rounded-xl pb-14 pt-7 flex flex-col justify-between"
    );
    expect(cardTitleWrapper).toBeInTheDocument();
    expect(cardTitleWrapper).toHaveClass(
      "flex flex-col items-center text-center text-white hover:text-black"
    );
    expect(cardTitleImage).toBeInTheDocument();
    expect(cardTitleImage).toHaveClass(
      "h-full w-full flex justify-center items-center relative top-4"
    );
  });
});
