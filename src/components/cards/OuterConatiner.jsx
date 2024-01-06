import React from 'react'
import ProjectCard from './ProjectCard'

const OuterConatiner = ({anotherComponent,heading}) => {
  return (
    <div className=' mr-10 border-purple-700 p-5 mt-5'>
    <h1 className='text-2xl pb-3  border-purple-500 font-semibold'>{heading}</h1>
    <div className=' mt-4 mr-[5%] flex justify-around  border-red-600'>
        {anotherComponent}
        {anotherComponent}
        {anotherComponent}
        {anotherComponent}
    </div>
    </div>
  )
}

export default OuterConatiner