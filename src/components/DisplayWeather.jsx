import React from 'react'
import './DisplayWeather.css'

const DisplayWeather = ({data}) => {
  return (
    <div>
      <h1 className='fw-bold fs-1 p-5'>MY WEATHER APP</h1>

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
            <p id='temperature'>{(data?.main?.temp - 273).toFixed(2)}°</p>
            <p className='fs-5'></p>
          </div>
        </div>

        <div className='row col-md-6 p-5 fs-5 rightDetails'>
          
          <div className="col-md-4">
            <div>
              <p>6°</p>
              <p>{(data?.main?.temp_max - 273).toFixed(3)}</p>
              <p>3°</p>
              <p>{(data?.main?.temp_min - 273).toFixed(3)}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <p>{data?.wind?.speed}mph</p>
              <p>Wind</p>
              <p>70%</p>
              <p>Rain</p>
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <p>6:40</p>
              <p>Sunrise</p>
              <p>7:19</p>
              <p>Sunset</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default DisplayWeather