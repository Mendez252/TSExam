import React, { useState } from "react";
import "./Searchbar.css";

const Searchbar = () => {
  const [query, setQuery] = useState("");

  const onHandleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search_container">
      <i className="fa-solid fa-magnifying-glass icon"></i>
      <input
        className="searchbar_container"
        placeholder="Keyboard"
        onChange={onHandleChange}
      ></input>
      <button className="search_button" onClick={() => console.log(query)}>
        Search
      </button>
    </div>
  );
};

export default Searchbar;
