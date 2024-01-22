import React from 'react'
import { BsAirplane } from "react-icons/bs";
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import Flights from '../Flights/Flights';

const Navbar = () => {
  return (
    <div className='navBar'>

<NavLink to = '/'>
        <img src='/Images/p1.png' className='logo'/>
    </NavLink>

        <ul className='nav-elements'>
            <li>
                <NavLink to ='/'>Home </NavLink>
            </li>

            <li>
                <NavLink to ='/flights'><BsAirplane /> Flights </NavLink>
            </li>

            <li>
                <NavLink to ='/trains'>Trains</NavLink>
            </li>

            <li>
                <NavLink to ='/hotels'>Hotels</NavLink>
            </li>

            <li>
                <NavLink to ='/holipack'>Holiday Packages</NavLink>
            </li>

        </ul>

        </div>
   
  )
}

export default Navbar