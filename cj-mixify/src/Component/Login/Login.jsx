import React from 'react'

const Login = () => {
  return (
    <div className=' bg-black min-h-[100vh] w-full flex justify-center items-center pt-20'>
        <div className=' w-full h-[100vh] relative' style={{backgroundImage:"url('/login.avif')"}}>
            <div className=' absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-40 flex justify-center items-center'>
                <div className=' flex flex-col items-center'>
                <h1 className=' text-white font-bold text-7xl* opacity-75 mb-4'>CJ-Mixify</h1>
                    <h1 className=' text-white font-bold text-9xl opacity-75'>Music is Life</h1>
                </div>
            </div>

        </div>
            <div className=' bg-darkgray text-white h-[100vh]  w-full rounded-lg flex justify-center items-center'>
                <div className='  flex flex-col items-center w-[70%]'>
                    <h1 className=' text-6xl mb-5 font-bold'>Login</h1>
                    <h1 className='  text-2xl mb-10'>Welcome User</h1>
                    <form className=' w-full flex flex-col items-center'>
                        <div className=' mb-5 w-full'>
                            <input type='email' placeholder=' Email' className='  text-lg px-2 border-opacity-50 outline-none bg-transparent border-white border-[1px] w-full h-12 rounded-lg'/>
                        </div>
                        <div className=' mb-5 w-full'> 
                            <input type='password' placeholder='Password' className='text-lg  px-2 border-opacity-50 outline-none bg-transparent border-white border-[1px] w-full h-12 rounded-lg'/>
                        </div>
                        <div className=' w-full  flex justify-end mb-5'>
                            <p className=' font-bold text-orange'>Forgot Password?</p>
                        </div>
                        <div className='w-full flex justify-center mb-5'>
                            <input type='submit' value={"Login"} className=' w-1/2 h-12 bg-orange  rounded-lg font-bold'/>
                        </div>
                        <div className=' w-full  flex justify-center'>
                            <p className=' font-bold '>Don't have an account - <span className=' text-orange cursor-pointer'>Sign up</span></p>
                        </div>
                    </form>

                </div>
            </div>
    </div>
  )
}

export default Login