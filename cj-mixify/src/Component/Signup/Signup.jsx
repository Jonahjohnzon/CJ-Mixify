import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import Loding from '../Loding'

const Signup = () => {
    const [mgs, setmgs] = useState("")
    const [color, setcolor] = useState("")
    const [load, setload] = useState(false)
    const [loading, setloadng] = useState(true)
    const schema = yup.object({
        user_name:yup.string().max(50).min(1).required(),
        email:yup.string().email().required(),
        password:yup.string().min(3).max(50).required(),
        comfirmpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').min(3).max(50).required()
    })

    useEffect(()=>{
        const tme =setTimeout(()=>{
            setloadng(false)
        },2000)
        return () => clearTimeout(tme);
    },[])
  return (
    <>
    {loading?<Loding/>:<div className=' bg-black min-h-[100vh] w-full flex flex-row-reverse justify-center items-center pt-20'>
        <div className=' w-full h-[100vh] relative hidden xl:block' style={{backgroundImage:"url('/login.avif')"}}>
            <div className=' absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-40 flex justify-center items-center'>
                <div className=' flex flex-col items-center'>
                <h1 className=' text-white font-bold text-5xl 2xl:text-7xl opacity-75 mb-4'>CJ-Mixify</h1>
                    <h1 className=' text-white font-bold text-7xl 2xl:text-9xl opacity-75'>Music is Life</h1>
                </div>
            </div>

        </div>
            <div className=' bg-darkgray text-white h-[100vh]  w-full rounded-lg flex justify-center items-center'>
                <div className='  flex flex-col items-center  w-[90%] md:w-[70%]'>
                    <h1 className=' text-6xl mb-5 font-bold'>Signup</h1>
                    <h1 className='  text-2xl mb-10'>Register User</h1>
                    <div className='mb-10 flex justify-center'>
                    {mgs != ""&&<h1 className={`text-lg  ${color?" text-bermuda":" text-orange"}`}  >{mgs}</h1>}
                    </div>
                    <Formik
                    initialValues={{user_name:"", email:"",password:"",comfirmpassword:""}}
                    validationSchema={schema}
                    onSubmit={async(form,{resetForm})=>{
                        setload(true)
                        const data = await fetch('http://localhost:5000/createuser',{
                            method:"POST",
                            headers:{'Content-Type': 'application/json'},
                            body:JSON.stringify(form)
                        })
                        const info =  await data.json()
                        setcolor(info.create)
                        setmgs(info.message)
                        setload(false)
                        resetForm()
                       
                    }}
                    >
                        {(props)=>{
                            return(
                    <div className=' w-full flex flex-col items-center'>
                <div className='mb-5 w-full'>
                    <input type='email' placeholder='Email' className='text-lg px-2 border-opacity-50 outline-none bg-transparent border-white border-[1px] w-full h-12 rounded-lg' value={props.values.email} onChange={props.handleChange('email')} />
                    <p className="text-red-500 text-sm">{props.touched.email && props.errors.email}</p>
                </div>
                <div className='mb-5 w-full'>
                    <input type='text' placeholder='Username' className='text-lg px-2 border-opacity-50 outline-none bg-transparent border-white border-[1px] w-full h-12 rounded-lg' value={props.values.user_name} onChange={props.handleChange('user_name')} />
                    <p className="text-red-500 text-sm">{props.touched.user_name && props.errors.user_name}</p>
                </div>
                <div className='mb-5 w-full'>
                    <input type='password' placeholder='Password' className='text-lg px-2 border-opacity-50 outline-none bg-transparent border-white border-[1px] w-full h-12 rounded-lg' value={props.values.password} onChange={props.handleChange('password')} />
                    <p className="text-red-500 text-sm">{props.touched.password &&props.errors.password}</p>
                </div>
                <div className='mb-5 w-full'>
                    <input type='password' placeholder='Confirm Password' className='text-lg px-2 border-opacity-50 outline-none bg-transparent border-white border-[1px] w-full h-12 rounded-lg' value={props.values.comfirmpassword} onChange={props.handleChange('comfirmpassword')} />
                    <p className="text-red-500 text-sm">{props.touched.comfirmpassword &&props.errors.comfirmpassword}</p>
                </div>
                     
                        <div className='w-full h-14 flex justify-center mb-5'>
                        {load?  <div className=' flex justify-center'>
                                                                 <div className=' w-10 h-10 rounded-full border-t-4 border-t-transparent border-orange border-x-4 border-b-4 animate-spin flex justify-center items-center'>
                                                                 <div className=' w-5 h-5 rounded-full border-b-4  border-t-transparent transform -scale-y-180 border-white border-x-4 border-t-4 animate-spin'></div>
                                                                 </div>
                                                                 </div>:
                            <input type='submit' value={"Signup"} className=' w-1/2 h-12 bg-orange  rounded-lg font-bold cursor-pointer' onClick={props.handleSubmit}/>}
                        </div>
                        <div className=' w-full  flex justify-center'>
                            <p className=' font-bold '>Already have an account - <span className=' text-orange cursor-pointer'><Link to={'/login'}>Log in</Link></span></p>
                        </div>
                    </div>
                    )
                }}
                    </Formik>

                </div>
            </div>
    </div>}</>
  )
}

export default Signup