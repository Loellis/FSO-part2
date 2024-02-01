const Persons = ({ filteredPersons, onDelete }) => {

  const removePerson = (person) => {
    if (window.confirm(`Are you sure you want to delete user: ${person.name}`)) {
      onDelete(person)
    }
  }

  return (
    <div>
      {filteredPersons.map((person) => (
        <div key={person.id}>
          <p>
            {person.name} - {person.number}
          </p><button onClick={() => removePerson(person)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
