import React from "react";

const AddForm = ({
  addNew,
  handleNameChange,
  newName,
  handleNumberChange,
  newNumber,
}) => {
  return (
    <div>
      <h3>Add New</h3>
      <form onSubmit={addNew}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
