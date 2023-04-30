import React from "react"
import './searchform.css'
import { useGlobalContext } from "../../Context/context"
const SearchForm = () => {
  const { term, setTerm } = useGlobalContext()

  return (
    <>
      <div className="search">
        <form className="search__form">
          <input
            className='search__input'
            type='search'
            placeholder='Search...'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </form>
      </div>
    </>
  )
}

export default SearchForm
