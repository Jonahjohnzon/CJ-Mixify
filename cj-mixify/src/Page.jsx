import React from 'react'
import Navbar from './Component/Navbar'
import Front from './Component/Frontpage/Front'
import Login from './Component/Login/Login'
import Join from './Component/Join/Join'
import { HashRouter, Routes , Route } from "react-router-dom";
import Signup from './Component/Signup/Signup'

const Page = () => {
  return (
    <HashRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={ <Front/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/search' element={<Join/>}/>
        </Routes>
    </HashRouter>
  )
}

export default Page