
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom' 
import { IoIosMusicalNotes } from "react-icons/io";
import {TbMusicOff, TbMusic} from 'react-icons/tb'
import { FaRegUserCircle } from "react-icons/fa";
import { Formik } from 'formik'
import * as yup from 'yup'



const Join = () => {
    const [load,setload] = useState(true)
    const [result, setresult] = useState(false);
    const [wording, setwording] = useState([]);
    const [sound, setsound] = useState("off")


    const schema = yup.object({
        name:yup.string().max(50).min(1).required(),
    })


  return (
    <div>
       
        <div className=' bg-swarm bg-cover bg-center bg-[url("/area_bg2.jpg")] w-full h-[100vh] relative'>
           
            <div className=' relative flex flex-col justify-center items-center z-20 h-full'>
  
                <div className=' w-[100%] h-5/6 flex justify-center items-center text-center'>
                <div className=' text-white font-Anton text-2xl w-full '>
                        <div className='w-full flex-col flex items-center  '><div className='mb-5 font-bold'>Search By Music Name</div>
                        <div className=' text-base text-black w-[500px]'>
                            <Formik
                            initialValues={{name:"", junky:""}}
                            validationSchema={schema}
                            onSubmit={async(forms,{resetForm})=>{
                                setresult(true)
                                const token = localStorage.getItem('token')
                                
                                const data = await fetch(`https://api.spotify.com/v1/search?q=${forms.name}&type=track&limit=1&access_token=${token}`)
                                const info = await data.json()
                                setwording(info.tracks.items[0])
                                console.log(info.tracks.items[0])
                                setload(false)
                                resetForm()
                            }}>
                                {(props)=>{
                                    return(
                                        <div>
                                            <div className='mb-2 flex flex-col items-center'>
                                                <input type='text' placeholder='Music Name' className=' placeholder:font-Neus font-Neus  w-full h-12 p-2 rounded-lg' value={props.values.name} onChange={props.handleChange('name')}/>
                                                <div  className=' mb-1 text-purple text-sm'>{props.touched.name && props.errors.name}</div>
                                            </div>
                                            <input type='submit' value="Search" className=' mb-5 bg-orange font-Anton px-8 rounded-lg shadow-sm cursor-pointer hover:shadow-none font-bold shadow-black py-2 text-black' onClick={props.handleSubmit}/>
                            
                                        </div>
                                    )
                                }}
                            </Formik>
                        </div>
                        <div className=' mt-10 w-1/2 flex justify-center'>
                            <div className=' w-full flex justify-center'>{result&&
                             <div className=' w-full flex justify-center'>{load?<div className=' w-20 h-20 animate-spin rounded-full border-4 border-orange border-l-0'>

                             </div>:<div className=' flex justify-between text-lg  border-b-2 border-white pb-3 border-opacity-50 w-full  hover:border-orange '>
                             <div className='flex items-center cursor-pointer'><IoIosMusicalNotes className=' mr-1 ' /><p>{wording?.name}</p></div>
                                <div className='flex items-center cursor-pointer'><FaRegUserCircle className=' mr-1 ' /><p>{wording?.artists[0].name}</p></div>
                                <Link to={wording?.preview_url}> <div className=' font-Anton text-white  cursor-pointer flex items-center' ><div className=' mr-1'>{sound === 'off' ? <TbMusicOff/>:<TbMusic/>}</div>sound: {sound}</div>
                                   <div></div>
                                   </Link>
                                </div> }</div>}</div>
                                
                        </div>
                        
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Join