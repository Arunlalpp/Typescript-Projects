import React from "react";

import { ReactComponent as Instagram } from "../assets/Instagram.svg";
import { ReactComponent as Facebook } from "../assets/Facebook.svg";
import { ReactComponent as Twitter } from "../assets/Twitter.svg";
import { ReactComponent as Youtube } from "../assets/Youtube.svg";

export function SocialMedia() {
  return (
    <div>
      <div className="flex justify-center items-center py-4 border-t border-b border-[#33463f]">
        <div className="flex justify-center items-center gap-6">
          <div className="bg-[#1c1e21] rounded-full border-2 border-white p-4">
            <a href="/">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <div className="bg-[#1c1e21] rounded-full border-2 border-white p-4">
            <a href="/">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          <div className="bg-[#1c1e21] rounded-full border-2 border-white p-4">
            <a href="/">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          <div className="bg-[#1c1e21] rounded-full border-2 border-white p-4">
            <a href="/">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
