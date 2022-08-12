import React, { useState } from 'react';
import axios from "axios"

function Login() {

  const [logindata, setlogindata]=useState({});

  const handleInputchange=(e,id)=>{
    setlogindata({...logindata,[id]:e.target.value})
    console.log(logindata);
  }

  const handleLogin=()=>{
    axios({
      method:"POST",
      url:"http://localhost:3001/user/login",
      data:logindata
    }).then((res)=>{
      localStorage.setItem("authToken", res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <>
    <div>
      <label htmlFor='email' >Email</label>
      <input name='email' id='email' onChange={(e)=>handleInputchange(e,"email")}></input>
    </div>
    <div>
      <label htmlFor='password' >Password</label>
      <input name='password' id='password' onChange={(e)=>handleInputchange(e,"password")}></input>
    </div>
    <button  type='submit' onClick={()=>handleLogin()}>Login</button></>
  )
}

export default Login