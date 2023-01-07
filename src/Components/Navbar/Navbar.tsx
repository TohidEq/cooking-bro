import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import useTheme from "../../Hooks/useTheme";
interface AppContextInterface {
  color: string;
}
export default function Navbar() {
  // const { color } = myAppContext!;
  const { color, changeColor } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav onClick={() => changeColor("pink")}>
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
