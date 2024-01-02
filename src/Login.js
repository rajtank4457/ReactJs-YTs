import React from 'react'
import { useState } from 'react';

function Login() {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const [passErr, setpassErr] = useState();
  const [useErr, setuseErr] = useState("");
  function handleLogin(e){
    e.preventDefault(e)
    if(user.length<3 || password.length<3 )
    {
    alert("Type Correct Values")
    }
    else{
      alert("Hello ! "+user)
    }

  };
  function useHandler(e){
     //  console.log(e.target.value.length);
     let item=e.target.value
     if (item.length<3){
      setuseErr(true)
      }else{setuseErr(false)}
      
      setuser(item)

  }
  function passErrsHandle(e){
    //  console.log(e.target.value.length);
    let item=e.target.value
    if (item.length<3){
      setpassErr(true)
     }else{setpassErr(false)}
     
     setpassword(item)
     

 }
 
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleLogin}>
      <input type="text" placeholder='Enter User Id' onChange={useHandler}/>{useErr?<span>User not valid</span>:""}<br/>
      <input type="text" placeholder='Enter User password' onChange={passErrsHandle}/>{passErr?<span>Password not valid</span>:""}<br/>
     
      <button type="submit">Login</button>

      </form>
    </div>
  )
}

export default Login;
