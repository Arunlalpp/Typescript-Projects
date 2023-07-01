import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { UpcomingData } from "../../types";
import UCard from "./UCard";
import Slider, { Settings } from "react-slick";
import { Link } from "react-router-dom";

export interface UpComingProps {
  title: string;
  upcoming: UpcomingData[];
}
export default function Upcoming({ title, upcoming }: UpComingProps) {
  const SampleNextArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
      <div
        onClick={onClick}
        onKeyDown={onClick}
        role="button"
        style={{ WebkitTapHighlightColor: "transparent" }}
        tabIndex={0}
      >
        <button className="absolute top-1/2 right-[2%] bg-none w-12 h-12 rounded-[50%] cursor-pointer border-2 border-red-500 z-50">
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    );
  };

  const SampleNextArrow1 = ({ onClick }: { onClick?: () => void }) => {
    return (
      <div
        onClick={onClick}
        onKeyDown={onClick}
        role="button"
        style={{ WebkitTapHighlightColor: "transparent" }}
        tabIndex={0}
      >
        <button className="bg-none w-12 h-12 rounded-[50%] cursor-pointer border-2 border-red-500 absolute top-1/2 left-[2%] z-50">
          <i className="fa fa-chevron-left"></i>
        </button>
      </div>
    );
  };

  const settings: Settings = {
    dots: false,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow1 />,
    slidesToScroll: 1,
    slidesToShow: 6,
    speed: 500,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-[90%]">
      <div className="text-2xl font-extrabold text-white mx-8 py-6 flex justify-between">
        <div>{title}</div>
        <div className="text-red font-medium">
          <Link to="/">View All</Link>
        </div>
      </div>
      <div>
        <Slider {...settings}>
          {upcoming.map((upCom) => (
            <UCard cover={upCom.cover} name={upCom.name} time={upCom.time} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
