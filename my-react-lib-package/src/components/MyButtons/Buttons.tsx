import React from "react";
import classNames from "classnames";

export enum ButtonTypes {
  primary = "primary",
  secondary = "secondary",
  outLined = "outLined",
}

export interface ButtonProps {
  onClick: () => void;
  outLine?: string;
  text: string;
  textColor?: string;
  variant?: ButtonTypes;
  width?: string;
}

export function Button({
  onClick,
  outLine = "",
  text,
  textColor = "",
  variant = ButtonTypes.primary,
  width = "w-full",
}: ButtonProps) {
  const buttonStyle = classNames(
    "flex justify-center items-center whitespace-nowrap text-lg",
    {
      "p-2 rounded-xl shadow-xl bg-green-900 font-medium":
        variant === ButtonTypes.primary,
      "p-3 rounded-2xl shadow-2xl bg-green-900 font-semibold":
        variant === ButtonTypes.secondary,
      "p-3 rounded-xl shadow-2xl font-semibold border-2 text-base":
        variant === ButtonTypes.outLined,
      [textColor]: true,
      [outLine]: true,
      [width]: true,
    }
  );
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ WebkitTapHighlightColor: "transparent" }}
      className={buttonStyle}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  variant: ButtonTypes.primary,
  textColor: "",
  outLine: "",
  width: "w-full",
};
