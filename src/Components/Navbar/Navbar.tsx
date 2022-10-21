import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to={"/"}>
          <h1>Cooking Bro</h1>
        </Link>

        <div className="nav-links">
          <NavLink to={"/"} end>
            Home
          </NavLink>
          <NavLink to={"/create"}>Create</NavLink>
          <NavLink to={"/search"}>Search</NavLink>
        </div>
      </nav>
    </div>
  );
}
