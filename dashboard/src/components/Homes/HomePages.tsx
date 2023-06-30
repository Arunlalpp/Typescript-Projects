import React from "react";

import Home from "./Home";
import defaultData from "./../../data";

export default function HomePages() {
  return (
    <div>
      <Home items={defaultData} />
    </div>
  );
}
