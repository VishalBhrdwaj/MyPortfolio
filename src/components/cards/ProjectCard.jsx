import React from 'react'

const ProjectCard = ({imgurl,projectHeading,projectDescription}) => {
  return (
    <div className='p-5  w-[19rem] rounded-md flex flex-col  border border-violet-800'>
        <div className='rounded-sm mb-1 border border-violet-800'><img src={imgurl} alt='Project Image'/></div>
        <h1 className='text-lg mt-1 border-b-2 pb-3 border-white font-semibold'>{projectHeading}</h1>
        <div className='mt-3 '>
            {projectDescription}
        </div><br />
        <button className='border border-violet-500 p-3'>Live Urls</button>
    </div>
  )
}

export default ProjectCard