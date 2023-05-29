import React from "react";
import CardTitle from "./components/CardTitle";

import { Homepage, WhatsappCard } from "./types";
import { SocialMedia } from "./components/SocialMedia";
import { Header } from "./components/Header";
import { HomePage } from "./Pages/HomePage";
import defaultWhatsappCardData from "../src/data";

interface AppProps {
  whatsappCard: WhatsappCard[];
  homePageData: Homepage;
}

function App({ homePageData }: AppProps) {
  return (
    <div className="max-w-[1080px] h-full mx-auto px-6 bg-[#E6FFDA]">
      <Header />
      <div className="h-16" />
      <HomePage
        description={homePageData.description}
        headerText={homePageData.headerText}
        mainTitle={homePageData.mainTitle}
        subTitle={homePageData.subTitle}
        subTitle2={homePageData.subTitle2}
        whatsappCard={defaultWhatsappCardData.whatsappCard}
      />
    </div>
  );
}

export default App;
