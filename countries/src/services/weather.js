import axios from "axios"
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?"
const geodataUrl = "http://api.openweathermap.org/geo/1.0/direct?"
const iconUrl = "https://openweathermap.org/img/wn/"
const apiKey = import.meta.env.VITE_WAPI_KEY

const getGeoData = (cityName) => {
  const query = `${geodataUrl}q=${cityName}&limit=1&appid=${apiKey}`
  return axios.get(query)
    .then(response => {
      const latitude = response.data[0].lat
      const longitude = response.data[0].lon
      return { latitude, longitude}
    })
    .catch(error => {
      console.error("Error fetching geodata:", error)
    })
}

const getWeatherIcon = (iconId) => {
  const query = `${iconUrl}${iconId}@2x.png`
  return query
}

const getWeather = (lat, lon) => {
  const query = `${baseUrl}lat=${lat}&lon=${lon}&appid=${apiKey}`
  return axios.get(query)
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching weather data:", error)
    })
}

export default { getGeoData, getWeather, getWeatherIcon }