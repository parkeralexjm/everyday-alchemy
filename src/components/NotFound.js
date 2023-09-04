//! Bootstrap imports
import Button from 'react-bootstrap/Button'

// ! React imports
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='notfound'>
      <h1 className='limelight'>These are not the spirits you&apos;re looking for</h1>
      <Button className='custom-btn' as={Link} to='/' >Return Home</Button>
    </div>
  )
}