import React, { useState } from "react";

export interface ReactSimpleSliderProps {
  bgURL: string;
  imageURLs: string[];
}

function ReactSimpleSlider({ bgURL, imageURLs }: ReactSimpleSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === imageURLs.length ? 0 : prevIndex + 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? imageURLs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="h-screen w-screen">
      <div
        className="w-full h-full relative"
        style={{
          backgroundImage: `url(${bgURL})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-end flex-col h-full w-full absolute">
          <div className="flex justify-center items-center gap-8">
            <button
              type="button"
              onClick={handleLeftClick}
              className="text-green-900"
            >
              left
            </button>
            <div>
              <img
                className="w-full h-1/2 rounded-xl border-solid border-green-800 shadow-xl"
                src={imageURLs[currentIndex]}
                alt="slider images"
                key={currentIndex}
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              />
            </div>
            {imageURLs.map((_, index) => (
              <div
                key={index}
                className={`${
                  currentIndex < index
                    ? "bg-red-600 rounded-[50%] place-content-center w-5 h-5"
                    : "bg-yellow-900 rounded-[50%] place-content-center w-5 h-5"
                }`}
              >
                {index}
              </div>
            ))}
            <button
              type="button"
              onClick={handleRightClick}
              className="text-red-900"
            >
              right
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactSimpleSlider;
