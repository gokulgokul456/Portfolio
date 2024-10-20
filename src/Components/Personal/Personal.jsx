import React from 'react'
import './Personal.css'
import { FaArrowRight } from "react-icons/fa";
import { LuBadgeHelp } from "react-icons/lu";
import icn from '../../Assets/images/icon.jpg'
import { FaStarOfLife } from "react-icons/fa6";




const Personal = () => {
  return (
    <>
    <div className='Cont'>
        <p>Contact</p>
    </div>
    <div className='cont-1'>
    <div className='cont-2'>
        <p>Let's level up your brand, together</p>
        <button>BECOME A CLIENT <span><FaArrowRight /></span></button>
    </div>

<div className='cont-3'>
    <div className='cont-3-1'>
        <div className='cont-3-1-1'>
        <p>Bringing together strategy, creativity and technology to build digital products, websites, apps and campaigns that make my clients and agency partners look good.</p>
        </div>

        <div className='cont-3-1-2'>
        <p><span><LuBadgeHelp /></span> Not sure which technology to choose?</p>
        <p><span><LuBadgeHelp /></span> Need advice on the next steps?</p>
        <p><span><LuBadgeHelp /></span> Hesitating on how to plan the execution?</p>
    </div>
    <div className='cont-3-1-3'>
        <div className='cont-3-1-3-1'>
        {/* <img src={icn} alt="" /> */}
        <p>Gokul</p>
        <p>Web-Developer / Freelancer</p>
    </div>
    </div>
    </div>
    <div className='cont-3-2'>
        <div className='cont-3-2-1'>
            <p>Let’s make your project glow</p>
        </div>

        <div className='cont-3-2-2'>
        <div className='cont-3-2-2-1'>
            <p>First Name <span><FaStarOfLife /></span></p>
            <input type="text" />
        </div>
        <div className='cont-3-2-2-2'>
            <p>Last Name <span><FaStarOfLife /></span></p>
            <input type="text" />
            </div>
        </div>

        <div className='cont-3-2-3'>
           <p>Email <span><FaStarOfLife /></span></p>
           <input type="email" />
        </div>

        <div className='cont-3-2-4'>
            <p>Message</p>
            <textarea name="" id="" placeholder='Something about your great idea'></textarea>
        </div>
        <div className='cont-3-2-5'>
        <button>SUBMIT THE REQUEST <span><FaArrowRight /></span></button>
        </div>
    </div>
    </div>

    </div>
    </>
  )
}

export default Personal