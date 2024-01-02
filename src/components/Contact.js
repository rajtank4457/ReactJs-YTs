import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Contact() {
  return (
    <div className='h1s'>
      <h1>This Contact Page</h1>
      <Link  to="company">Company</Link><br></br>
      <Link to="channel">Channel</Link><br></br>
      <Link to="other">Other</Link><br></br>
      <Outlet></Outlet>
    </div>
  )
}

export default Contact
