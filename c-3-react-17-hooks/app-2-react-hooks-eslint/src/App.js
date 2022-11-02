import React from "react";
import Home from "./Home";
import Speakers from "./Speakers";

const App = ({pageName}) => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Speakers") return <Speakers></Speakers>;
}

export default App;