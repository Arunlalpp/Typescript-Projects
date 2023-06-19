import classNames from "classnames";
import React, { useState } from "react";
export interface CardTitleProps {
  description: string;
  header: string;
  imageURL: string;
  title: string;
}

function CardTitle({ header, title, description, imageURL }: CardTitleProps) {
  return (
    <div
      className="rounded-xl pb-14 pt-7  px-4 flex flex-col justify-between bg-[#111b21] hover:bg-[#25d366]"
      data-testid="card-title-container"
    >
      <div
        className="flex flex-col items-center text-center text-white hover:text-black"
        data-testid="card-title-wrapper"
      >
        <p className="text-xs font-normal pb-2">{header}</p>
        <p className="text-2xl font-semibold pb-5">{title}</p>
        <p className="text-xs font-normal pb-8">{description}</p>
      </div>
      <div
        className="h-full w-full flex justify-center items-center relative top-4"
        data-testid="card-title-image"
      >
        <img className="h-[100px] w-[232px]" src={imageURL} alt="card-url" />
      </div>
    </div>
  );
}

export default CardTitle;
