import React, { useState } from 'react';
import axios from "axios"

function Signup() {

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
      }).catch((err)=>{
        console.log(err)
      })
    }else{
      alert("password and confirm Password is different")
    }
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
    <div>
      <label htmlFor='confirmpassword' >Confirm Password</label>
      <input name='confirmpassword' id='confirmpassword' onChange={(e)=>handleInputchange(e,"confirmpassword")}></input>
    </div>
    <button  type='submit' onClick={()=>handlesubmit()}>Submit</button>
    </>
  )
}

export default Signup