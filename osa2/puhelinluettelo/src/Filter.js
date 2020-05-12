import React from "react";

const Filter = ({ handleFilter, nameFilter }) => {
  return (
    <div>
      filter shown with{" "}
      <input onChange={handleFilter} value={nameFilter}></input>
    </div>
  );
};
export default Filter;
