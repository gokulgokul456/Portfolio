import React from 'react'
import './Project.css'
import logo from "../../Assets/images/project.jpg"

const Project = () => {
  return (
    <>
    <div className='Cont'>
        <p>Projects</p>
    </div>
    <div className='parent'>
      <div className='pro1'> 
        <img src={logo} alt="" />
        <a href="https://netflix-sand-two.vercel.app/">Netflix (Clone)</a>
      </div>
      <div className='pro2'> 
        

      </div>
      



    </div>

    </>
  )
}

export default Project