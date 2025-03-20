import React, { useEffect,useState } from 'react'
import DisplayWeather from './DisplayWeather'
import axios from 'axios'
import Search from './Search'


const WeatherMain = () => {

  const [search, setSearch] = useState([])
  const [input, setInput] = useState()
  const [lat, setLan] = useState("20.2602964")
  const [lon, setLon] = useState("85.8394521")
  const [data, setData] = useState({temp: "", feelsLike: "", description: "", tempMin: "", tempMax: "", windSpeed: "", humidity: "", sunRise: "", sunSet: ""})
  const [hourlyData, setHourlyData] = useState({})
  const [name, setName] = useState("Bhubaneswar")

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=753f10661e26a53cb54ef6fd4a1bd6f0`
  
  const getData = async () => {
    await axios.get(url)
    .then(response => setData(filterData(response)))
  }
  
  useEffect(() => {
    getData()
  }, [lon])  

  const filterData = (res) => {
    let response = res.data
    return (
      {
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

  const placeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=753f10661e26a53cb54ef6fd4a1bd6f0`

  const getPlace = async () => {
    await axios.get(placeUrl)
    .then(response => {setSearch(response.data)}
    )
  }

  const hourUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=753f10661e26a53cb54ef6fd4a1bd6f0`

  const getHourlyData = async () => {
    await axios.get(hourUrl)
    .then(response => {setHourlyData(response.data.list)}
    )
  }

  useEffect(() => {
    getHourlyData()
  }, [lon])
  
  console.log(hourlyData);
  
  return (
    <>
      <Search getPlace={getPlace} input={input} setInput={setInput} search={search} setSearch={setSearch} setLan={setLan} setLon={setLon} name={name} setName={setName}/>
      <DisplayWeather data={data} name={name} setName={setName}/>
    </>
  )
}

export default WeatherMain