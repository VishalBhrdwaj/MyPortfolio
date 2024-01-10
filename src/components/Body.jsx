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
        <ProjectCard projectHeading={"MY Portfolio"} projectDescription={"Html, CSS, JavaScript, React JS"} imgurl={"https://designingforuncertainty.com/wp-content/uploads/2022/09/maxresdefault-39.jpg"}/>
        <ProjectCard projectHeading={"Chat Application"} projectDescription={"React JS ,Socket.io ,Nodejs,Express"} imgurl={"https://herobot.app/wp-content/uploads/2022/11/11-Reasons-Why-A-Chat-Application-Is-Great-For-Business_1.jpg"}/>
        <ProjectCard projectHeading={"NetFlix clone"} projectDescription={"React js, Redux , Appwrite"} imgurl={"https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png"}/>
        <ProjectCard projectHeading={"Omegle Clone"} projectDescription={"React js ,Socket IO ,WebRTC"} imgurl={"https://www.shutterstock.com/image-photo/poznan-pol-mar-21-2023-260nw-2282851949.jpg"}/>
       
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
