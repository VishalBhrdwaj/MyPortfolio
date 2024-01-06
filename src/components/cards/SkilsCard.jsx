import React from 'react'

const SkilsCard = () => {
  return (
    <div className='h-[20rem] w-[19rem] pt-5 pl-2  border border-purple-300'>
        <h1 className='text-lg font-semibold'>Frontend</h1>
        <div className='rounded w-24 h-[0.2rem] bg-green-600'></div>
        <div>
        <div className='mt-2 mb-2 pt-2 pl-6 pr-6 pb-2 rounded-md border border-purple-400 w-fit'>HTML</div>
        <div className='mt-2 mb-2 pt-2 pl-6 pr-6 pb-2 rounded-md border border-orange-400 w-fit'>CSS</div>
        <div className='mt-2 mb-2 pt-2 pl-6 pr-6 pb-2 rounded-md border border-red-400 w-fit'>JavaScript</div>
        <div className='mt-2 mb-2 pt-2 pl-6 pr-6 pb-2 rounded-md border border-green-400 w-fit'>React Js</div>
        <div className='pt-2 pl-6 pr-6 pb-2 rounded-md border border-yellow-400 w-fit'>TailWind CSS</div>
        </div>
    </div>
  )
}

export default SkilsCard