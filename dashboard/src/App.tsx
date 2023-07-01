import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

import defaultData from "./data";
import Header from "./components/HomePage";
import HomePages from "./components/Homes/HomePages";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div className="App header bg-black">
        <Header links={defaultData.links} />
        <Switch>
          <Route exact path="/" component={HomePages} />
        </Switch>
        <Footer
          lists={defaultData.footerData.list}
          description={defaultData.footerData.description}
        />
      </div>
    </Router>
  );
}

export default App;
