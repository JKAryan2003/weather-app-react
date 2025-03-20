import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './Search.css'

const Search = ({getPlace, input, setInput, search}) => {
  

  useEffect(() => {
    getPlace(input)
  }, [input])

  return (
    <>
      <h1 className='fw-bold fs-1 p-5 text-center'>MY WEATHER APP</h1>
      <div className='text-center'>
        <input type="text" placeholder='search city' value={input} onChange={(e) => setInput(e.target.value)}/>
        <div className='bg-body-tertiary w-25 text-center search'>
          {search.map ((item) => 
            <li>{item.name + " " + item.state + " " + item.country }</li>
          )}
        </div>
      </div>
    </>
  )
}

export default Search