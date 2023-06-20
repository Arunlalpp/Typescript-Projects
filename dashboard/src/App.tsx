import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Header />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
