import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = { color: "#F1582A" };
const Header = () => (
  <nav>
    <NavLink to="/" exact activeStyle={activeStyle}>
      Home
    </NavLink>
    {" | "}
    <NavLink to="/about" activeStyle={activeStyle}>
      About
    </NavLink>
  </nav>
);

export default Header;
