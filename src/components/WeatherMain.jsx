import React, { useEffect,useState } from 'react'
import DisplayWeather from './DisplayWeather'


const WeatherMain = () => {

  const [data, setData] = useState("")

  useEffect(() => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=bhubaneshwar&appid=753f10661e26a53cb54ef6fd4a1bd6f0"

    fetch(url).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setData(data)
    })

  
  }, [])
  

  return (
    <>
      <DisplayWeather data={data}/>
    </>
  )
}

export default WeatherMain