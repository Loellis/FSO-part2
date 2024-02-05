import { useState, useEffect } from "react"
import weatherService from "../services/weather"

const Country = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null)

  const convertToCelsius = (kelvin) => (kelvin - 273.15)

  useEffect(() => {
    const fetchWeatherData = () => {
      weatherService.getGeoData(country.capital)
        .then(({ latitude, longitude }) => {
          return weatherService.getWeather(latitude, longitude)
        })
        .then(data => {
          setWeatherData(data)
        })
        .catch(error => {
          console.error("Error fetching weather data:", error)
        })
    }
      
    fetchWeatherData()

  }, [country])

  return (
    <div>
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
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} style={{ maxWidth: "250px" }} />
        </div>
      {weatherData && (
        <div>
          <h2>{`Weather report for ${ country.capital }`}</h2>
          <p><strong>Temperature:</strong> {convertToCelsius(weatherData.main.temp).toFixed(2)} °C</p>
          <img src={weatherService.getWeatherIcon(weatherData.weather[0].icon)} alt={`Icon depicting ${weatherData.weather[0].description}`} />
          <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
          <p><strong>Weather Condition:</strong> {weatherData.weather[0].description}</p>
          <p><strong>Wind:</strong> {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  )
}

export default Country