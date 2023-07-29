import React, { ReactElement } from "react";

export interface PopupProps {
  children: ReactElement;
}

export function Popup({ children }: PopupProps) {
  return (
    <div className="backdrop-blur-xl flex flex-col justify-end absolute inset-0 z-50 h-full w-full">
      <div className="py-8 w-80 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-2xl">
        {children}
      </div>
    </div>
  );
}
