import React, { useState } from 'react'
import CityCard from './components/CityCard'
import SearchCity from './components/SearchCity'
import './assets/css/index.css'

const App = () => {
  const [cities, setCities] = useState(["Tuxtepec"])
  
  return (
    <div className='container'>
      <h1>Weather Api</h1>
      <hr />
      <SearchCity cities={cities} setCities={setCities}/> 
      <hr /> 
      <div className='row'>
      {
        cities.map((city, index) => (
          <CityCard key={index} city={city} />    
        ))
      }
      </div>
    </div>
  )
}

export default App 