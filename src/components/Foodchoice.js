import React from 'react'
import { NavLink } from 'react-router-dom'


function Foodchoice({choices, setChoices}) {
  return (
    <div>
        <NavLink to="/">Login Page</NavLink> 
        <NavLink to="/orders">Order List</NavLink> 
    </div>
  )
}

export default Foodchoice