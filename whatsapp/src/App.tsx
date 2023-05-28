import React from "react";
import CardTitle from "./components/CardTitle";

import { WhatsappCard } from "./types";

interface AppProps {
  whatsappCard: WhatsappCard[];
}
function App({ whatsappCard }: AppProps) {
  return (
    <div className="">
      {whatsappCard.map((whatsappCard) => {
        return (
          <div className="pb-4">
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

export default App;
