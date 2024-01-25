import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Flights from './assets/Flights/Flights'
import HolidayPack from './assets/HolidayPack/HolidayPack'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/flights' element = {<Flights/>}/>
      <Route path = '/holipack' element = {<HolidayPack/>}/>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/' element = {<Home/>}/>

    </Routes>
    </BrowserRouter>
    
    
    
    </>
  )
}

export default App