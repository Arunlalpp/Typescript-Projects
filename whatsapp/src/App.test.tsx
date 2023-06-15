import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import defaultWhatsappCardData from "../src/data";

test("renders learn react link", () => {
  render(
    <App
      homePageData={defaultWhatsappCardData.homePage}
      whatsappCard={defaultWhatsappCardData.whatsappCard}
      footerPage={defaultWhatsappCardData.footerLinks}
    />
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
