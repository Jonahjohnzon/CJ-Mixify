import React from 'react'
import Navbar from './Component/Navbar'
import Front from './Component/Frontpage/Front'
import Login from './Component/Login/Login'
import { HashRouter, Routes , Route } from "react-router-dom";

const Page = () => {
  return (
    <HashRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={ <Front/>}/>
       <Route path='/login' element={<Login/>}/>
        </Routes>
    </HashRouter>
  )
}

export default Page