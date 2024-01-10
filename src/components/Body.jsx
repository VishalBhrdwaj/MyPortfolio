import AboutMeCard from './cards/AboutMeCard'
import MyImage from './cards/MyImage'
import OuterConatiner from './cards/OuterConatiner'
import ProjectCard from './cards/ProjectCard'
import SkilsCard from './cards/SkilsCard'

const Body = () => {
  let frontendSkills=["HTML","CSS","JavaScript","TailWind CSS","React JS"];
  let backendSkills=["Node js","Express JS","JWT"];
  let devopsSkills=["Docker","Kubernetes","Git"];
  let databasesSkills=["MySql","Mongoose","MongoDB"];
  let projects=[
    {
      projectHeading:"MY Portfolio",
      projectDescription:"Html, CSS, JavaScript, React JS",
      imgurl:"https://designingforuncertainty.com/wp-content/uploads/2022/09/maxresdefault-39.jpg",
      liveUrl:"https://my-portfolio-rust-one.vercel.app/"
    },
    {
      projectHeading:"Chat Application",
      projectDescription:"React JS ,Socket.io ,Nodejs,Express",
      imgurl:"https://herobot.app/wp-content/uploads/2022/11/11-Reasons-Why-A-Chat-Application-Is-Great-For-Business_1.jpg",
      liveUrl:"https://frontend-chat-app-eight.vercel.app/"
    },
    {
      projectHeading:"NetFlix clone [ To do.. ]",
      projectDescription:"React js, Redux , Appwrite",
      imgurl:"https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png",
      liveUrl:""
    },
    {
      projectHeading:"Omegle Clone [ To do.. ]",
      projectDescription:"React js ,Socket IO ,WebRTC",
      imgurl:"https://www.shutterstock.com/image-photo/poznan-pol-mar-21-2023-260nw-2282851949.jpg",
      liveUrl:""
    }
  ]
  return (  
    <div className='ml-14'>
        <div className='flex'>
        <AboutMeCard/>
        <MyImage/>
        </div>
      
       <OuterConatiner heading={"My projects"}>
      {
        projects.length >0 && (
          projects.map(project=>(
            <ProjectCard key={project.projectHeading} projectHeading={project.projectHeading} projectDescription={project.projectDescription}  imgurl={project.imgurl} liveUrl={project.liveUrl}/>    
          ))  
        )
      } 
        </OuterConatiner>
       
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
