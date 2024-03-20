import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";



const Navbar = ({show, setshow, log, setlog}) => {
const navigate = useNavigate()
   
    const  [slide, setslide] = useState(true)
    useEffect(()=>{
        const storedData = localStorage.getItem('myData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setlog(parsedData.auth)
          }
          else
          {
            setlog(false)
          }
    },[log])

    const Logout = () =>{
        localStorage.clear();
        navigate('/login')
        setlog(false)
    }
    function scrollToBottom() {
      setslide(!slide)
      window.scrollTo({
        top: 10000,
        behavior: 'smooth'
    });
  }
  return (
    <> {slide || <div className=" xl:hidden  fixed top-0 z-50 min-h-[70vh] w-[100vw]   bg-black">
    <div className=" w-full flex flex-col items-center">
      <div className=" flex justify-between w-full items-center px-4 py-4"><div className=" flex items-end mr-10 xl:mr-20">
          <img src="/logo.jpeg" className=" w-28 sm:w-24 cursor-pointer " onClick={()=>{router.push('/')}}/>
        </div>
        <div onClick={()=>setslide(!slide)} className="text-4xl text-white"><IoMenu /></div>
        </div>
        <div>
        <div className=' w-full flex  justify-center text-white'>    
                 <ul className=' text-center    font-bold'>
                    <Link to={'/'} onClick={()=>setslide(!slide)}><li className=' cursor-pointer hover:text-orange mb-10'>HOME</li></Link>
                    <Link to={'/search'} onClick={()=>setslide(!slide)}><li className=' cursor-pointer hover:text-orange mb-10'>SEARCH</li></Link>
                    <li className=' cursor-pointer hover:text-orange mb-10' onClick={scrollToBottom}>CONTACT</li>
                </ul></div>
        <div className=' w-full flex    justify-end' >
                {log? <ul className=' flex justify-between items-center '>
                <div to={'/login'}><li className=' cursor-pointer hover:bg-orange hover:text-white mr-10  font-bold px-5 py-2 rounded-xl  text-orange bg-white' onClick={()=>{setshow(!show)
                setslide(!slide)
                navigate('/')}}>FAVOURITES</li></div>
                <div ><li className=' cursor-pointer bg-orange  font-bold px-5 py-2 rounded-xl hover:text-orange hover:bg-white' onClick={Logout}>LOGOUT</li></div>
                </ul>:
                <ul className=' flex justify-between items-center '>
                <Link to={'/login'} onClick={()=>setslide(!slide)}><li className=' cursor-pointer text-white hover:text-orange mr-10'>LOGIN</li></Link>
                <Link to={'/signup'} onClick={()=>setslide(!slide)}><li className=' cursor-pointer bg-orange  font-bold px-5 py-2 rounded-xl hover:text-orange hover:bg-white'>SIGN UP</li></Link>
                </ul>}
        
            </div>
        </div>
    </div>
        </div>}
    {slide &&<nav className=' bg-black w-full h-20  text-white fixed z-50'>
        <div className=' flex justify-between w-full items-center pr-5 xl:pr-20'>
            <div className=' w-full'>
            <Link to={'/'}><img src='/logo.jpeg' className='w-48'/></Link>
            </div>
             <div className=' w-full xl:flex hidden justify-center'>    
                 <ul className=' flex justify-between items-center w-[70%]  font-bold'>
                    <Link to={'/'}><li className=' cursor-pointer hover:text-orange'>HOME</li></Link>
                    <Link to={'/search'}><li className=' cursor-pointer hover:text-orange'>SEARCH</li></Link>
                    <li className=' cursor-pointer hover:text-orange' onClick={scrollToBottom}>CONTACT</li>
                </ul></div>
            <div className=' w-full xl:flex hidden  justify-end' >
                {log? <ul className=' flex justify-between items-center '>
                <div to={'/login'}><li className=' cursor-pointer hover:bg-orange hover:text-white  font-bold px-5 py-2 rounded-xl ml-20 text-orange bg-white' onClick={()=>{
                  
                  setshow(!show)
                  navigate('/')}}>FAVOURITES</li></div>
                <div ><li className=' cursor-pointer bg-orange  font-bold px-5 py-2 rounded-xl ml-20 hover:text-orange hover:bg-white' onClick={Logout}>LOGOUT</li></div>
                </ul>:
                <ul className=' flex justify-between items-center '>
                <Link to={'/login'}><li className=' cursor-pointer hover:text-orange'>LOGIN</li></Link>
                <Link to={'/signup'}><li className=' cursor-pointer bg-orange  font-bold px-5 py-2 rounded-xl ml-20 hover:text-orange hover:bg-white'>SIGN UP</li></Link>
                </ul>}
        
            </div>
            <section className=" text-4xl xl:hidden">
          <div onClick={()=>setslide(!slide)}><IoMenu className=' text-white'/></div>
        </section>
        </div>
    </nav>}
    </>
  )
}

export default Navbar