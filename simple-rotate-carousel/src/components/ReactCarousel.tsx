// import classNames from "classnames";
import React, { useEffect, useState } from "react";

export interface ReactCarouselProps {
  imageURLs: string[];
}

function ReactCarousel({ imageURLs }: ReactCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();

  useEffect(() => {
    const a = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === imageURLs.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    setCurrentTimeout(a);
  }, [imageURLs.length, currentIndex]);

  //   const handleNext = () => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex + 1 === imageURLs.length ? 0 : prevIndex + 1
  //     );
  //   };

  //   const handlePrevious = () => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex - 1 < 0 ? imageURLs.length - 1 : prevIndex - 1
  //     );
  //   };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    clearTimeout(currentTimeout);
  };

  return (
    <div className=" rounded-xl h-96 max-h-[650px] m-auto overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-full rounded-xl border-solid border-green-800"
          src={imageURLs[currentIndex]}
          alt="slider images"
          key={currentIndex}
          style={{ transformStyle: "flat" }}
        />
      </div>
      <div className="mt-5 flex justify-center gap-5">
        {imageURLs.map((_, index) => (
          <div
            key={index}
            className={`w-5 h-5 rounded-[50%] bg-red-600 ${
              currentIndex === index ? "bg-blue-600" : "bg-transparent"
            }`}
            onClick={() => handleDotClick(index)}
          >
            {index}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReactCarousel;
