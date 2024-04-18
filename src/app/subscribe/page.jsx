import React from 'react'
import { FaRegBell } from "react-icons/fa6";
export default function page() {
  return (
    <div className='bg-yellow-400 pt-20 w-[70%] ml-[200px] h-4/5 mt-[40px] justify-center items-center'>
        <div className='flex justify-center items-center text-9xl'>
            <FaRegBell />
        </div>
        <div className='text-center'>
            <h1 className='text-3xl font-bold p-6'>Don&apos;t miss out - millions have joined <br /> Flexo</h1>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give <br /> you a complete account of the system, and expound.</p>
        </div>
        <div className='flex text-center justify-center p-9'>
            <input type="email" name="email" id="email" placeholder='Your email here'  className="w-64 h-12 px-4 py-2 focus:outline-none focus:border-blue-500"/>
            <span className='bg-black text-white px-4 justify-center items-center hover:bg-red-300'>Subscribe</span>
        </div>
    </div>
  )
}
