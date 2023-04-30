import React from "react"
import "./singlecoctail.css"
import { Link } from "react-router-dom"

const SingleCoctail = ({ coctail }) => {
  return (
    <div className='single'>
      <img
        className='single__image'
        src={coctail.strDrinkThumb}
        alt='coctail'
      />
      <div className='single__content'>
        <h3>{coctail.strDrink}</h3>
        <p>
          <span className='single__menu'> Category:</span>
          {coctail.strCategory}
        </p>
        <p>
          <span className='single__menu'> Glass:</span> {coctail.strGlass}
        </p>
        <p>
          <span className='single__menu'> {coctail.strAlcoholic}</span>
        </p>
        <Link to={`/${coctail.idDrink}`} className='single__btn'>
          Details
        </Link>
      </div>
    </div>
  )
}

export default SingleCoctail
