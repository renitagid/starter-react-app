import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div><NavLink to={"/"} className="nav-link">
    Return Home
  </NavLink></div>
  )
}

export default Header