import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=' bg-black w-full h-20 text-white fixed z-50'>
        <div className=' flex justify-between w-full items-center pr-20'>
            <div className=' w-full'>
                <img src='/logo.jpeg' className='w-48'/>
            </div>
             <div className=' w-full flex justify-center'>    
                 <ul className=' flex justify-between items-center w-[80%]  font-bold'>
                    <Link to={'/'}><li className=' cursor-pointer hover:text-orange'>HOME</li></Link>
                    <li className=' cursor-pointer hover:text-orange'>COLLECTIONS</li>
                    <li className=' cursor-pointer hover:text-orange'>CONTACT</li>
                </ul></div>
            <div className=' w-full flex justify-end' >
                <ul className=' flex justify-between items-center '>
                <Link to={'/login'}><li className=' cursor-pointer hover:text-orange'>LOGIN</li></Link>
                <li className=' cursor-pointer bg-orange  font-bold px-5 py-2 rounded-xl ml-20 hover:text-orange hover:bg-white'>SIGN UP</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar