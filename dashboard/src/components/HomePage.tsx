import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import classNames from "classnames";

export default function Header() {
  const [mobile, setMobile] = useState(false);

  const buttonStyle = classNames(
    "bg-[#e50813] outline-none border-none text-white px-3 py-2 text-base rounded-xl font-medium",
    {
      "block absolute top-0 bottom-0 right-[20px] m-auto bg-none": mobile,
    }
  );

  const button = classNames("flex justify-center items-center gap-x-2", {
    hidden: mobile,
  });

  const handleHamburger = () => {
    setMobile(true);
  };
  const handleClose = () => {
    setMobile(false);
  };

  return (
    <div className="h-[10vh] relative z-50 max-w-[90%] mx-auto py-4">
      <nav className="flex justify-between items-center">
        <div className="flex justify-center">
          <div>
            <img className="w-[150px] mt-5 mr-8" src={logo} alt="logo" />
          </div>
          <div className="flex justify-center items-center gap-x-3">
            <ul
              className={
                mobile
                  ? "flex flex-col absolute top-0 left-0 bg-[#e50813] w-1/2 h-screen z-50 gap-10"
                  : "block"
              }
              onClick={handleClose}
            >
              <Link className="ml-8 text-white" to="/">
                Home
              </Link>
              <Link className="ml-8 text-white" to="/Series">
                Series
              </Link>
              <Link className="ml-8 text-white" to="/Movies">
                Movies
              </Link>
              <Link className="ml-8 text-white" to="/Pages">
                Pages
              </Link>
              <Link className="ml-8 text-white" to="/Pricing">
                Pricing
              </Link>
              <Link className="ml-8 text-white" to="/Contact">
                Contact
              </Link>
              <Link className="ml-8 text-white" to="/Contact">
                Contact
              </Link>
            </ul>
            <button
              type="button"
              onClick={handleHamburger}
              className={buttonStyle}
            >
              {mobile ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
        <div className={button}>
          <i className="fa fa-search p-[10px] h-10 text-center rounded-[50%] border border-solid border-white mx-0 my-2 text-white"></i>
          <i className="fa fa-bell p-[10px] h-10 text-center rounded-[50%] border border-solid border-white mx-0 my-2 text-white"></i>
          <i className="fa fa-user p-[10px] h-10 text-center rounded-[50%] border border-solid border-white mx-0 my-2 text-white"></i>
          <button
            type="button"
            className="bg-[#e50813] outline-none border-none text-white px-7 py-2 text-base rounded-xl font-medium"
          >
            Subscribe Now
          </button>
        </div>
      </nav>
    </div>
  );
}
