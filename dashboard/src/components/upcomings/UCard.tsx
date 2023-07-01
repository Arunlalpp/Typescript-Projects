import React from "react";

export interface UCardProps {
  cover: string;
  name: string;
  time: string;
}

export default function UCard({ cover, time, name }: UCardProps) {
  return (
    <div className="w-[430px] h-[250px] left-0 top-0 relative transition-all text-white border-l-4 cursor-pointer border-transparent hover:border-red MovieBox">
      <div className="absolute top-0 left-0 -z-10 h-full w-full object-cover">
        <img src={cover} alt="cover" />
      </div>
      <div className="px-[70px] py-[50px] ">
        <h3 className="mt-4  py-5">{name}</h3>
        <span>{time}</span>
        <br />
        <button
          type="button"
          className="bg-red outline-none border-none text-white px-3 py-3 text-base rounded-xl font-medium flex justify-center items-center gap-x-4"
        >
          <i className="fa fa-play"></i>PLAY NOW
        </button>
      </div>
    </div>
  );
}
