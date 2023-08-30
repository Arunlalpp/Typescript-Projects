import React from "react";

interface SliderOneProps {
  bgURL: string;
}

function SliderOne({ bgURL }: SliderOneProps) {
  return (
    <div className="h-full w-full">
      <div
        className="h-full w-full flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${bgURL})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <p className="text-white text-left font-medium text-xs">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          aliquid quas distinctio quam assumenda quibusdam, odit voluptas. Sit
          obcaecati laudantium voluptate earum libero quidem quibusdam facilis.
          Ut ipsum dolores ullam.
        </p>
      </div>
    </div>
  );
}

export default SliderOne;
