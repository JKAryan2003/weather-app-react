import React from 'react'
import './DisplayWeather.css'

const DisplayWeather = ({data}) => {
  console.log(data.name);
  
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
        <div className='d-flex col-md-6 border temp'>
          <i className="bi bi-cloud-fill" id='cloudIcon'></i>
          <div className='mx-5'>
            <p id='temperature'>5°</p>
            <p className='fs-5'>Overcast Clouds</p>
          </div>
        </div>

        <div className='row col-md-6 border p-5 fs-5 rightDetails'>
          
          <div className="col-md-4">
            <div>
              <p>6°</p>
              <p>High</p>
              <p>3°</p>
              <p>Low</p>
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <p>3.1mph</p>
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