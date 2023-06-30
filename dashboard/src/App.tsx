import React from "react";
import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/HomePage";
import HomePages from "./components/Homes/HomePages";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePages} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
