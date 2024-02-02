import React from "react"
import { useState } from "react"
import axios from "axios"
import SearchForm from "./components/SearchForm"
import CountryList from "./components/CountryList"
import Country from "./components/Country"

const App = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [message, setMessage] = useState(null)

  const handleSearchChange = (query) => {
    setSearchQuery(query)
    if (query.trim() === "") {
      setCountries([])
      setSelectedCountry(null)
      setMessage(null)
      return;
    }

    axios.get(`https://restcountries.com/v3.1/name/${query}`)
      .then(response => {
        console.log(response)
        const data = response.data
        if (data.length > 10) {
          setMessage("Too many matches, specify another filter")
          setCountries([])
        } else if (data.length === 1) {
          setSelectedCountry(data[0])
        } else {
          setMessage(null)
          setCountries(data)
          setSelectedCountry(null) // Clear selected country when new search is made
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setMessage(null)
        setCountries([])
      })
  }

  const handleCountrySelect = (country) => {
    setSelectedCountry(country)
  }

  return (
    <div>
      <h1>Country Information</h1>
      <SearchForm onSearchChange={handleSearchChange} />
      {message ? <p>{message}</p> : null}
      {selectedCountry ? (
        <Country country={selectedCountry} />
      ) : (
        <CountryList countries={countries} onCountrySelect={handleCountrySelect} />
      )}
    </div>
  )
}

export default App
