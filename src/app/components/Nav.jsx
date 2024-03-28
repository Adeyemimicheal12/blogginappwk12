import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub , FaCrown } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';


export default function Nav() {
  return (
    <nav className='bg-gray-800 flex justify-between items-center h-20 p-4'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>
        <p className='text-yellow-50 ml-4 font-semibold text-2xl mr-auto'>KennyBusin</p>
        <ul className='flex gap-6 list-none font-bold text-2xl justify-center items-center text-white'>
          <div className='flex items-center gap-x-5 justify-center'>
            <Link href='/'>Home</Link>
            <Link href='/category'>Pages</Link>
            <Link href='/about'>About</Link>
          </div>
              <div className='flex p-9 gap-5 '>
                <Link href='https://www.instagram.com/' className='rounded-full border-2 border-blue-700 text-2xl p-2 hover:bg-blue-800'>
                <FaInstagram />
                </Link>

                <Link href=' https://twitter.com/home' className='rounded-full border-2 border-red-700 text-2xl p-2 hover:bg-red-700'>
                <FaXTwitter  />
                </Link>

                <Link href='https://www.linkedin.com/login' className='rounded-full border-2 border-yellow-700 text-2xl p-2 hover:bg-yellow-700'>
                <FaLinkedin />
                </Link>

                <Link href='https://github.com/' className='rounded-full border-2 border-green-700 text-2xl p-2 hover:bg-green-700'>
                <FaGithub />
                </Link>

                <Link href='' className='flex items-center gap-2 hover:bg-blue-900 bg-slate-900' >
                <span>Subscribe</span>
                <FaCrown />
                
                </Link>
              </div>
        </ul>
    </nav>

  )
}
