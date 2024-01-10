import React, { useState } from 'react'

const SkilsCard = ({skills,skillsType}) => {
  var mycolors=["yellow","green","red"]
  let newColor="red";
  return (
    <div className='h-[20rem] w-[19rem] pt-5 pl-2  border border-purple-300'>
        <h1 className='text-lg font-semibold'>{skillsType}</h1>
        <div className='rounded w-24 h-[0.2rem] bg-cyan-500'></div>
        {
          console.log(`border-${mycolors[2]}-400`)
        }
        <div>
          { 
          
            skills.map((skill,key)=>{
                  let colorclass="mt-2 border border-green-400 mb-2 pt-2 pl-6 pr-6 pb-2 rounded-md  w-fit";
  return               <div key={key} className={colorclass}>{skill}</div>
})
          }
        </div>
    </div>
  )
}

export default SkilsCard