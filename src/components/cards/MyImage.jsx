import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";


const MyImage = () => {
  return (
    <div className='mt-[11%] h-[15rem] ml-[12%] w-[15rem] border-4  border-violet-800 rounded-full'>
    <div className=''>
        <img className='w-[15rem] h-[15rem] rounded-full' src={import.meta.env.VITE_MY_IMG}/>
    </div>
    </div>
  )
}

export default MyImage