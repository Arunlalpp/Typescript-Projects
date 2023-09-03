import React, { useState } from "react";

import leftArrow from "../assets/LeftArrow.svg";
import rightArrow from "../assets/RightArrow.svg";
import SliderTwo, { ScreenTypes } from "./SliderTwo";

function ReactSimpleSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLeftButtonClick = () => {
    if (activeIndex !== 0) {
      setActiveIndex(activeIndex - 1);
    }
  };
  const handleRightButtonClick = () => {
    if (activeIndex !== 2) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const SliderData = [
    {
      type: ScreenTypes.Initial,
      bgImg:
        "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Welcome to the Page",
    },
    {
      type: ScreenTypes.Second,
      bgImg:
        "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Notes",
    },
    {
      type: ScreenTypes.Final,
      bgImg:
        ";https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Last One",
    },
  ];

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
        <div className="w-full h-full bg-[#ffffff80] flex justify-between items-center gap-3 px-5 py-4 rounded-enlarge">
          <button onClick={handleLeftButtonClick} type="button">
            <img className="w-10 h-10" src={leftArrow} alt="left arrow" />
          </button>
          <div className="flex">
            {SliderData.map((sliderScreenData, index) => {
              const dotIcon = activeIndex === index ? "." : "0";

              return (
                // <img
                //   className="px-2"
                //   key={sliderScreenData.type}
                //   src={dotIcon}
                //   alt="dot icon"
                // />
                <div className={dotIcon} key={sliderScreenData.type}></div>
              );
            })}
          </div>
          <button onClick={handleRightButtonClick} type="button">
            <img className="w-10 h-10" src={rightArrow} alt="right arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ReactSimpleSlider;
