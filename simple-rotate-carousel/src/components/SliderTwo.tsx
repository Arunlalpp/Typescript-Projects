import React from "react";

export interface SliderTwoProps {
  bgURL: string;
  header: string;
  collections?: string[];
}

function SliderTwo({ bgURL, header, collections }: SliderTwoProps) {
  return (
    <div className="h-full w-full">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${bgURL})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center pt-8">
          <p className="text-white font-bold text-center text-xl">{header}</p>
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <div className="bg-white px-6 h-3/4 w-3/4">
            <ul className="py-4">
              {collections?.map((items) => (
                <li className="list-disc">{items}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderTwo;
