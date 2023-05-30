import React from "react";

export interface CardTitleProps {
  description: string;
  header: string;
  imageURL: string;
  title: string;
}

function CardTitle({ header, title, description, imageURL }: CardTitleProps) {
  return (
    <div className="bg-[#111b21] hover:bg-[#25d366] rounded-xl px-8 py-6 flex flex-col justify-between">
      <div className="flex flex-col items-center text-center text-white hover:text-black">
        <p className="text-xs font-normal pb-2">{header}</p>
        <p className="text-2xl font-semibold pb-5">{title}</p>
        <p className="text-xs font-normal pb-8">{description}</p>
      </div>
      <div className="h-full w-full flex justify-center items-center relative top-4">
        <img className="h-[100px] w-[232px]" src={imageURL} alt="card-url" />
      </div>
    </div>
  );
}

export default CardTitle;
