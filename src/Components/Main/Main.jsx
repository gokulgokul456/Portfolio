import React from 'react'
import './Main.css'
import { FaArrowRight } from "react-icons/fa";
import logo from "../../Assets/images/own.png"
import { useTypewriter, Cursor} from 'react-simple-typewriter'



const Main = () => {
  const [text] = useTypewriter({
    words: ['Web-Developer','Freelancer',],
    loop:{},
    typeSpeed:100 ,
    deleteSpeed: 40
  })
  return (
    <>
    <div className='Bio'>
        <div className='left'>
        <div className='Bio1'>
            <h1 style={{color:" rgb(253,96,53)"}}>HELLO I'M</h1>
        </div>
        <div className='Bio2'>
            <h1>GOKUL</h1>
        </div>
        <div className='Bio3'>
            <p>I'am a</p>
        <span style={{fontWeight:'bold',color:'rgb(255,94,58)'}}>
          {text}
        </span>

        </div>
        <div className='Bio4'>
          <p>A passionate web/app developer based in the state of INDIA.I specialize in creating memorable and emotional websites, digital experiences, & native apps.</p>
        </div>
        <div className='CV'>
        <button><a href="">DOWNLOAD CV</a><span><FaArrowRight /></span></button>
        </div>
        </div>
        <div className='right'>
          <img src={logo} alt="" />
          <button className='bottom'>Web Developer</button>
          <button className='top'>Freelancer</button>
        </div>
    </div>    
    </>
  )
}

export default Main