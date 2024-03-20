
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom' 
import { IoIosMusicalNotes } from "react-icons/io";
import {TbMusicOff, TbMusic} from 'react-icons/tb'
import { FaRegUserCircle } from "react-icons/fa";
import { Formik } from 'formik'
import * as yup from 'yup'
import Loding from '../Loding';



const Join = ({log}) => {
    const [load,setload] = useState(true)
    const [result, setresult] = useState(false);
    const [wording, setwording] = useState([]);
    const [sound, setsound] = useState("Play")
    const [loading, setloadng] = useState(true)
    const [name, setname] = useState([])



    const schema = yup.object({
        name:yup.string().max(50).min(1).required(),
    })

const Add =async(data)=>{

    setload(true)
    const storedData = localStorage.getItem('myData');
    const info ={
        musicname:data
    }
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        const datas = await fetch(`http://localhost:5000/add/${parsedData.data._id}`,{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(info)
        })
        const res = await datas.json()
        setname([...name, data.name]);
        setload(false)
      }

}
useEffect(()=>{
    const tme =setTimeout(()=>{
        setloadng(false)
    },2000)
    return () => clearTimeout(tme);
},[])

  return (
    <div>
       
       {loading?<Loding/>:<div className=' bg-swarm bg-cover bg-center bg-[url("/area_bg2.jpg")] w-full h-[100vh] relative'>
           
            <div className=' relative flex flex-col justify-center items-center z-20 h-full'>
  
                <div className=' w-[100%] h-5/6 flex justify-center items-center text-center'>
                <div className=' text-white font-Anton md:text-2xl w-full '>
                        <div className='w-full flex-col flex items-center  '><div className='mb-5 font-bold'>Search By Music Name</div>
                        <div className=' text-sm md:text-base text-black w-[90vw] md:w-[500px]'>
                            <Formik
                            initialValues={{name:"", junky:""}}
                            validationSchema={schema}
                            onSubmit={async(forms,{resetForm})=>{
                                setresult(true)
                                const token = localStorage.getItem('token')
                                
                                const data = await fetch(`https://api.spotify.com/v1/search?q=${forms.name}&type=track&limit=1&access_token=${token}`)
                                const info = await data.json()
                                setwording(info.tracks.items[0])
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
                        <div className=' mt-10 w-[95vw] md:w-2/3 flex justify-center items-center'>
                            <div className=' w-full flex justify-center'>{result&&
                             <div className=' w-full flex justify-center'>{load?<div className=' w-20 h-20 animate-spin rounded-full border-4 border-orange border-l-0'>

                             </div>:<div className=' w-full'>{wording.artists.map((wordings,i)=>{
                                const data ={
                                    name:wordings?.name,
                                    music:wording?.name,
                                    link:wording?.external_urls?.spotify
                                }
                                return(
                                <div className=' mb-5 flex justify-between items-center text-sm md:text-lg  border-b-2 border-white pb-3 border-opacity-50 w-full  hover:border-orange ' key={i}>
                             <div className='flex items-center cursor-pointer'><IoIosMusicalNotes className=' mr-1 hidden md:block ' /><p>{wording?.name}</p></div>
                                <div className='flex items-center cursor-pointer'><FaRegUserCircle className=' mr-1 hidden md:block  ' /><p>{wordings?.name}</p></div>
                                <Link to={wording?.external_urls?.spotify}> <div className=' font-Anton text-white  cursor-pointer flex items-center' ><div className=' mr-1'><TbMusic className='hidden md:block '/></div>{sound}</div>
                                   <div></div>
                                   </Link>
                                  {log && <div>
                                    <div>{name.includes(wordings?.name)?<div className='  font-bold px-4 py-2 rounded-xl text-tahiti bg-white'>Added</div>:
                                    <div className=' cursor-pointer hover:bg-orange hover:text-white  font-bold px-2 md:px-4 py-2 rounded-xl text-orange bg-white' onClick={()=>Add(data)}>Add to Collection</div>
                                        }
                                    </div>
                                   </div>}
                                </div>
                                )
                             })}</div> }</div>}</div>
                                
                        </div>
                        
                </div>
                </div>
            </div>
        </div>
    </div>}
    </div>
  )
}

export default Join