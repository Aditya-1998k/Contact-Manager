import React from "react";
import "./Import.css"
import {parse} from "papaparse"
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Import(){

    const authToken=localStorage.getItem("authToken")
    const navigate=useNavigate()
    
    return(
        <>
        <button style={{width:"180px"}} type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Import
        </button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 style={{position:"relative", left:"135px"}} class="modal-title" id="exampleModalLabel"><span style={{marginLeft:"5px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus-fill" viewBox="0 0 16 16">
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0z"/>
            </svg></span>
            <strong>Import File</strong></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center"}}>
      Drag and Drop CSV file In Brown Area to upload
      
            <div className="drag" 
            
            
            onDragOver={(e)=>{
                e.preventDefault()
            }}
            onDrop={(e)=>{
                e.preventDefault()

                Array.from(e.dataTransfer.files)
                .filter(file=>file.type==="text/csv")
                .forEach(async (file)=>{

                    const text= await file.text()
                    let {data}=parse(text,{header:true})
                    if(data[data.length-1].name===""){
                        data.pop()
                    }
                    console.log(data)
                    
                axios({
                    url: "http://localhost:3001/contact/add",
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      authorization:authToken
                    },
                    data: data
                }).then((data)=>{
                    console.log(data)
                }).catch((err)=>{
                    console.log(err)
                })
                navigate("/contact")
                alert("Contact Added Successfully")
                window.location.reload()
            })
            }}  
            style={{height:"100px", width:"100%", backgroundColor:"white"}} 
            >
                
            </div>
        </div>
        <div class="modal-footer">
        <button style={{width:"70px" ,textAlign:"center"}} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
        
            
   
        </>
    )
}
export default Import