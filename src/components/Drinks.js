import { Card, Col, Container, Row, Spinner, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Pagination } from 'react-bootstrap'

export default function Drinks({ drinksList }) {
  const limit = 8
  const [pageData, setPageData] = useState([])
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(1)

  // ! Pagination
  // eslint-disable-next-line prefer-const
  const items = []
  for (let number = 1; number <= Math.ceil(drinksList.length / 8); number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => {
        pageClick(number)
      }}>
        {number}
      </Pagination.Item>
    )
  }

  function pageClick(number) {
    setCount((number - 1) * 8)
    setActive(number)
  }

  function drinkRoute() {

  }

  useEffect(() => {
    if (drinksList) {
      setActive(1)
      setCount(0)
    }
  }, [drinksList])

  useEffect(() => {
    const eightDrinks = drinksList.filter((drink, index) => {
      return index >= count && index < (count + limit)
    })
    setPageData(eightDrinks)
    console.log(eightDrinks)
  }, [drinksList, count])

  return (
    <section id='drinks'>
      {
        drinksList.length > 0 ?
          <>
            <Pagination className='mt-3' size={(Math.ceil(drinksList.length / 8) > 8 && 'sm')} >{items}</Pagination>
            <Container fluid>
              <Row>
                {
                  pageData.map(({ idDrink, strDrink, strDrinkThumb })=> {
                    return (
                      <Col key={idDrink} sm='6' md='3' className='drink-col-item'>
                        <Card className="bg-dark text-white" border='secondary'>
                          <Card.Img src={strDrinkThumb} alt={strDrink} />
                          <Card.ImgOverlay>
                            <Card.Title className='title m-0 trochut'>{strDrink}</Card.Title>
                          </Card.ImgOverlay>
                          <Link to={idDrink} className='stretched-link'></Link>
                        </Card>
                      </Col>
                    )
                  })
                }
              </Row>
            </Container>
            { window.innerWidth < 576 &&
              <Pagination className='mt-3' size={(Math.ceil(drinksList.length / 8) > 8 && 'sm')} >{items}</Pagination>
            }
          </>
          :
          <Spinner />
      }
    </section>
  )
}
