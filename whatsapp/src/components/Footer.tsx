import React from "react";
import { FooterPage } from "../types";

export interface FooterProps {
  footerData: FooterPage[];
}

export function Footer({ footerData }: FooterProps) {
  return (
    <div className="px-8">
      <img
        className="pb-8"
        src="https://static.whatsapp.net/rsrc.php/v3/yJ/r/Qhrnh5evyPV.png"
        alt=""
      />
      {footerData.map((footer) => {
        return (
          <div>
            <ul>
              <span>{footer.header}</span>
              <li>{footer.subTitle}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
