import React from 'react'
import './About.css'
import img from "../../Assets/images/own.png"
import { LuBadgeCheck } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";




const About = () => {
  return (
    <>
    <div className='name'>
        <h6>About Me</h6>
    </div>

    <div className='About'>

    <div className='lft'>

      <img src={img} alt="" />

    </div>

    <div className='ryt'>

    <div className='ryt-1'>

    <p>Hi there! I'm Gokul, a passionate web/app developer based in the state of INDIA. I specialize in creating memorable and emotional websites, digital experiences, & native apps.</p>

    </div>

    <div className='ryt-2'>

    <p>How we can work together</p>
    
    </div>

    <div className='ryt-3'>
      <p><span><LuBadgeCheck /></span> Brief/Short Details</p>
      <p><span><LuBadgeCheck /></span> Questions & Answers</p>
    </div>

    <div className='ryt-4'>
      <p><span><LuBadgeCheck /></span>  Providing Quote</p>
      <p><span><LuBadgeCheck /></span>  Get Started</p>
    </div>

    <div className='ryt-btn'>
    <button>Start a Project <span><FaArrowRight /></span></button>
    </div>
      
    </div>

    </div>
    </>
  )
}

export default About