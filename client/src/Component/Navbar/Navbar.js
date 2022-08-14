import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

function Navbar() {
  const [user,setuser]=useState()
  
  const authToken=localStorage.getItem("authToken")
  useEffect(()=> {
    axios({
        method:"GET",
        url: "http://localhost:3001/contact/get",
        headers:{
          authorization:authToken
        }
    }).then((res)=> {
        console.log(res.data[0].user_email);
        setuser(res.data[0].user_email)
    }).catch((err)=> {
        console.log(err)
    })
}, [authToken])
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>     
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit" style={{width:"70px",marginLeft:"5px"}}>Search</button>
          <button className="btn btn-info" type="submit"style={{marginLeft:"5px"}} ><span><svg style={{marginLeft:"5px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg></span><span style={{marginLeft:"5px"}}>{user}</span></button>
        </form>
        </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar