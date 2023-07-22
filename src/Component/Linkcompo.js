import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Linkcompo() {
  return (
    <div className="container">
    <div className='Link'>
      <Link to={'/'}>Home</Link>
      <Link to={'/student'}>Student</Link>
      <Link to={'/contact'}>contact</Link>
    </div>
    </div>
  )
}

export default Linkcompo
