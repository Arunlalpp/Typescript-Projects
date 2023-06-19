import React from "react";
import CardTitle from "./components/CardTitle";

import { FooterPage, Homepage, WhatsappCard } from "./types";
import { SocialMedia } from "./components/SocialMedia";
import { Header } from "./components/Header";
import { HomePage } from "./Pages/HomePage";
import defaultWhatsappCardData from "../src/data";
import { Button } from "./components/Button";
import { ReactComponent as Download } from ".././src/assets/Download.svg";
import { Footer } from "./components/Footer";
interface AppProps {
  whatsappCard: WhatsappCard[];
  homePageData: Homepage;
  footerPage: FooterPage[];
}

function App({ homePageData, footerPage }: AppProps) {
  return (
    <div className="bg-[#E6FFDA]">
      <div className="rounded-2xl  max-w-[85%] mx-auto">
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
      <div className="flex justify-center flex-col bg-[#111b21]">
        <div className="flex justify-center items-center w-1/2 mx-auto py-4">
          <Button text="Download" icon={<Download />} onClick={() => {}} />
        </div>
        <div className="pb-4">
          <SocialMedia />
        </div>
        <Footer footerData={footerPage} />
      </div>
    </div>
  );
}

export default App;
