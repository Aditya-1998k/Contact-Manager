import React, { useState } from 'react';
import axios from "axios";
import "../Login/Login.css";
import {useNavigate} from "react-router-dom"

function Signup() {
  const Navigate=useNavigate()
  const [signupdata, setsignupdata]=useState({});

  const handleInputchange=(e,id)=>{
    setsignupdata({...signupdata,[id]:e.target.value})
    console.log(signupdata);
  }

  const handlesubmit=()=>{
    if(signupdata.password===signupdata.confirmpassword){
      axios({
        method:"POST",
        url:"http://localhost:3001/user/signup",
        data:signupdata
      }).then((res)=>{
        console.log(res)
        Navigate("/")
      }).catch((err)=>{
        console.log(err)
      })
    }else{
      alert("password and confirm Password is different")
    }
  }

  return (
    <>
    <div className="login-main">
      <div className="login-middle">
          <div className="login-contact">
              <div>
                <h1>Logo</h1>
                <strong>Create New Account</strong>
              </div>
              <div style={{margin:"10px",marginTop:"30px"}}>
              <input class="form-control" placeholder='Email' name='email' id='email' onChange={(e)=>handleInputchange(e,"email")}></input>
              </div>
              <div style={{margin:"10px"}}>
                <input class="form-control" placeholder='Password' name='password' id='password' onChange={(e)=>handleInputchange(e,"password")}></input>
              </div>
              <div style={{margin:"10px"}}>
                <input class="form-control" placeholder='Confirm Password' name='confirmpassword' id='confirmpassword' onChange={(e)=>handleInputchange(e,"confirmpassword")}></input>
              </div>
              <div style={{margin:"10px",marginTop:"40px"}}>
              <button style={{textAlign:"center"}}  type="button" class="btn btn-primary" onClick={()=>handlesubmit()}><strong style={{textAlign:"center", position:"relative",left:"120px"}}>Signup</strong></button>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Signup