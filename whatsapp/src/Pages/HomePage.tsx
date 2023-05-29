import React from "react";
import { WhatsappCard } from "../types";
import CardTitle from "../components/CardTitle";

interface HomePageProps {
  headerText: string;
  description: string;
  mainTitle: string;
  subTitle: string;
  subTitle2: string;
  whatsappCard: WhatsappCard[];
}

export function HomePage({
  headerText,
  description,
  mainTitle,
  subTitle,
  subTitle2,
  whatsappCard,
}: HomePageProps) {
  return (
    <div className="flex flex-col text-left justify-between">
      <div className="w-1/2">
        <p className="text-[32px] font-normal">{headerText}</p>
      </div>
      <div>
        <p className="text-base font-normal">{description}</p>
        <div className="pt-4">
          <a href="/" className="text-sm mr-2">
            {mainTitle}
          </a>
          <span className="text-sm underline mr-2">{subTitle}</span>&
          <span className="text-sm underline ml-2">{subTitle2}</span>
        </div>
      </div>
      {whatsappCard.map((whatsappCard) => {
        return (
          <div className="pb-4 pt-6 flex justify-center items-center px-8">
            <CardTitle
              description={whatsappCard.description}
              header={whatsappCard.header}
              title={whatsappCard.title}
              imageURL={whatsappCard.imageURL}
            />
          </div>
        );
      })}
    </div>
  );
}
