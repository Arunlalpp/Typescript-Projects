import React, { ReactNode } from "react";

export interface ButtonProps {
  text: string;
  icon?: ReactNode;
  onClick: () => void;
}

export function Button({ text, icon, onClick }: ButtonProps) {
  return (
    <button
      className="text-xs flex  justify-center w-full h-full p-4 rounded-full bg-[#25d366] gap-6 shadow-lg"
      data-testid="button-element"
      onClick={onClick}
      type="button"
    >
      {text}
      <span data-testid="button-icon">{icon}</span>
    </button>
  );
}

Button.defaultProps = {
  icon: "",
};
