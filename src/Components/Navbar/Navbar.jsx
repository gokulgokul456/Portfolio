import React from 'react'
import "./Navbar.css"
import Nav from "../../Assets/images/Nav.png"
import { FaArrowRight } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react';

const Navbar = () => {
  const [first, setfirst] = useState(false)

function opendiv() {
    setfirst(!first)
    
    
  }
  return (
    <>
    <div className='Nav-dt'>
      <div className='Nav1'>
      <img src={Nav} alt="" />
     
      </div>
       
      <div className={first?"nav12":"Nav2"}>
      <h5>HOME</h5>
      <h5>ABOUT ME</h5>
      <h5>PROJECTS</h5>
      <h5>CONTACT</h5>
      <div className='btn'>
      <button>HIRE ME <span><FaArrowRight /></span></button>
      </div>
      </div>
        <CiMenuBurger onClick={opendiv} className='ch' />
      </div>
    </>
  )
}

export default Navbar

