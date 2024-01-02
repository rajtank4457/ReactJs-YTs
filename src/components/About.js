import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import './NotFoundcss.css'

function About() {
  return (
    <div>
    <Navbar/>
      <h1 className='h1s'>This is About page</h1>
      <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
      <li className="nav-item"> <Link className="nav-link active" to="/user/prince" style={{fontSize:'30px'}}>Prince Profile</Link> </li>
      <li className="nav-item"><Link className="nav-link active" to="/user/raj" style={{fontSize:'30px'}}>Raj Profile</Link></li>
      <li className="nav-item"><Link className="nav-link active" to="/user/aarati" style={{fontSize:'30px'}}>Aarati Profile</Link> </li>
     
      </ul>
     
    </div>
  )
}

export default About
