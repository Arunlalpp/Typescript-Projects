import React, { ReactNode } from "react";

export interface ButtonProps {
  text: string;
  icon?: ReactNode;
}

export function Button({ text, icon }: ButtonProps) {
  return (
    <button
      type="button"
      className="text-xs flex  justify-center w-full h-full p-4 rounded-full bg-[#25d366] gap-6 shadow-lg"
    >
      {text}
      <span>{icon}</span>
    </button>
  );
}

Button.defaultProps = {
  icon: "",
};
