import React from 'react'
import DisplayWeather from './DisplayWeather'

const WeatherMain = () => {

  const url = "https://api.openweathermap.org/data/2.5/weather?q=bhubaneshwar&appid=753f10661e26a53cb54ef6fd4a1bd6f0"

  const fetchApi = async () => {
    const data = await fetch(url)
    const jsonData = await data.json()
  }

  const data = fetchApi()

  return (
    <>
      <DisplayWeather />
    </>
  )
}

export default WeatherMain