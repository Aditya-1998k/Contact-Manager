import React, { useState } from 'react';
import axios from "axios";
import "./Login.css";
import {useNavigate, Link} from "react-router-dom";


function Login() {

  const [logindata, setlogindata]=useState({});
  const Navigate=useNavigate();

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
      Navigate("/contact")
    }).catch((err)=>{
      console.log(err)
      alert("Not a valid user")
    })
  }
  return (
    <>
    <div className="login-main">
      <div className="login-middle">
          <div className="login-contact">
              <div>
                <h1>Logo</h1>
                <strong>Enter Your Credential to access your Account</strong>
              </div>
              <div style={{margin:"10px",marginTop:"30px"}}>
              <input class="form-control"  placeholder='Email' name='email' id='email' onChange={(e)=>handleInputchange(e,"email")}></input>
              </div>
              <div style={{margin:"10px"}}>
                <input class="form-control" type="password" placeholder='Password' name='password' id='password' onChange={(e)=>handleInputchange(e,"password")}></input>
              </div>
              <div style={{margin:"10px",marginTop:"40px"}}>
              <button style={{textAlign:"center"}}  type="button" class="btn btn-primary" onClick={()=>handleLogin()}><strong style={{textAlign:"center", position:"relative",left:"120px"}}>Login</strong></button>
              </div>
              <div style={{margin:"10px", marginTop:"10px"}}>
              <button style={{textAlign:"center"}}  type="button" class="btn btn-outline-success"><strong style={{textAlign:"center", position:"relative",left:"120px"}}><Link to="/signup" style={{textDecoration:"none",color:"black"}}>SignUP</Link></strong></button>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Login