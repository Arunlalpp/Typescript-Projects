import React, { useEffect, useState } from "react";

import leftArrow from "../assets/LeftArrow.svg";
import rightArrow from "../assets/RightArrow.svg";
import ActiveDot from "../assets/ActiveDot.png";
import InactiveActiveDot from "../assets/InactiveDot.png";
import bg1 from "../assets/bg-1.jpg";
import bg2 from "../assets/bg-2.jpg";
import bg3 from "../assets/bg-3.jpg";

import SliderTwo, { ScreenTypes } from "./SliderTwo";

function ReactSimpleSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();

  const SliderData = [
    {
      type: ScreenTypes.Initial,
      bgImg: bg1,
      title: "Welcome",
    },
    {
      type: ScreenTypes.Second,
      bgImg: bg2,
      title: "Notes",
    },
    {
      type: ScreenTypes.Final,
      bgImg: bg3,
      title: "Explore",
    },
  ];

  useEffect(() => {
    const currentTimeout = setTimeout(() => {
      setActiveIndex((prevIndex) =>
        prevIndex + 1 === SliderData.length ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearTimeout(currentTimeout);
      setCurrentTimeout(currentTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const handleLeftButtonClick = () => {
    if (activeIndex !== 0) {
      setActiveIndex(activeIndex - 1);
      clearTimeout(currentTimeout);
    }
  };
  const handleRightButtonClick = () => {
    if (activeIndex !== 2) {
      setActiveIndex(activeIndex + 1);
      clearTimeout(currentTimeout);
    }
  };

  const onButtonClickRemoveHighlightColor = {
    WebkitTapHighlightColor: "transparent",
  };

  return (
    <div className="bg-transparent w-full h-full relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className="whitespace-nowrap transition-transform duration-30 w-full h-full"
        style={{
          scrollBehavior: "smooth",
          transform: `translateX(-${activeIndex * 100}%)`,
          userSelect: "none",
        }}
      >
        {SliderData.map((sliderScreenData, index) => {
          const key = sliderScreenData.type + index;
          return (
            <div
              key={key}
              className="inline-flex items-center justify-center h-full w-full"
            >
              <SliderTwo
                title={sliderScreenData.title}
                screenType={sliderScreenData.type}
                bgImg={sliderScreenData.bgImg}
              />
            </div>
          );
        })}
      </div>
      <div className="h-fit w-full px-5 absolute bottom-10 z-20 bg-transparent">
        <div className="w-full h-full bg-[#ffffff80] flex justify-between items-center gap-3 px-5 py-4 rounded-xl shadow-xl">
          <button
            onClick={handleLeftButtonClick}
            type="button"
            style={onButtonClickRemoveHighlightColor}
          >
            <img className="w-7 h-7" src={leftArrow} alt="left arrow" />
          </button>
          <div className="flex">
            {SliderData.map((sliderScreenData, index) => {
              const dotIcon =
                activeIndex === index ? InactiveActiveDot : ActiveDot;

              return (
                <img
                  className="px-2 w-11 h-8"
                  key={sliderScreenData.type}
                  src={dotIcon}
                  alt="dot icon"
                />
              );
            })}
          </div>
          <button
            onClick={handleRightButtonClick}
            type="button"
            style={onButtonClickRemoveHighlightColor}
          >
            <img className="w-7 h-7" src={rightArrow} alt="right arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ReactSimpleSlider;
