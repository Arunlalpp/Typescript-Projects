import React from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomeCards from "./HomeCards";
import { HomeData } from "../../types";

export interface homeProps {
  items: HomeData[];
}

export default function Home({ items }: homeProps) {
  const SampleNextArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
      <div
        onClick={onClick}
        onKeyDown={onClick}
        role="button"
        style={{ WebkitTapHighlightColor: "transparent" }}
        tabIndex={0}
      >
        <button className="absolute top-[50%] right-[2%] bg-none p-0 w-12 h-12 rounded-[50%] cursor-pointer border-2 border-red-500 z-50">
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
        <button className="bg-none p-0 w-12 h-12 rounded-[50%] cursor-pointer border-2 border-red-500 absolute top-[50%] left-[2%] z-50">
          <i className="fa fa-chevron-left"></i>
        </button>
      </div>
    );
  };
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow1 />,
  };
  return (
    <div className="relative inset-0 text-white">
      <Slider {...settings}>
        {items.map((item) => (
          <HomeCards
            cover={item.cover}
            description={item.desc}
            genres={item.genres}
            id={item.id}
            name={item.name}
            rating={item.rating}
            starring={item.starring}
            tags={item.tags}
            time={item.time}
          />
        ))}
      </Slider>
    </div>
  );
}
