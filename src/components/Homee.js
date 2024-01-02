import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

function Homee() {
    const navigate=useNavigate()
  return (
    <div>
    <Navbar/>
    
    <h1 className='h1s'>Abe Sale Shanky Dusre Page pe jana</h1>
    <button onClick={()=>navigate('/home')}>Go to Home Page</button>
    <button onClick={()=>navigate('/about')}>Go to About Page</button>
    </div>
  )
}

export default Homee
