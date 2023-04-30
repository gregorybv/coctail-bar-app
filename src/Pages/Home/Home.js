import React from "react"
import "./home.css"
import CoctailsList from "../../Components/CoctailList/CoctailsList"
import SearchForm from "../../Components/SearchForm/SearchForm"
import { useGlobalContext } from "../../Context/context"

const Home = () => {
  const { onFilterChange, filters, uniqueCategories } = useGlobalContext()

  return (
    <div className='container'>
      {console.log("render HOME")}
      <div className='home'>
        <h3 className='home__title'>Search coctails</h3>
        <SearchForm />
        <div className='home__content'>
          {/* Sort by alcoholic */}
          <div className='home__block'>
            <p className='home__text'>Sort by alcohol:</p>
            <select
              className='home__select'
              value={filters.alcohol}
              name='alcohol'
              onChange={onFilterChange}
            >
              <option>All</option>
              <option>Alcoholic</option>
              <option>Non alcoholic</option>
            </select>
          </div>
          <div className='home__block'>
            {/* Sort by category */}
            <p className='home__text'>Sort by category:</p>
            <select
              className='home__select'
              value={filters.category}
              name='category'
              onChange={onFilterChange}
            >
              <option>All</option>
              {uniqueCategories?.map((category, index) => {
                return <option key={index}> {category}</option>
              })}
            </select>
          </div>
        </div>
      </div>
      <CoctailsList />
    </div>
  )
}

export default Home
