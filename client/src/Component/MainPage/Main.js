import React from 'react';
import Contact from '../ContactPage/Contact';
import Sidebar from '../Sidebar/Sidebar';
import "./Main.css"

function Main() {
  return (
    <>
    <div className='main-page'>
        <div className='sidebar'><Sidebar></Sidebar></div>
        <div className='content-part'>
            <div className='contact-part'><Contact></Contact></div>
        </div>
    </div>
    </>
  )
}

export default Main