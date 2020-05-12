import React, { useState, useEffect } from "react";
import axios from "axios";

import Filtered from "./Filtered";
import SearchBar from "./SearchBar";

const App = () => {
  const [countryList, setCountryList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //hakukentän inputin käsittelijä
  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  //maan nappulan käsittelijä
  const handleClick = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountryList(response.data);
    });
  }, []);

  return (
    <div>
      <SearchBar handleInput={handleInput} value={searchTerm} />
      <Filtered
        list={countryList}
        searchTerm={searchTerm}
        handleClick={handleClick}
      />
    </div>
  );
};

export default App;
