const CountryList = ({ countries, onCountrySelect }) => {
  const handleShowDetails = (country) => {
    onCountrySelect(country)
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name.common}>
          {country.name.common}{" "}
          <button onClick={() => handleShowDetails(country)}>Show</button>
        </li>
      ))}
    </ul>
  )
}

export default CountryList