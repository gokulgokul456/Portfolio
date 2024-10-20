import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Details from '../Pages/Details'
import About from '../Components/About/About'

const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/About' element={<About/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router