import React from 'react'
import { FaStar } from "react-icons/fa";

import { BiSolidGrid } from "react-icons/bi";

const Seconds = ({Datas}) => {

    const Data = ()=>{
        const info = Datas.tracks.items.map((e)=>{
            return(
                <div key={e.id} className=''>
                    <div style={{backgroundImage:`url(${Datas.images[0].url})`}} className='  mb-5 mr-10   relative flex justify-center items-center w-[300px] border-silver border-opacity-20 border-[1px]    h-[350px]  bg-cover bg-center group  rounded-xl overflow-hidden' >
                        <div className=' absolute sm:cursor-pointer ease-in-out  w-full h-full bg-black z-30 opacity-40 group-hover:opacity-80 transition-all duration-500 '></div>
                        <div className=' relative w-full z-30 opacity-0 group-hover:opacity-100 flex flex-col items-center ease-in-out transition-all duration-700'>
                            <div className=' bg-orange px-20 py-2 rounded-md text-white font-bold cursor-pointer'>Play</div>
                
                            </div>
                        <div className=' text-white font-bold absolute left-3 bottom-2 w-3/4 z-40'>
                            <p>{e.name}</p>
                            <div className=' flex items-center'><div className=' text-yellow-400 mr-1 text-silver'><FaStar /></div></div>
                        </div>
                    </div>
                </div>

            )
        })
        return info
    }
  return (
    <main className=' py-20 mb-5 2xl:mb-24 px-20'>
        <div>
            <header className='  text-white mb-5 flex items-center justify-between  text-4xl font-bold text-center '><div>ARTIST OF THE DAY</div><div className='flex items-center text-sm text-[#A5AFBE]'><BiSolidGrid  className=' text-yellow-500'/></div></header>
            <div className=' text-white font-semibold text-lg mb-5 flex items-center'><p className=' mr-2'>ARTIST: </p><p className=' font-medium'>{Datas.artists[0].name}</p></div>
            <div className='  flex w-full overflow-x-auto scrollbar-none'>
               <Data/>
            </div>
        </div>
    </main>
  )
}

export default Seconds