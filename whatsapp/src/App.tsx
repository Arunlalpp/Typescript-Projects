import React from "react";
import CardTitle from "./components/CardTitle";

import { WhatsappCard } from "./types";

interface AppProps {
  whatsappCard: WhatsappCard[];
}
function App({ whatsappCard }: AppProps) {
  return (
    <div>
      {whatsappCard.map((whatsappCard) => {
        return (
          <>
            <CardTitle
              description={whatsappCard.description}
              header={whatsappCard.header}
              title={whatsappCard.title}
              imageURL={whatsappCard.imageURL}
            />
          </>
        );
      })}
    </div>
  );
}

export default App;
