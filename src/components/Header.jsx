import React, { useState } from 'react'
import { FaAnglesRight } from "react-icons/fa6";
const Header = () => {
 const [navlinks,setNavLinks]=useState([
    {navName:"Twitter"},
    {navName:"LinkedIn"},
    {navName:"Github"},
 ]) 
  return (
    <div className='border border-violet-800 shadow-lg pt-5 pb-5 flex justify-around'>
        <div className='font-bold text-2xl'>Bhardwaj_Dev_23</div>
        <div>
            <ul className='flex'>
            {
                navlinks.map((links)=><li className='ml-2 mr-3 px-7 py-2 cursor-pointer hover:border-b-2 hover:border-purple-600 hover:ease-in-out' key={links.navName}>{links.navName}</li>)
            }
            <button className='border border-violet-700 px-7 py-2 rounded-md flex text-center'> Connect To Me <div className='pt-1 ml-3'><FaAnglesRight /></div></button>
            </ul>
        </div>
    </div>
  )
}

export default Header