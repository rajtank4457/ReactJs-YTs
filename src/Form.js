import React from 'react'
import { useState } from 'react';

function Form() {
  const [name, setname] = useState("");
  const [paint, setpaint] = useState(false);
  return (
    <div>
      <h1>Form </h1>
      
     
      Name <input type="text" value={name} name="name" onChange={(e) => setname(e.target.value) } />
      <button onClick={() => setpaint(true)}>Chane color name</button>
      <button onClick={() => setpaint(false)}>Hide</button>
      {
        paint ?
          <h1>{name}</h1>
          :
          null
      }
     
    </div>
  )
}

export default Form;
