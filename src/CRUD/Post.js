import React from 'react'
import { useState } from 'react';

function Post() {
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const saveUser=()=>{
    fetch('http://localhost:3000/Users',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name:name,
          username:username,
          email:email
          })
          }).then((res)=> res.json())
          alert("Add User")

  }
  return (
    <div>
      <h1>POST METHOD</h1>
     Name: <input type='text' name='name' value={name} onChange={(e)=>{setname(e.target.value)}}/><br/>
     Username: <input type='text' name='username' value={username} onChange={(e)=>{setusername(e.target.value)}}/><br/>
     Email: <input type='text' name='email' value={email} onChange={(e)=>{setemail(e.target.value)}}/><br/>
      <button type='button' onClick={saveUser}>Save New User</button>
    </div>
  )
}

export default Post
