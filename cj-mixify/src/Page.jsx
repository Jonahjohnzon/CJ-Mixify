import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import Front from './Component/Frontpage/Front'
import Login from './Component/Login/Login'
import Join from './Component/Join/Join'
import { HashRouter, Routes , Route } from "react-router-dom";
import Signup from './Component/Signup/Signup'


const Page = () => {
  const [log, setlog] = useState(false)
const [show, setshow] = useState(false)
  return (
    <HashRouter>
        <Navbar log={log} setlog={setlog} show={show} setshow={setshow}/>
        <Routes>
        <Route path='/' element={ <Front show={show} setshow={setshow}/>}/>
       <Route path='/login' element={<Login  setlog={setlog}/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/search' element={<Join log={log}/>}/>
        </Routes>
    </HashRouter>
  )
}

export default Page