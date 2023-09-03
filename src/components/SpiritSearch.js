import { useState } from 'react'
import Form from 'react-bootstrap/Form'

function SpiritSearch({ searchValue, setSearchValue }) {

  function handleChange(e) {
    setSearchValue(e.target.value)
  }

  return (
    <input type='text' placeholder='Search by name' value={searchValue} onChange={handleChange}></input>
  )
}

export default SpiritSearch