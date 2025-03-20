import React, { useEffect,useState } from 'react'
import DisplayWeather from './DisplayWeather'
import axios from 'axios'


const WeatherMain = () => {

  const [data, setData] = useState({name: "", temp: "", feelsLike: "", description: "", tempMin: "", tempMax: "", windSpeed: "", humidity: "", sunRise: "", sunSet: ""})
  const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=753f10661e26a53cb54ef6fd4a1bd6f0"
  
  const getData = async () => {
    await axios.get(url)
    .then(response => setData(filterData(response)))
  }

  useEffect(() => {
    getData()
  }, [])  

  const filterData = (res) => {
    let response = res.data
    console.log(response);
    
    return (
      {
        name: response.name,
        temp: response.main.temp,
        feelsLike: response.main.feels_like,
        description: response.weather[0].description,
        tempMin: response.main.temp_min,
        tempMax: response.main.temp_max,
        windSpeed: response.wind.speed,
        sunRise: new Date(response.sys.sunrise * 1000).toLocaleTimeString(),
        sunSet: new Date(response.sys.sunset * 1000).toLocaleTimeString(),
        humidity: response.main.humidity
      }
    )
  }

  return (
    <>
      <DisplayWeather data={data}/>
    </>
  )
}

export default WeatherMain