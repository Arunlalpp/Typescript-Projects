import React from "react";

import { ReactComponent as Hamburger } from "../assets/Hamburger.svg";
import { ReactComponent as Download } from "../assets/Download.svg";

export function Header() {
  return (
    <div className="flex items-center justify-between h-full w-full py-4">
      <div>
        <Hamburger />
      </div>
      <div className="w-28">
        <img
          src="https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png"
          alt="whatsapp logo"
        />
      </div>
      <div className="bg-[#25d366] p-2 border border-black rounded-full">
        <a href="/">
          <Download />
        </a>
      </div>
    </div>
  );
}
