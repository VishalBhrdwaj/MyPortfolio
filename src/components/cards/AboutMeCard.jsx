import React from 'react'
import { FcElectricity } from "react-icons/fc";

const AboutMeCard = () => {
  return (
    <div className='mt-[10%] w-[58%] p-10   border-red-700'>
        <h1 className='animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold mt-2 mb-4'>Welcome to My Dev portfolio</h1> 
        <p className='text-lg'>
            <br /><span className='text-2xl'>Hi 👋 I'm Vishal ,👦🏼</span><br/> <br />I have experience in multiple trending techstack like Reacts JS,Next js ,Node js,Express ,Mongo DB and Tailwind CSS. I mostly enjoying 🤩 to work as a Frontend Engineer 👨‍💻 make UI more attractive and functionally responsive.
            <br /><br />
            Thanks for Your Time,
            <br></br>
        </p>
        <button className='flex mt-14 p-3 pl-24 pr-24 rounded-lg  bg-white text-2xl text-black'> <div className='text-3xl mr-3'><FcElectricity />  </div>Get Started </button>
    </div>
  )
}

export default AboutMeCard