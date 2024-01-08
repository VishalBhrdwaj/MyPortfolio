import React from 'react'
import AboutMeCard from './cards/AboutMeCard'
import MyImage from './cards/MyImage'
import OuterConatiner from './cards/OuterConatiner'
import ProjectCard from './cards/ProjectCard'
import SkilsCard from './cards/SkilsCard'
import Crousel from './cards/Crousel'

const Body = () => {
  let frontendSkills=["HTML","CSS","JavaScript","TailWind CSS","React JS"];
  let backendSkills=["Node js","Express JS","JWT"];
  let devopsSkills=["Docker","Kubernetes","Git"];
  let databasesSkills=["MySql","Mongoose","MongoDB"];
  return (  
    <div className='ml-14'>
        <div className='flex'>
        <AboutMeCard/>
        <MyImage/>
        </div>
      
       <OuterConatiner heading={"My projects"}>
        <ProjectCard projectHeading={"MY Projects"} projectDescription={"This is My project Description"} imgurl={"https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzY29yZHxlbnwwfHwwfHx8MA%3D%3D"}/>
        <ProjectCard projectHeading={"MY Projects"} projectDescription={"This is My project Description"} imgurl={"https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzY29yZHxlbnwwfHwwfHx8MA%3D%3D"}/>
        <ProjectCard projectHeading={"MY Projects"} projectDescription={"This is My project Description"} imgurl={"https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzY29yZHxlbnwwfHwwfHx8MA%3D%3D"}/>
        <ProjectCard projectHeading={"MY Projects"} projectDescription={"This is My project Description"} imgurl={"https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzY29yZHxlbnwwfHwwfHx8MA%3D%3D"}/>
       
        </OuterConatiner>
       {/* <Crousel/> */}
       <OuterConatiner heading={"My Skill Set"}>
        <SkilsCard skills={frontendSkills} skillsType={"Frontend"}/>
        <SkilsCard skills={backendSkills} skillsType={"Backend"}/>
        <SkilsCard skills={devopsSkills} skillsType={"DevOps"}/>
        <SkilsCard skills={databasesSkills} skillsType={"Databases"}/>
       </OuterConatiner>
    </div>
  )
}

export default Body
