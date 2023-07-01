import React from "react";

import defaultData from "./../../data";
import Upcoming from "../upcomings/Upcomming";
import Home from "./Home";
import Trending from "../trending/Trending";

export default function HomePages() {
  return (
    <div className="bg-black">
      <Home homeData={defaultData.homeData} />
      <Upcoming title={defaultData.title} upcoming={defaultData.upcoming} />
      <Upcoming title={defaultData.title2} upcoming={defaultData.latest} />
      <div className="py-5">
        <Trending />
      </div>
      <Upcoming title={defaultData.title3} upcoming={defaultData.recommended} />
    </div>
  );
}
