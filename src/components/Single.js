//! Bootstrap imports
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

// ! React imports
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// ! Custom Component imports
import CustomSpinner from './CustomSpinner'

function Single() {
  const [drink, setDrink] = useState({})
  const [ingredients, setIngredients] = useState([])

  const { id: drinkId } = useParams()
  
  useEffect(() => {
    async function getDrinkData() {
      try {
        const { data } = await axios.get(`/api/json/v1/1/lookup.php?i=${drinkId}`)
        const { drinks: [{ 
          strIngredient1, 
          strIngredient2, 
          strIngredient3, 
          strIngredient4, 
          strMeasure1, 
          strMeasure2, 
          strMeasure3, 
          strMeasure4,
        }] } = data
        setDrink(data.drinks[0])
        setIngredients([
          { 'ingredient': strIngredient1, 'measure': strMeasure1 },
          { 'ingredient': strIngredient2, 'measure': strMeasure2 },
          { 'ingredient': strIngredient3, 'measure': strMeasure3 },
          { 'ingredient': strIngredient4, 'measure': strMeasure4 }
        ])
      } catch (error) {
        console.log(error)
      }
    }
    drink && ingredients && getDrinkData()
  }, [])

  return (
    <>
      { 
        ingredients.length > 0 ? 
          <Container className='drink-container'>
            <Row className='info-row'>
              <Col className='drink-background' md='6' style={{ backgroundImage: `url(${drink.strDrinkThumb})` }}>
              </Col>
              <Col md='6'>
                <div className='drink-content'>
                  <h1 className='text-center'>{drink.strDrink}</h1>
                  <h3 className='text-left font-weight-bold'>Instructions</h3>
                  <p className='text-center mb-4'>{drink.strInstructions}</p>
                  <Button className='custom-btn' as={Link} to='/search'>Back to search</Button>
                </div>
              </Col>
            </Row>
            <Row className='ingredient-row'>
              {/* do a map of the ingredients */}
              { ingredients.map(({ ingredient, measure }, idx ) => {
                if (ingredient) {
                  return (
                    <Col key={idx} md='3' className='ingredients-container mt-2'>
                      <div>
                        <h5>{ingredient}</h5>
                        {measure && <h5>{measure}</h5>}
                      </div>
                    </Col>  
                  )
                }
              })}
            </Row>
          </Container>
          :
          <CustomSpinner />
      }
    </>
  )
}

export default Single