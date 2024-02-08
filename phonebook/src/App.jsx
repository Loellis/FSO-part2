import { useEffect, useState } from "react"
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import personService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState("")
  const [newNum, setNewNum] = useState("")
  const [filter, setFilter] = useState("")
  const [notification, setNotification] = useState(null)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    // If new name is blank, don"t add
    if (newName.trim() === "") {
      setNotification("Username is blank.")
      setIsError(true)
      setTimeout(() => {
        setNotification(null)
        setIsError(false)
      }, 5000)
      return
    }

    // If new num is less than 8 digits, don't add
    if (!/^[\d-]{8,}$/.test(newNum)) {
      setNotification("Number must be 8 digits or more.")
      setIsError(true)
      setTimeout(() => {
        setNotification(null)
        setIsError(false)
      }, 5000)
      return
    }

    const personObject = {
      name: newName,
      number: newNum
    }
  
  
    const personIndex = persons.findIndex(person => person.name === personObject.name)
    if (personIndex !== -1 && window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
        personService
        .update(persons[personIndex].id, personObject)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
          setNewNum("")
          setNewName("")
          setNotification(`Updated number of user: ${personObject.name}`)
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
    } else {
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewNum("")
        setNewName("")
        setNotification(`Added user: ${personObject.name}`)
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
    }
  }

  const handleNewPerson = (event) => setNewName(event.target.value)
  const handleNewNum = (event) => setNewNum(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  const handleDeletePerson = (person) => {
    personService
      .deletePerson(person.id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== person.id))
        setNotification(`User: ${person.name} has been deleted`)
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
      .catch(error => {
        setPersons(persons.filter(p => p.id !== person.id))
        setNotification(`Information of ${person.name} has already been removed from the server`)
        setIsError(true)
        setTimeout(() => {
          setNotification(null)
          setIsError(false)
        }, 5000)
      })
    }

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} isError={isError}/>
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
      <Persons filteredPersons={filteredPersons} onDelete={handleDeletePerson}/>
    </div>
  )
}

export default App

