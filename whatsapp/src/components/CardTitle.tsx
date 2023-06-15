import classNames from "classnames";
import React, { useState } from "react";

export interface CardTitleProps {
  description: string;
  header: string;
  imageURL: string;
  title: string;
}

function CardTitle({ header, title, description, imageURL }: CardTitleProps) {
  const [hasHoverCard, setHasHoverCard] = useState(false);

  const cardHoverStyle = classNames(
    "rounded-xl px-6 pb-14 pt-7 flex flex-col justify-between",
    { "bg-[#111b21]": !hasHoverCard, "bg-[#25d366]": hasHoverCard }
  );

  const handleClickCard = () => {
    setHasHoverCard((prev) => !prev);
  };

  return (
    <div
      className={cardHoverStyle}
      onClick={handleClickCard}
      onKeyDown={handleClickCard}
      role="button"
      style={{ WebkitTapHighlightColor: "transparent" }}
      tabIndex={0}
    >
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
