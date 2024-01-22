import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ 
    name: 'Arto Hellas',
    id: 'Arto Hellas'
  }]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    // If new name is blank, don't add
    if (newName.trim() === "") {
      console.log("New name is blank.")
      return
    }

    const personObject = {
      name: newName,
      id: newName
    }

    // If person object with same ID already registered, don't add
    if (persons.findIndex(element => element.id === personObject.id) > -1) {
      console.log("Object with that key already exists.")
      return
    }

    setPersons(persons.concat(personObject))
    setNewName("")

  }

  const handleNewPerson = (event) => setNewName(event.target.value)


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                  value={newName} 
                  onChange={handleNewPerson}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map((person) => <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App

