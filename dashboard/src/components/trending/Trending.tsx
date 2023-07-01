import React from "react";

import defaultData from "./../../data";
import Home from "../Homes/Home";

export default function Trending() {
  return (
    <div>
      <Home homeData={defaultData.trending} />
    </div>
  );
}
