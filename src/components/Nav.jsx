import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='div'>
    <p className='p1'> <Link to={'/'}>Home</Link></p>
    <p className='p2'><Link to={'/blue'}>Blue</Link></p>
    <p className='p3'><Link to={'/red'}>Red</Link></p>
   </div>
     
  )
}
