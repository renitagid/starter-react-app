import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/home.css"

const Header = () => {
  return (
    <div><NavLink to={"/"} className="nav-link">
      <h1 className="h1home">Projects by Renita</h1>
  </NavLink></div>
  )
}

export default Header