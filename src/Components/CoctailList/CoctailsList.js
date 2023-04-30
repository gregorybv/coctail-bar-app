import React, { useEffect } from "react"
import "./coctaillist.css"
import SingleCoctail from "../SingleCoctail/SingleCoctail"
import styled from "styled-components"
import { useGlobalContext } from "../../Context/context"
import Loader from "../Loader/Loader"

const CoctailsList = () => {
  const { loading, term, fetchData, filteredData } = useGlobalContext()

  useEffect(() => {
    fetchData(term)
  }, [term])

  if (loading) {
    return <Loader />
  }

  if (filteredData?.length < 1) {
    return (
      <div className='list'>
        <h1 className='list__title'>Not found</h1>
      </div>
    )
  }
  return (
    <div className='list'>
      {filteredData?.map((coctail) => {
        return <SingleCoctail key={coctail.idDrink} coctail={{ ...coctail }} />
      })}
    </div>
  )
}

export default CoctailsList
