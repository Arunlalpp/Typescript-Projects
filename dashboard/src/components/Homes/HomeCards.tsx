import React from "react";
import { Link } from "react-router-dom";

import PlayButton from "../../assets/play-button.png";
import Play from "../../assets/play.png";
import Texture from "../../assets/texure.jpg";

export interface HomeCardsProps {
  cover: string;
  description: string;
  genres: string;
  id: number;
  name: string;
  rating: number;
  starring: string;
  tags: string;
  time: string;
}

export default function HomeCards({
  cover,
  description,
  genres,
  id,
  name,
  rating,
  starring,
  tags,
  time,
}: HomeCardsProps) {
  return (
    <div className="relative inset-0 flex justify-center w-full h-full">
      <div className="absolute top-0 w-full h-screen -z-10 coverImage">
        <img className="w-full" src={cover} alt="cover" />
      </div>
      <div className="p-[100px]">
        <h1
          className="mt-[80px] text-[90px] uppercase font-extrabold bg-clip-text text-transparent antialiased"
          style={{
            backgroundImage: `url(${Texture})`,
            backgroundPosition: "cover",
            backgroundRepeat: "repeat",
          }}
        >
          {name}
        </h1>
        <div className="mx- my-0">
          <i className="fas fa-star text-red mr-1"></i>
          <i className="fas fa-star text-red mr-1"></i>
          <i className="fas fa-star text-red mr-1"></i>
          <i className="fas fa-star text-red mr-1"></i>
          <i className="fas fa-star-half text-red mr-1"></i>
        </div>
        <div className="w-1/2">
          <label className="mx-0 my-5">{rating}</label>
          <span className="bg-gray p-1 text-white font-bold">GP</span>
          <label className="mx-0 my-5">{time}</label>
          <p className="leading-8">{description}</p>
        </div>
        <div className="my-8">
          <h4 className="font-medium mt-3 text-xl">
            <span className="text-red">Starring</span>
            {starring}
          </h4>
          <h4 className="font-medium mt-3 text-xl">
            <span className="text-red">Genres</span>
            {genres}
          </h4>
          <h4 className="font-medium mt-3 text-xl">
            <span className="text-red">Tags</span>
            {tags}
          </h4>
        </div>
        <button className="bg-red outline-none border-none text-white px-7 py-3 text-base rounded-xl font-medium flex justify-center items-center gap-x-4">
          <i className="fas fa-play"></i>PLAY NOW
        </button>
      </div>
      <div className="flex items-center justify-center">
        <Link to={`/singlepage/${id}`}>
          <button className="bg-none outline-none border-none hover:text-red text-white px-7 py-2 text-xl whitespace-nowrap rounded-xl font-bold transition-all cursor-pointer flex items-center justify-center">
            <div className="relative w-[90px] h-[90px] mr-5 transition-all">
              <img src={PlayButton} alt="play" />
              <img
                src={Play}
                alt="play"
                className="absolute left-0 top-0 opacity-0 hover:opacity-5"
              />
            </div>
            WATCH TRAILER
          </button>
        </Link>
      </div>
    </div>
  );
}
