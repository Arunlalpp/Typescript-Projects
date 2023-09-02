import React from "react";
import SliderOne from "./SliderOne";

export enum ScreenTypes {
  Initial = "initial",
  Second = "second",
  Final = "final",
}

interface Props {
  title: string;
  screenType: ScreenTypes;
  bgImg: string;
}

function SliderTwo({ title, screenType, bgImg }: Props) {
  const render = () => {
    if (screenType === ScreenTypes.Initial) {
      return (
        <div className="p-5 text-center">
          SampleText
          <br />
          <br />
          SampleText@
        </div>
      );
    }
    if (screenType === ScreenTypes.Final) {
      return (
        <div className="p-5 text-center">
          <p className="text-body-large font-medium text-nw-grey-type px-4">
            Dummy
          </p>
          <div className="flex flex-col items-center justify-center pb-3 pt-7 px-6">
            <img
              className="pb-3"
              src="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="internet"
            />
            <p className="font-bold text-nw-grey-type">DummyOne</p>
          </div>
          <div className="flex flex-col items-center justify-center pb-3 pt-7 px-6">
            <img
              className="pb-3"
              src="https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="DND"
            />
            <p className="font-bold text-nw-grey-type">2.DummyTwo</p>
          </div>
        </div>
      );
    }
    return (
      <div className="w-full h-full pb-32">
        <SliderOne />
      </div>
    );
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
      className="w-full h-full flex flex-col whitespace-normal px-6"
    >
      <div className="w-full pt-10 flex items-center justify-end">
        <button
          className="py-4 font-semibold text-callout-02 text-nw-grey-type"
          type="button"
        >
          Skip
        </button>
      </div>
      <div className="w-full px-14 pb-5">
        <p className="text-heading-04 font-semibold text-center">{title}</p>
      </div>
      {render()}
    </div>
  );
}

export default SliderTwo;
