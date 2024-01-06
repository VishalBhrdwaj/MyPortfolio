import React from 'react'
import AboutMeCard from './cards/AboutMeCard'
import MyImage from './cards/MyImage'
import OuterConatiner from './cards/OuterConatiner'
import ProjectCard from './cards/ProjectCard'
import SkilsCard from './cards/SkilsCard'
import Crousel from './cards/Crousel'

const Body = () => {
  return (  
    <div className='ml-14'>
        <div className='flex'>
        <AboutMeCard/>
        <MyImage/>
        </div>
      
       <OuterConatiner heading={"My Projects"} anotherComponent={<ProjectCard projectDescription={"This is made in javaScript ,React js,Tailwind for Styling"} projectHeading={"MY project 1"}  imgurl={"https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzY29yZHxlbnwwfHwwfHx8MA%3D%3D"}/>}/>
       {/* <Crousel/> */}
       <OuterConatiner heading={"What I know"} anotherComponent={<SkilsCard />}/>
    </div>
  )
}

export default Body