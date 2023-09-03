// * Utility Imports
import { useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'

// * Component imports
import Home from './components/Home'
import Search from './components/Search'
import Single from './components/Single'
import NotFound from './components/NotFound'

const App = () => {

  // const type = 'Gin'
  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios.get(`filter.php?i=${type}`)
  //     console.log(data)
  //   }
  //   getData()
  // })

  return (
    <main className='p-2 pb-3'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:id" element={<Single />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
