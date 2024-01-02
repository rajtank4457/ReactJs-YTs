import React from 'react'
import { useSearchParams } from 'react-router-dom'
function Filter() {
    const [searchparams, setsearchparams] = useSearchParams();
    console.log(searchparams.get('age'));
    const age=searchparams.get('age');
    const city=searchparams.get('city');
      return (
    <div>
      <h1 className='h1s'>This is Filter Page</h1>
      <h3>{age}</h3>
      <h3>{city}</h3>
      <button onClick={()=>setsearchparams({age:30,city:'vapi'})}>Set Age and city </button>
    </div>
  )
}

export default Filter
