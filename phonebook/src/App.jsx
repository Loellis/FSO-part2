import { useState } from 'react'
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', num: '040-123456', id: 1 },
    { name: 'Ada Lovelace', num: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', num: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', num: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')

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
      id: persons.length + 1,
      num: newNum
    }

    // If person object with same ID already registered, don't add
    if (persons.findIndex(element => element.name === personObject.name) > -1) {
      alert(`${newName} is already added to the phonebook.`)
      return
    }

    setPersons(persons.concat(personObject))
    setNewNum("")
    setNewName("")

  }

  const handleNewPerson = (event) => setNewName(event.target.value)
  const handleNewNum = (event) => setNewNum(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filter={filter}
        handleFilterChange={handleFilterChange} 
      />
      <h2>Add a new person</h2>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNewPerson={handleNewPerson}
        newNum={newNum}
        handleNewNum={handleNewNum}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App

