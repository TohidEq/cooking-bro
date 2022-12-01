import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const SearchBar = (props: Props) => {
  const [term, setTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/search?q=${term}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Seacrh:</label>
        <input
          type="text"
          id="search"
          placeholder="Search..."
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          required
        />
      </form>
    </div>
  );
};

export default SearchBar;
