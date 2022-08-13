import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Contact.css"

function Contact() {
    const [contact, setContact]=useState([]);
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
      }).catch((err)=> {
          console.log(err)
      })
  }, [])
    
  return (
    <>
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
              {contact.map((data)=>{
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
                    <td><strong><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg></strong>
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