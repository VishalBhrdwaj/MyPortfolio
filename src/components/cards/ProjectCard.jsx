import React from 'react'

const ProjectCard = ({projectHeading,projectDescription,imgurl,liveUrl}) => {
  return (
    <div className='p-5  w-[19rem] rounded-md flex flex-col  border border-violet-800'>
        <div className='rounded-sm  w-[98%] h-[98%] mb-1 border border-violet-800 text-center'><img className='h-[100%] w-[100%]' src={imgurl} alt='Project Image'/></div>
        <h1 className='text-lg mt-1 border-b-2 pb-3 border-white font-semibold'>{projectHeading}</h1>
        <div className='mt-3 '>
            {projectDescription}
        </div><br />
     <a href={liveUrl} target='_blank' rel="noopener noreferrer" className='w-[100%]'><button className='border w-[100%] border-violet-500 p-3 hover:bg-gradient-to-r from-indigo-500 hover:scale-110 hover:transition ease-in-out '>Live Urls</button></a>
    </div>
  )
}

export default ProjectCard