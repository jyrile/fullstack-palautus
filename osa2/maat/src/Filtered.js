import React from "react";
import Weather from "./Weather";

const Filtered = ({ list, searchTerm, handleClick }) => {
  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredList.length >= 10) {
    return <p>Too many matches, specify filter</p>;
  }

  if (filteredList.length === 1) {
    return filteredList.map((item) => (
      <React.Fragment key={item.name}>
        <h1>{item.name}</h1>
        Capital: {item.capital}
        <br />
        Population: {item.population}
        <h3>Languages</h3>
        <ul>
          {filteredList.map((item) =>
            item.languages.map((lang) => <li key={lang.name}>{lang.name}</li>)
          )}
        </ul>
        <img src={item.flag} alt="Flag" height="100" />
        <Weather capital={item.capital} />
      </React.Fragment>
    ));
  } else {
    return (
      <p>
        {filteredList.map((item) => (
          <React.Fragment key={item.name}>
            {item.name}
            <button onClick={handleClick} value={item.name}>
              show
            </button>
            <br />
          </React.Fragment>
        ))}
      </p>
    );
  }
};

export default Filtered;
