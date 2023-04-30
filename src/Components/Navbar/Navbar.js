import React from "react"
import "./navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__item'>
        <Link to='/'>
          <h2 className='navbar__title'>BG Bar🍸</h2>
        </Link>
        <ul className='navbar__list'>
          <Link to='/' className='navbar__link'>
            Home
          </Link>
          <Link to='/about' className='navbar__link'>
            About
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
