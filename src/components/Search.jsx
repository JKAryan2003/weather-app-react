import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './Search.css'

const Search = ({getPlace, input, setInput, search, setLan, setLon, setSearch, name, setName}) => {

  useEffect(() => {
    getPlace(input)
  }, [input])
  
  const handleClick = (item) => {
    setLan(item.lat)
    setLon(item.lon)
    setInput("")
    setSearch([])
    setName(item.name)
  }

  return (
    <>
      <h1 className='fw-bold fs-1 p-5 text-center'>MY WEATHER APP</h1>
      <div className='text-center d-flex flex-column justify-content-center align-items-center'>
        <input type="text" placeholder='search city' value={input} onChange={(e) => setInput(e.target.value)} className='px-5 rounded py-1'/>
        {search.map ((item) => 
          <div onClick={() => handleClick(item)} className='searchDiv d-flex justify-content-between px-4 py-2'>
            <div>
              {item.name}
            </div>
            <div>
              {item.state + " "}
              {item.country}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Search