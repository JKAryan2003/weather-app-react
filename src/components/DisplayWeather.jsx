import React from 'react'
import './DisplayWeather.css'

const DisplayWeather = ({data}) => {
  return (
    <div>
      <h1 className='fw-bold fs-1 p-5 text-center'>MY WEATHER APP</h1>

      <div className='text-center'>
        <input type="text" placeholder='search city'/>
      </div>

      <div className='p-5'>
        <p className='fw-semibold fs-2'>{data.name}</p>
        <p className='fs-5'>Wednesday 19 March</p>
      </div>

      <div className='row'>
        <div className='d-flex col-md-6 temp'>
          <i className="bi bi-cloud-fill" id='cloudIcon'></i>
          <div className='mx-5'>
            <p id='temperature'>{(data?.temp - 273).toFixed(2)}°</p>
            <p className='fs-2'>{data?.description}</p>
          </div>
        </div>

        <div className='row col-md-6 p-5 fs-5 rightDetails'>
          
          <div className="col-md-4">
            <div>
              <p>{(data?.tempMax - 273).toFixed(3)}°</p>
              <p>High</p>
              <p>{(data?.tempMin - 273).toFixed(3)}°</p>
              <p>Low</p>
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <p>{data?.windSpeed}mph</p>
              <p>Wind</p>
              <p>{data?.humidity}</p>
              <p>Humidity</p>
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <p>{data.sunRise}</p>
              <p>Sunrise</p>
              <p>{data.sunSet}</p>
              <p>Sunset</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default DisplayWeather