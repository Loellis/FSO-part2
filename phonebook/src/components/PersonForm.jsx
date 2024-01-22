import React from 'react';

const PersonForm = ({ addPerson, newName, handleNewPerson, newNum, handleNewNum }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        Name: <input value={newName} onChange={handleNewPerson} />
      </div>
      <div>
        Number: <input value={newNum} onChange={handleNewNum} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
