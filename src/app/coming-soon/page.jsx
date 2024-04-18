import React from 'react'
import { IoSettings } from "react-icons/io5";
import SocialIcons from '../components/SocialIcons';

export default function page() {
  return (
    <div className='p-24 justify-center pr-[90px] text-center bg-black h-4/5 text-white w-[70%] ml-[180px] mt-20 mb-10'>
        <div  className='flex justify-center items-center text-9xl'>
        <IoSettings />
        </div>
        <div>
            <h1 className='text-3xl font-bold'>We are coming soon!</h1>
            <p className='p-4'>We&apos;re bringing something fresh and exciting to the table. Be the first to experience it!</p>
        </div>
        <div className='p-20 h-11 mr-48 ml-48'>
            <input type="email" name="email" id="email" placeholder='Your Email'/>
     </div>
     <div className=' border-2 border-white border-solid mr-80 ml-80 p-6 bg-white text-black font-bold text-2xl hover:bg-red-300'>
        <button>Notify Me</button>
     </div>
     <div>
        <h2 className='font-bold mt-12'>Follow us: <SocialIcons /></h2>
        
     </div>
    </div>
  )
}
