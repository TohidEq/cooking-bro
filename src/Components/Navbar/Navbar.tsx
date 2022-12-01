import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to={"/"} className="nav-title">
          <h1>Cooking Bro</h1>
        </Link>
        <SearchBar />
        <div className="nav-links">
          <NavLink to={"/"} end>
            Home
          </NavLink>
          <NavLink to={"/create"}>Create</NavLink>
        </div>
      </nav>
    </div>
  );
}
