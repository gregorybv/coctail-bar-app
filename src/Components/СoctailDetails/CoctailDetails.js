import React, { useEffect } from "react"
import "./coctaildetails.css"
import { useNavigate, useParams } from "react-router-dom"
import { useGlobalContext } from "../../Context/context"
import Loader from "../Loader/Loader"

const CoctailDetails = () => {
  const { id } = useParams()
  const { SingleCoctail, fetchSingleCoctail, loading } = useGlobalContext()
  const navigate = useNavigate()
  useEffect(() => {
    fetchSingleCoctail(id)
  }, [])

  if (loading) {
    return (
      <div className='container'>
        <Loader />
      </div>
    )
  }
  return (
    <div className='details container'>
      <button className='details__btn' onClick={() => navigate(-1)}>
        Back To Home
      </button>
      {SingleCoctail?.map((coctail) => {
        const {
          strDrinkThumb,
          idDrink,
          strDrink,
          strCategory,
          strAlcoholic,
          strGlass,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
          strInstructions,
        } = coctail

        const ings = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
        ]
        return (
          <div key={idDrink} className='details__item'>
            <img className='details__image' src={strDrinkThumb} alt='coctail' />
            <div className='details__block'>
              <h4 className='details__text'>
                <span className='details__span'> Name:</span> {strDrink}
              </h4>

              <h4 className='details__text'>
                <span className='details__span'> Category:</span> {strCategory}
              </h4>
              <h4 className='details__text'>
                <span className='details__span'> {strAlcoholic}</span>{" "}
              </h4>
              <h4 className='details__text'>
                <span className='details__span'> Glass:</span> {strGlass}
              </h4>
              <h4 className='details__text'>
                <span className='details__span'>Ingredients:</span>
                {ings?.map((i, index) => {
                  return i ? <span key={index}> {i},</span> : null
                })}
              </h4>
              <h4 className='details__text'>
                <span className='details__span'> Instructions:</span>{" "}
                {strInstructions}
              </h4>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CoctailDetails
