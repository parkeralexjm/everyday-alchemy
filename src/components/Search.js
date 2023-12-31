// ! React imports
import axios from 'axios'
import { useState, useEffect } from 'react'

// ! Custom Component imports
import Drinks from './Drinks'
import SpiritSearch from './SpiritSearch'
import CustomSpinner from './CustomSpinner'
import SpiritSelect from './SpiritSelect'

function Search() {
  
  const spiritList = [
    'Bourbon',
    'Brandy',
    'Gin',
    'Non-Alcoholic',
    'Rum',
    'Tequila',
    'Vodka',
    'Whiskey'
  ]
  const [searchValue, setSearchValue] = useState('')
  const [spirit, setSpirit] = useState('')
  const [drinksList, setDrinksList] = useState([])
  const [filteredDrinks, setFilteredDrinks] = useState([])

  useEffect(() => {
    async function getDrinksBySpirit() {
      try {
        if (spirit) {
          if (spirit !== 'Non-Alcoholic') {
            const { data: { drinks } } = await axios.get(`/api/json/v1/1/filter.php?i=${spirit}`)
            setDrinksList(drinks)
          } else {
            const { data: { drinks } } = await axios.get('/api/json/v1/1/filter.php?a=Non_Alcoholic')
            setDrinksList(drinks)
          }
        } else {
          const { data: { drinks } } = await axios.get('/api/json/v1/1/filter.php?c=cocktail') // Load all cocktails if there was no spirit selected c=Cocktail
          setDrinksList(drinks)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getDrinksBySpirit()

  }, [spirit])

  useEffect(() => {
    if (drinksList) {
      const filteredDrinks = drinksList.filter(({ strDrink }) => {
        return strDrink.toLowerCase().includes(searchValue.toLowerCase())
      })
      setFilteredDrinks(filteredDrinks)
    }
  }, [searchValue, drinksList])

  return (
    <>
      <div className='filter-wrapper my-1'>
        <SpiritSelect setSpirit={setSpirit} spiritList={spiritList} />
        <SpiritSearch setSearchValue={setSearchValue} searchValue={searchValue}/>
      </div>
      {drinksList.length > 0 ?
        <Drinks drinksList={filteredDrinks}/>
        :
        filteredDrinks.length > 0 ?
          <h3>No drinks found</h3>
          :
          <CustomSpinner />
      }
    </>
  )
}

export default Search