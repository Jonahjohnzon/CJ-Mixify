import React from 'react'

const Loding = () => {
  return (
    <div className=' w-[100vw] h-[100vh] bg-darkgray fixed z-50 top-0 left-0 flex justify-center items-center'>
        <div className=' h-10 w-10 border-2 border-t-transparent border-orange animate-spin'></div>
    </div>
  )
}

export default Loding