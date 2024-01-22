import React from 'react';

const Persons = ({ filteredPersons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <p key={person.id}>
          {person.name} {person.num}
        </p>
      ))}
    </div>
  );
};

export default Persons;
