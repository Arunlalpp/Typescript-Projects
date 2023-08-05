import React from "react";
import Header from "./components/Header";
import "./App.css";
import ContentsUI from "./components/ContentsUI";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="">
      <Header />
      <main>
        <ContentsUI />
        <Services />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
