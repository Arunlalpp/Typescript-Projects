import React, { useState } from "react";

import { ReactComponent as Hamburger } from "../assets/Hamburger.svg";
import { ReactComponent as Download } from "../assets/Download.svg";
import { ReactComponent as Cross } from "../assets/Cross.svg";

export function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleHamburgerClick = () => {
    setHamburgerOpen((prev) => !prev);
  };

  return (
    <div
      className="flex items-center justify-between h-full w-full py-4"
      data-testid="header-container"
    >
      <button
        onClick={handleHamburgerClick}
        style={{ WebkitTapHighlightColor: "transparent" }}
        type="button"
      >
        {hamburgerOpen ? <Cross /> : <Hamburger />}
      </button>
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
