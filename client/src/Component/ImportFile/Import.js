import React from "react";
import { useEffect,useState } from "react";
import "./import.css"
import {parse} from "papaparse"
import axios from "axios";

function Import(){
    // const [highlighted, sethighlighted]=useState(false)
    const [contacts,setcontacts]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/contact/add").then((res)=>{
            console.log(res.data)
           setcontacts(...contacts, res.data.contacts)
           console.log(contacts[0].name)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return(
        <div>
            <h1>contact import</h1>
            <div className="drag" 
            
            // onDragEnter={()=>{sethighlighted(true)}}
            // onDragLeave={()=>{
            //     sethighlighted(false)
            // }}
            onDragOver={(e)=>{
                e.preventDefault()
            }}
            onDrop={(e)=>{
                e.preventDefault()
                // console.log((e.dataTransfer.files))
                // sethighlighted(false)

                Array.from(e.dataTransfer.files)
                .filter(file=>file.type==="text/csv")
                .forEach(async (file)=>{
                    // console.log(file)
                    const text= await file.text()
                    let {data}=parse(text,{header:true})
                    if(data[data.length-1].name===""){
                        data.pop()
                    }
                    console.log(data)
                    // const result=parse(text, {header:true})
                    // setcontacts((existing)=>[...existing, ...result.data])
                    setcontacts([...data])
                axios({
                    url: "http://localhost:3001/contact/add",
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    data: data
                }).then((data)=>{
                    console.log(data)
                }).catch((err)=>{
                    console.log(err)
                })
            })
            }}   
            >
                Drop here
            </div>
            <>
            
            </>
            
        </div>
    )
}
export default Import