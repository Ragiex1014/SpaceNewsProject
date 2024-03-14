import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <NavLink to="" className={({ isActive }) => (isActive ? "active" : "")}>
        <h1>Home</h1>
      </NavLink>
      <NavLink
        to="blog"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <h1>Blogs</h1>
      </NavLink>
      ;
      <NavLink
        to="report"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <h1>Reports</h1>
      </NavLink>
    </nav>
  );
};

export default NavBar;
