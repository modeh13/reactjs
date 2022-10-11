import React from "react";
import Home from "./Home";

const App = ({pageName}) => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Speakers") return <></>;
}

export default App;