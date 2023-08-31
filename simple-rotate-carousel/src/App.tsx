import React from "react";
// import SliderTwo from "./components/SliderTwo";
// import SliderOne from "./components/SlidereOne";
import ReactSimpleSlider from "./components/ReactSimpleSlider";
// import ReactCarousel from "./components/ReactCarousel";

const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

// const collectionData = ["one", "two", "three"];

function App() {
  return (
    <div className="w-screen h-screen">
      {/* <ReactCarousel imageURLs={images} /> */}
      {/* <SliderTwo
        bgURL="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600"
        header="Sample"
        collections={collectionData}
      /> */}
      {/* <SliderOne bgURL="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600" /> */}
      <ReactSimpleSlider
        imageURLs={images}
        bgURL="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
    </div>
  );
}

export default App;
