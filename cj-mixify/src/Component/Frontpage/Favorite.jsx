import React, { useEffect, useState } from 'react'
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';


const Favorite = ({id, setshow}) => {
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    } else {
        return text;
    }
}
  const [fav, setfav] = useState([])
    const Getmusic = async()=>{
        const data = await fetch(`http://localhost:5000/getfavourite/${id}`)
        const info = await data.json()
        setfav(info.favourite)
    }
useEffect(()=>{
    Getmusic()
},[])
  return (
    <div className=' fixed left-0 z-40 top-0 h-[100vh] w-full md:w-80 bg-darkgray border-r-[1px] border-r-white border-opacity-20 pt-28'>
      <div className=' px-1  w-full '>
        <div className=' flex justify-between items-center w-full mb-10'>
        <h1 className=' text-white opacity-90 font-bold text-2xl '>FAVOURITES</h1>
        <MdCancel className=' cursor-pointer text-3xl text-white' onClick={()=>setshow(false)}/>
        </div>
        <div className=' overflow-y-scroll px-2'>
        {fav.map((e,i)=>{
          return(
            <Link className=' cursor-pointer '  key={i} to={e?.link}><div className='mb-5 text-white justify-between flex pb-3 border-b-white border-b-[1px]'>
              <div className=' '>{truncateText(e.name, 10)}</div>
              <div>{truncateText(e.music, 20)}</div>
            </div>
            </Link>
          )
        })}</div>
      </div>
    </div>
  )
}

export default Favorite