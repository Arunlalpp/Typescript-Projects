import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="h-[10vh] relative z-50 max-w-[90%] mx-auto">
      <nav className="flex justify-between items-center">
        <div className="flex justify-center">
          <div>
            <img className="w-[150px] mt-5 mr-8" src={logo} alt="logo" />
          </div>
          <div>
            <ul className="text-white ml-8">
              <Link to="/">Home</Link>
              <Link to="/Series">Series</Link>
              <Link to="/Movies">Movies</Link>
              <Link to="/Pages">Pages</Link>
              <Link to="/Pricing">Pricing</Link>
              <Link to="/Contact">Contact</Link>
              <button
                type="button"
                className="bg-[#e50813] outline-none border-none text-white px-3 py-10 text-base rounded-xl font-medium "
              >
                <i className="fa fa-bars"></i>
              </button>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <i className="fa fa-search p-[10px] h-10 text-center rounded-[50%] border border-solid border-white mx-0 my-2 text-white"></i>
          <i className="fa fa-bell p-[10px] h-10 text-center rounded-[50%] border border-solid border-white mx-0 my-2 text-white"></i>
          <i className="fa fa-user p-[10px] h-10 text-center rounded-[50%] border border-solid border-white mx-0 my-2 text-white"></i>
        </div>
      </nav>
    </div>
  );
}
