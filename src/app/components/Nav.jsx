// "use client"
// import React, { useState } from 'react'
// import { FaInstagram, FaLinkedin, FaGithub , FaCrown } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import Link from 'next/link';
// import Search from "./Search";
// import Image from 'next/image'
// import Input from './Input'
// import Link from 'next/link'
// import { BiSolidJoystick } from "react-icons/bi"
// import { FaAngleDown } from 'react-icons/fa'
// import Button from './Button'
// import { AnimatePresence, motion } from 'framer-motion'
// import { MdOutlineClose } from "react-icons/md";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { RxHamburgerMenu } from "react-icons/rx";
// import ThemeSwitch from './ThemeSwitch'
// import { articles } from '../page'

// // const [toggle, setToggle] = useState(false)
// // const navigate = UseNavigate
// export default function Nav() {
//   const [isClick, setisClick] = useState(false)


 

//   const toggleNavBar = () => {
//     setisClick(!isClick)
//   };

//   const closeNavBar = () => {
//     setisClick(false);
//   };
//   return (
//     // <AnimatePresence>
//     <div className='flex h-20 p-4 sm:grid-cols-1 bg-slate-500'>
//     <nav className=' flex justify-between items-center mb-4'>
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
//         </svg>
//         </nav>
//         <p className='text-black ml-4 font-semibold text-2xl mr-auto'>KennyBusin</p>
//         <Search/>
//         <div className='items-center md:hidden flex cursor-pointer' onClick={toggleNavBar} >
        
    
//         <button className=' items-center bg-[#9050ed] justify-center p-2 '>

//         {isClick ? ( <MdOutlineClose /> ) : ( <RxHamburgerMenu/>)
//       }
//         </button>

//         </div>
//         <ul className='flex gap-6 list-none font-bold text-2xl justify-center items-center text-black'>
//           <div className='flex gap-x-5 text-center m-x-5 font-bold'>
//             <li><Link href='/'>Home</Link></li>
//             <li><Link href='/category'>Category</Link></li>
//             <li><Link href='/about'>About</Link></li>
//           </div>
//               <div className='flex p-9 gap-5 '>
//                 <Link href='https://www.instagram.com/' className='rounded-full border-2 border-blue-700 text-2xl p-2 hover:bg-blue-800'>
//                 <FaInstagram />
//                 </Link>

//                 <Link href=' https://twitter.com/home' className='rounded-full border-2 border-red-700 text-2xl p-2 hover:bg-red-700'>
//                 <FaXTwitter  />
//                 </Link>

//                 <Link href='https://www.linkedin.com/login' className='rounded-full border-2 border-yellow-700 text-2xl p-2 hover:bg-yellow-700'>
//                 <FaLinkedin />
//                 </Link>

//                 <Link href='https://github.com/' className='rounded-full border-2 border-green-700 text-2xl p-2 hover:bg-green-700'>
//                 <FaGithub />
//                 </Link>

//                 <Link href='/subscribe' className='flex items-center gap-2 text-white hover:bg-red-300 border-black bg-black border-2 rounded' >
//                 <span>Subscribe</span>
//                 <FaCrown />
//                 </Link>
//               </div>
//         </ul>
 
//     </div>
//   )
// }



// // "use client"
// // import Image from 'next/image'
// // import Input from './Input'
// // import Link from 'next/link'
// // import { BiSolidJoystick } from "react-icons/bi"
// // import { FaAngleDown } from 'react-icons/fa'
// // import Button from './Button'
// // import { AnimatePresence, motion } from 'framer-motion'
// // import { MdOutlineClose } from "react-icons/md";
// // import { RiArrowDropDownLine } from "react-icons/ri";
// // import { RxHamburgerMenu } from "react-icons/rx";
// // import ThemeSwitch from './ThemeSwitch'
// // import { useState } from 'react'
// // import { articles } from '../page'



// export default function Navbar() {

//   const [isClick, setisClick] = useState(false)


 

//   const toggleNavBar = () => {
//     setisClick(!isClick)
//   };

//   const closeNavBar = () => {
//     setisClick(false);
//   };



 

//   return (
//     <AnimatePresence>

//     <nav className='border-gray-950 dark:border-red-500 border-y-4 sm:block md:flex justify-between items-center text-2xl capitalize font-bold mt-20'>

    
    
//     <div className='justify-between items-center gap-x-3 flex'>
//       {/* <Image src="/LOGO.png" alt="Gn" width="50" height="30" className='rounded-md shadow-lg ml-5'/> */}
 
//       <Link className="" href="/">
//       <div className='flex'>
//     <BiSolidJoystick className='text-4xl' />
//       <span className='md:flex hidden'>TechGamer Nexus</span>
//       <motion.span
//        className=' md:hidden flex cursor-pointer'>TGN</motion.span>
//       </div>
//       </Link>


//         <div className='items-center md:hidden flex cursor-pointer' onClick={toggleNavBar} >
        
    
//         <button className=' items-center bg-[#9050ed] justify-center p-2 '>

//         {isClick ? ( <MdOutlineClose /> ) : ( <RxHamburgerMenu/>)
//       }
//         </button>

//         </div>
//     </div>

//     <div className='md:block hidden'>
      
//     <div className='dark:border-white flex items-center space-x-4'>

//             <Link className='p-2' href="/">
//               Home
//             </Link>
           
          
            

       
            
//           <Link className='p-2 hover:border-b-4 border-transparent border-b transition-colors duration-500 ease-in-out hover:border-yellow-500' href="/about">
//             About
//             </Link>
            
            
        
//           <Link className='p-2 hover:border-b-4 border-transparent border-b transition-colors duration-500 ease-in-out hover:border-blue-500' href="/category">
//             Blog
//             </Link>
            
            
        
            
        
//           <Link className='p-2' href="/contact">
//             Contact
//             </Link>
            

     

    
//         <Input type="email" userid="email" place="Enter Email" />
//         <Button className="p-3" status="subscribe" />
        
//             </div>
//     </div>
    
    

//     {isClick && (
//       <motion.div
//       className='md:hidden block px-2 pt-2 pb-3 bg-[#caacf7] space-y-1 sm:px-3'>
            
//             <Link href="/" className='p-2 hover:text-[#9147FF]' onClick={closeNavBar}>
//               Home 
//             </Link>
          
            

       
            
//           <Link className=' block' href="/about" onClick={closeNavBar}>
//            <span className='p-2 hover:border-b-4 border-transparent border-b transition-colors duration-500 ease-in-out hover:text-[#9147FF]'>About</span>
//             </Link>
            
            
        
//           <Link className='block' href="/category" onClick={closeNavBar}>
//             <span className='p-2 hover:border-b-4 border-transparent border-b transition-colors duration-500 ease-in-out hover:text-[#9147FF]'>Blog</span>
//             </Link>
            
           
//           <Link className='block' href="/contact" onClick={closeNavBar}>
//             <span className='p-2 hover:border-b-4 border-transparent border-b transition-colors duration-500 ease-in-out hover:text-[#9147FF]'>Contact</span>
//             </Link>
            

      
            
//       </motion.div>
          
//     )}
//     </nav>
//     </AnimatePresence>
//   )
// }