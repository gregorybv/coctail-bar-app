import React from "react"
import "./footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className='footer'>
      <Link to='/'>
        <h2 className='footer__title'>BG Bar🍸</h2>
      </Link>
      <ul className='footer__list'>
        <Link to='/' className='footer__link'>
          Home
        </Link>
        <Link to='/about' className='footer__link'>
          About
        </Link>
      </ul>
    </footer>
  )
}

export default Footer
