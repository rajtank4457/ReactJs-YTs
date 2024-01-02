import React from 'react'

function Users(props) {
 
  return (
    <div style={{backgroundColor:"#08ff08"}}>
      <h1>Name: {props.name} &#128540;</h1>
      <h1>age: {props.age}</h1>
      
    </div>
  )
}

export default Users
