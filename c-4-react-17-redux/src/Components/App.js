import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Header from "./Header";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
