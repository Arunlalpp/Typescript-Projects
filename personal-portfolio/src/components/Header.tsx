import React, { useEffect } from "react";

import Aos from "aos";

function Header() {
  useEffect(() => {
    Aos.init();
  }, []);

  const headerNavLinks = ["About", "Service", "Portfolio", "Contact"];
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex justify-center gap-3">
            <span className="w-9 h-9 bg-green-600 text-white text-lg font-semibold rounded-full flex items-center justify-center">
              PCP
            </span>
            <div className="leading-5">
              <h2 className="text-xl text-violet-700 font-bold">Arun lal</h2>
              <p className="text-base font-medium">Personal</p>
            </div>
          </div>
          <div className="menu">
            <ul className="flex items-center gap-2.5">
              {headerNavLinks.map((links) => (
                <li className="text-base font-medium text-violet-700">
                  <a href={`#${links}`}>{links}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex item-center gap-4r">
            <button className="flex items-center gap-2 text-violet-700 font-semibold border border-solid border-violet-700 py-2 px-4 rounded-lg max-h-10 hover:bg-violet-700 hover:text-white hover:font-medium ease-in duration-300">
              <span className="text-2xl cursor-pointer flex gap-2">
                <i className="ri-send-plane-line"></i>Let's Talk
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
