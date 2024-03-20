import React from 'react'
import { TbPlayerTrackPrevFilled,  TbPlayerTrackNextFilled  } from "react-icons/tb";
import { FaPlay } from "react-icons/fa6";



const Head = () => {
  return (
    <div style={{backgroundImage:"url('/intro-slide1.jpg')"}} className='  text-white w-full h-[930px] bg-center bg-cover bg-no-repeat relative'>
        <div className=' absolute bg-black w-full h-full top-0 z-10 bg-opacity-30 flex justify-center items-center'>
            <div className=' text-center flex flex-col items-center'>
                <div className=' w-fit mb-5'>
                <div className=' w-full h-1 bg-orange'></div>
                <h1 className=' font-light text-xl  lg:text-4xl'>MUSIC IS LIFE</h1>
                <div className=' w-full h-1 bg-orange'></div>
                </div>
                <div className=' mb-5'>
                    <h1 className=' font-bold text-6xl  lg:text-9xl'>AFROBEATS</h1>
                </div>
                <div className=' w-[50%]'><p className=' lg:text-2xl font-light'>CJ-Mixify is a creative and useful application that allows you to control your own Spotify music playback from a small window on a desktop.</p></div>
            </div>
        </div>
        <div className=' absolute bottom-0 w-full  hidden  z-20 bg-darkgray h-10  lg:flex justify-center'>

        </div>
    </div>
  )
}

export default Head