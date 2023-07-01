import React from "react";
import "../../App.css";

export interface FooterProps {
  lists: string[];
  description: string;
}

export default function Footer({ description, lists }: FooterProps) {
  return (
    <footer className="bg-blackish text-white mt-28 py-10 px-[50px] grid grid-cols-3 gap-8">
      <div>
        <ul className="flex justify-between mb-8">
          {lists.map((list) => (
            <li className="mr-8">{list}</li>
          ))}
        </ul>
        <p>{description}</p>
      </div>
      <div>
        <h3 className="text-xl font-bold">Follow Us</h3>
        <div className="flex items-center gap-5 mr-5 mt-5 hover:border-b-4 justify-start hover:border-red pb-2">
          <i className="hover:bg-red hover:shadow-2xl cursor-pointer w-10 h-10 text-center p-3 leading-4 rounded-[50%] bg-gray place-content-center gird fab fa-facebook-f"></i>
          <i className="hover:bg-red hover:shadow-2xl cursor-pointer w-10 h-10 text-center p-3 leading-4 rounded-[50%] bg-gray place-content-center gird fab fa-twitter"></i>
          <i className="hover:bg-red hover:shadow-2xl cursor-pointer w-10 h-10 text-center p-3 leading-4 rounded-[50%] bg-gray place-content-center gird fab fa-instagram"></i>
          <i className="hover:bg-red hover:shadow-2xl cursor-pointer w-10 h-10 text-center p-3 leading-4 rounded-[50%] bg-gray place-content-center gird fab fa-youtube"></i>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold">Streaming App</h3>
        <div className="flex justify-start items-center gap-x-5 mt-7">
          <img
            src="https://www.freepnglogos.com/uploads/app-store-logo-png/file-app-store-ios-custom-size-18.png"
            alt="apple"
            className="w-14 h-w-14"
          />
          <span>Apple Store</span>
          <img
            src="https://www.freepnglogos.com/uploads/google-play-png-logo/arrow-andorid-google-google-play-logo-market-media-play-png-logo-11.png"
            alt="google play store"
            className="w-14 h-w-14"
          />
          <span>Google Play Store</span>
        </div>
      </div>
    </footer>
  );
}
