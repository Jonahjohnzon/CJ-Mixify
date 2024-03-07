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
                <h1 className=' font-light  text-4xl'>MUSIC IS LIFE</h1>
                <div className=' w-full h-1 bg-orange'></div>
                </div>
                <div className=' mb-5'>
                    <h1 className=' font-bold  text-9xl'>AFROBEATS</h1>
                </div>
                <div className=' w-[50%]'><p className=' text-2xl font-light'>CJ-Mixify is a creative and useful application that allows you to control your own Spotify music playback from a small window on a desktop.</p></div>
            </div>
        </div>
        <div className=' absolute bottom-0 w-full  z-20 bg-darkgray  flex justify-center'>
            <div className=' py-2 flex items-center'>
            <div className=' flex items-center border-x-[1px] mr-5 border-white px-2 border-opacity-30'>
                <section className=' mr-4'>
                    <img src='/ablum.jpg' className=' w-16'/>
                </section>
                <section>
                <h3 className=' text-sm'>Twice as tall</h3>
                <h1 className=' text-xs'>Album by Burnaboy</h1>
                </section>
            </div>
            <div className=' flex items-center'>
                <div className=' mr-4 cursor-pointer '><TbPlayerTrackPrevFilled/></div>
                <div className=' mr-4 bg-orange rounded-full text-xl cursor-pointer  h-20 w-20 flex justify-center items-center'><FaPlay/></div>
                <div className='cursor-pointer  mr-4'><TbPlayerTrackNextFilled/></div>
            </div>
            <div>
                <div className=' h-2 w-96 bg-white relative'>
                    <div className=' absolute h-full top-0 left-0 w-[70%] bg-orange'></div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Head