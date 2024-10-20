import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Main from '../Components/Main/Main'
import Marque from '../Components/Marque/Marque'
import Details from "../Pages/Details"
import { Form } from 'react-router-dom'
import Personal from '../Components/Personal/Personal'
import Project from '../Components/Project/Project'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Main/>
    <Marque/>
    <Details/>
    <Project/>
    <Personal/>

    </>
  )
}

export default Home