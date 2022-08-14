import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Contact.css";

function Contact() {

    const [searchTerm, setSearchTerm]=useState("");
    const [contact, setContact]=useState([]);
    const [user, setuser]=useState()
    const authToken=localStorage.getItem("authToken")
    useEffect(()=> {
      axios({
          method:"GET",
          url: "http://localhost:3001/contact/get",
          headers:{
            authorization:authToken
          }
      }).then((res)=> {
          console.log(res);
          setContact(res.data)
          setuser(res.data[0].user_email)
      }).catch((err)=> {
          console.log(err)
      })
  }, [authToken])
    const handleDelete=(id)=>{
      axios({
        method:"POST",
        url:"http://localhost:3001/contact/delete",
        headers:{
        },
        data:{id:id}
      }).then((res)=>{
        alert("data deleted successfully")
        res.status(200).send("deleted")
      }).catch((err)=>{
        console.log(err)
      })
      window.location.reload()
    }
  return (
    <>
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <h3>Total Contact</h3>
          </li>     
        </ul>
        <form className="d-flex" role="search">
          <input  placeholder="Write Email To Search..." className="form-control me-2" type="search" aria-label="Search" onChange={(e)=>{setSearchTerm(e.target.value)}}/>
          <button className="btn btn-info" type="submit"style={{marginLeft:"5px"}} ><span><svg style={{marginLeft:"5px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg></span><span style={{marginLeft:"5px"}}>{user}</span></button>
        </form>
        </div>
        </div>
        </nav>
    </div>
        <table class="table">
              <thead class="table">
                  <th><input type="checkbox"></input></th>
                  <th><strong>Name</strong></th>
                  <th><strong>Designation</strong></th>
                  <th><strong>Company</strong></th>
                  <th><strong>Industy</strong></th>
                  <th><strong>Email</strong></th>
                  <th><strong>Phone Number</strong></th>
                  <th><strong>Country</strong></th>
                  <th><strong>Action</strong></th>
              </thead>
              {contact.filter((val)=>{ 
                if(val.email.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }else if(searchTerm===""){
                  return val
                }
              }).map((data)=>{
                return(
                  <>
                  <tbody style={{margin:"2px"}}>
                    <td><input type="checkbox"></input></td>
                    <td><strong>{data.name}</strong></td>
                    <td><strong>{data.designation}</strong></td>
                    <td><strong>{data.company}</strong></td>
                    <td><strong>{data.industry}</strong></td>
                    <td><strong>{data.email}</strong></td>
                    <td><strong>{data.phonenumber}</strong></td>
                    <td><strong>{data.country}</strong></td>
                    <td><strong><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                    </svg></span><span><button style={{textDecoration:"none",border:"none",width:"40px"}} onClick={()=>handleDelete(data._id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg></button></span></strong>
                    </td>
                  </tbody>
                  </>
                )
              })}
              
        </table>
        </>
  )
}

export default Contact