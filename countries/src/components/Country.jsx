const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Area:</strong> {country.area}</p>
      <p><strong>Languages:</strong></p>
      <ul>
        {Object.entries(country.languages).map(([key, lang]) => (
          <li key={key}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
    </div>
  )
}

export default Country