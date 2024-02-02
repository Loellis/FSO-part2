import React from "react"

const SearchForm = ({ onSearchChange }) => {
  const handleSearchChange = (event) => {
    const query = event.target.value
    onSearchChange(query)
  }

  return (
    <div>
      <h3>Find countries:</h3>
      <input 
        type="text" 
        id="search" 
        onChange={handleSearchChange}
        placeholder="Start typing . . ."
      />
    </div>
  )
}

export default SearchForm