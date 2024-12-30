import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#eee" : "inherit",
    };
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink style={navStyle} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={navStyle} to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink style={navStyle} to="/search">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink style={navStyle} to="/protected">
            Protected
          </NavLink>
        </li>

        <li>
          <NavLink style={navStyle} to="/obj">
            Route as Object
          </NavLink>
        </li>

        <li>
          <NavLink style={navStyle} to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
