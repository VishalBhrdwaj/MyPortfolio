import { MdOutlineContactMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='h  border-emerald-300 mt-5 pt-5 pl-14 mb-10'>
      <div className=''>
        <div className='flex'>
        <div className='w-[50%] mr-4'>
            <div className="border border-yellow-50 p-10">
                <h1 className="text-2xl border-b-2">Motive</h1><br />
                If we can do thing  these kind of thing by own.We can also create much more than this when we started working as a team .I always prefer to work in team because 
                for one problem we have many solution may be someone have better solution as compared to mine. And That's Why we are here as developer <br />
                <br /><br />Thanks  😊

            </div>
            <div className="flex justify-around mt-16">
                <div className="rounded p-16 border border-violet-600">Hello1</div>
                <div className="rounded p-16 border border-violet-600">Hello2</div>
                <div className="rounded p-16 border border-violet-600">Hello3</div>
            </div>
        </div>
        <div className='border border-yellow-500 pl-5 pr-5 w-[40%] mb-5'>
            <h1 className='text-3xl mt-4 pl-10 flex text-center '>Fill Your Details<div className="ml-6 p-1"><MdOutlineContactMail /></div></h1>
            <div className='h-1 w-[55%] ml-10 rounded-md mt-2 shadow-lg bg-purple-400'></div>
            <div>
                <form className='flex flex-col p-10' action="" method="post">
                    <input className='border border-violet-600 pl-5 pr-5 pt-2 pb-2 rounded-sm mt-4 mb-4 ' type='text' placeholder='Enter your Name'/>
                    <input  className='border border-violet-600 pl-5 pr-5 pt-2 pb-2 rounded-sm mt-4 mb-4 ' type='email' placeholder='Enter your Email'/>
                    <input  className='border border-violet-600 pl-5 pr-5 pt-2 pb-2 rounded-sm mt-4 mb-4 ' type='tel' placeholder='Enter your Phone' />
                    <textarea className='border border-violet-600 pl-5 pr-5 pt-2 pb-2 rounded-sm mt-4 mb-4 ' placeholder='Enter your message'></textarea>
                    <button  className='border border-violet-600 pl-5 pr-5 pt-3 pb-3 rounded-sm mt-4  '>Submit</button>
                </form>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer