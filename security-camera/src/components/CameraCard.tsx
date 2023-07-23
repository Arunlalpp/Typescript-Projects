import React from "react";

export default function CameraCard() {

const renderSection=()=>{
  
}

  return (
    <div>
      <div className="bg-red-600 p-4 h-72 w-full">
        <div className="w-full">
          <img
            src="https://t4.ftcdn.net/jpg/03/67/19/99/240_F_367199929_2b2tjRW9DJLYmxr3F0xdJuSwewSf2SNv.jpg"
            alt="camera surveillance"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-1">
            <span>CF8 Lobby right (3MP)</span>
            <span>''</span>
          </div>
          <div className="flex justify-center items-center gap-x-1">
            <button type="button">Click Left</button>
            <div>287/287</div>
            <button type="button">Click Right</button>
          </div>
          <div className="h-2 w-2 text-green-800" />
        </div>
      </div>
    </div>
  );
}
