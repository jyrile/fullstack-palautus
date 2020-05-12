import React from "react";

const SearchBar = ({ handleInput, searchTerm }) => {
  return <input onChange={handleInput} value={searchTerm} />;
};

export default SearchBar;
