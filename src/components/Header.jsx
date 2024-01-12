import React, { useState } from 'react'
import { FaAnglesRight } from "react-icons/fa6";
import scrollToElement from "scroll-to-element"
const Header = () => {
 const [navlinks,setNavLinks]=useState([
    {navName:"Twitter",link:"https://twitter.com/Bhardwaj_dev_23"},
    {navName:"LinkedIn",link:"https://www.linkedin.com/in/vishalbhardwaj820/"},
    {navName:"Github",link:"https://github.com/VishalBhrdwaj/"},
 ]) 

 
 const scrollToConnectForm=()=>{
  var elem = document.querySelector('.footer');
  console.log(elem);
  console.log("HEll");
  scrollToElement(elem, {
    offset: 0,
    ease: 'out-bounce',
    duration: 1500
});
 }
  return (
    <div className='border border-violet-800 shadow-lg pt-5 pb-5 flex justify-around'>
        <div className='font-bold text-2xl'>Bhardwaj_Dev_23</div>
        <div>
            <ul className='flex'>
            {
                navlinks.map((links)=><li className='ml-2 mr-3 px-7 py-2 hover:scale-105 cursor-pointer  hover:border-b-2 hover:border-purple-600 ' key={links.navName}><a href={links.link} target='_blank' rel="noopener noreferrer">{links.navName}</a></li>)
            }
            <button onClick={scrollToConnectForm} className='border border-violet-700 px-7 py-2 rounded-md flex text-center hover:bg-gradient-to-r from-indigo-500 hover:transition ease-in-out'> Connect To Me <div className='pt-1 ml-3'><FaAnglesRight /></div></button>
            </ul>
        </div>
    </div>
  )
}

export default Header