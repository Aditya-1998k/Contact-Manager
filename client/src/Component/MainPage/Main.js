import React from 'react';
import Contact from '../ContactPage/Contact';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import "./Main.css"

function Main() {
  return (
    <>
    <div className='main-page'>
        <div className='sidebar'><Sidebar></Sidebar></div>
        <div className='content-part'>
            <div className='nav-part'><Navbar></Navbar></div>
            <div className='contact-part'><Contact></Contact></div>
        </div>
    </div>
    </>
  )
}

export default Main