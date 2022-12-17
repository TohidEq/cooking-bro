import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { ThemeContext } from "../../context/ThemeContext";
interface AppContextInterface {
  color: string;
}
export default function Navbar() {
  const myAppContext = useContext(ThemeContext);
  console.log(myAppContext);
  console.log(myAppContext?.color);
  const { color } = myAppContext!;

  const A = {
    name1: "ali",
    age1: 12,
  };
  console.log(A);

  const { name1 }: { name1: string; age1: number } = A;

  const { name2 }: { name2: string; age2: number } = {
    name2: "ali",
    age2: 12,
  };

  console.log(myAppContext);

  return (
    <div className="navbar" style={{ background: myAppContext?.color }}>
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
