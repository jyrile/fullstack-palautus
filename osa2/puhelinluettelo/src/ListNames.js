import React from "react";

const ListNames = ({ persons, nameFilter, handleRemove }) => {
  const filteredArray = persons.filter((item) =>
    item.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    (<h2>Numbers</h2>),
    filteredArray.map((item) => (
      <p key={item.name}>
        {item.name} {item.number}
        <button onClick={() => handleRemove(item)}>delete</button>
      </p>
    ))
  );
};

export default ListNames;
