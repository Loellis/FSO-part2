import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ 
    name: 'Arto Hellas',
    id: 'Arto Hellas',
    num: '040-1234567'
  }]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    // If new name is blank, don't add
    if (newName.trim() === "") {
      alert("Name field is blank.")
      return
    }

    // If new num is less than 8 digits, don't add
    if (!/^\d{8,}$/.test(newNum)) {
      alert('Number must be 8 digits or more.')
      return
    }

    const personObject = {
      name: newName,
      id: newName,
      num: newNum
    }

    // If person object with same ID already registered, don't add
    if (persons.findIndex(element => element.id === personObject.id) > -1) {
      alert(`${newName} is already added to the phonebook.`)
      return
    }

    setPersons(persons.concat(personObject))
    setNewNum("")
    setNewName("")

  }

  const handleNewPerson = (event) => setNewName(event.target.value)
  const handleNewNum = (event) => setNewNum(event.target.value)


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
          number: <input
                    value={newNum}
                    onChange={handleNewNum}
                    type="number"
                  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map((person) => <p key={person.name}>{person.name} {person.num}</p>)}
    </div>
  )
}

export default App

