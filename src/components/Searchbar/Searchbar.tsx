import React, { useState } from "react";
import { createNoSubstitutionTemplateLiteral } from "typescript";
import "./Searchbar.css";

interface searchbarProps {
  onHandleSearch: (e: string) => void;
}

const Searchbar = ({ onHandleSearch }: searchbarProps) => {
  const [query, setQuery] = useState<string>("");

  const onHandleChange = (e: React.FormEvent): void => {
    e.preventDefault();
    if (e.target as HTMLInputElement) {
      setQuery((e.target as HTMLInputElement).value);
    }
  };

  const search = () => {
    console.log(query);
    onHandleSearch(query);
  };

  return (
    <div className="search_container">
      <i className="fa-solid fa-magnifying-glass icon"></i>
      <input
        className="searchbar_container"
        placeholder="Search only by name"
        onChange={(e) => onHandleChange(e)}
        value={query}
      ></input>
      <button className="search_button" onClick={() => search()}>
        Search
      </button>
    </div>
  );
};

export default Searchbar;
