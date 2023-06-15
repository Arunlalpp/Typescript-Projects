import React from "react";
import { FooterPage } from "../types";

export interface FooterProps {
  footerData: FooterPage[];
}

export function Footer({ footerData }: FooterProps) {
  return (
    <div>
      <div className="py-6 grid grid-cols-2 md:flex flex-row justify-between px-8  border-b">
        {footerData?.map((footerLink) => {
          return (
            <div className=" text-[#F0F4F9]">
              <div className="mb-5">
                <span className="text-xs font-normal">{footerLink.title}</span>
              </div>
              {footerLink?.contents.map((content) => {
                return (
                  <div
                    className="text-[#F0F4F9] text-base p-px"
                    key={content.text}
                  >
                    <button className="border-none font-normal">
                      {content.text}
                    </button>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="flex md:flex-col px-8 gap-10 py-4">
        <span>Terms & Privacy Policy 2023 © WhatsApp LLC</span>
        <div>
          <select
            name="English"
            id="english"
            className="px-11 py-4 border-white border outline-none rounded-3xl text-white bg-black"
          >
            <option
              value=""
              className="bg-white text-black text-xs font-normal "
            >
              English
            </option>
            <option
              value=""
              className="bg-white text-black text-xs font-normal "
            >
              English
            </option>
            <option
              value=""
              className="bg-white text-black text-xs font-normal "
            >
              English
            </option>
            <option
              value=""
              className="bg-white text-black text-xs font-normal "
            >
              English
            </option>
            <option
              value=""
              className="bg-white text-black text-xs font-normal "
            >
              English
            </option>
            <option
              value=""
              className="bg-white text-black text-xs font-normal "
            >
              English
            </option>
            <option
              value=""
              className="bg-white text-black text-xs font-normal "
            >
              English
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
