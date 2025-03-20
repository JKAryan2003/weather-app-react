import React, { useEffect,useState } from 'react'
import DisplayWeather from './DisplayWeather'
import axios from 'axios'


const WeatherMain = () => {

  const [data, setData] = useState({})
  const url = "https://api.openweathermap.org/data/2.5/weather?q=bhubaneshwar&appid=753f10661e26a53cb54ef6fd4a1bd6f0"
  
  const getData = async () => {
    await axios.get(url)
    .then(response => setData(response.data))
  }

  useEffect(() => {
    getData()
  }, [])  

  return (
    <>
      <DisplayWeather data={data}/>
    </>
  )
}

export default WeatherMain