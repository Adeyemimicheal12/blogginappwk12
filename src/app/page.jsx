import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { CiBookmark } from "react-icons/ci";
import { FaCrown } from "react-icons/fa";
import { LuTriangleRight } from "react-icons/lu";

export default function page() {
  return (
    <section className='bg-gray-500'>
         <div>
            <Link href='/fashion'>
          <Image src='/home3.jpg' alt='a fashion' width='1500' height='400' className='h-[625px] lg:grid-cols-1 sm:grid w-4/5 ml-[160px]'/>
           <div className="absolute top-0 left-0 p-48 text-black">
           <p className='h-7 w-15 bg-slate-700 font-bold hover:bg-white -mt-24'>Fashion</p>
           </div>
           <div className="absolute top-0 right-0 p-48 text-4xl -mb-32" >
           <CiBookmark  className='rounded-full border-2 border-white bg-blue-400 hover:bg-white -mt-24'/>
           </div>
           <div className="absolute bottom-0 left-0 text-black mb-2">
           <p className='font-bold md:text-6xl ml-40 h-32 w-15 bg-slate-500 '>Exploring the vibrant world <br />  of arts and entertainment</p>
           </div>
           </Link>
        </div>
        <div className='flex flex-wrap mt-10 justify-center items-center gap-6 rounded p-16'>
            <Link href='/category/Sport'><p className='border-2 bg-blue-400 border-blue-400'>Sport</p></Link>
            <Link href='/category/Fashion'><p className='border-2 bg-green-400 border-green-400'>Fashion</p></Link>
            <Link href='/category/Technology'><p className='border-2 bg-yellow-400 border-yellow-400'>Technology</p></Link>
            <Link href='/category/Game'><p className='border-2 bg-red-300 border-red-300 '>Game</p></Link>
            <Link href='/category/Education'><p className='border-2 bg-fuchsia-400 border-fuchsia-400'>Education</p></Link>
        </div>

    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-rows-2 gap-9 mt-10'>
          <div>
            <Link href='/Games'>
            <Image src='/game.jpg' alt='fun' width='800' height='100' className='h-[280px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-black mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline'>Indie Game Development- From Concept to </span>
              <div className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 text-center'>Release</div>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[330px] left-5 box-border unicode-isolate bg-red-300">Game</div>
              <div className='flex gap-4'>
              <p>By Emily Davis</p>
              <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>
          <div>
            <Link href='/sport'>
            <Image src='/sport.jpg' alt='fun' width='800' height='400' className='h-[280px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-black mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline'>Strength Training for Endurance Athletes</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[290px] left-5 box-border unicode-isolate bg-blue-400">Sport</div>
              <div className='flex gap-4 mt-3'>
                <p>By Michael Johnsons</p>
                <p>June 15,2023</p>
              </div>

            </div>
            </Link>
          </div>
          <div>
            <Link href='/game'>
            <Image src='/game2.jpg' alt='fun' width='800' height='400' className='h-[280px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-black mb-2">
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[290px] left-5 box-border unicode-isolate bg-red-300">Game</div>
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline ml-20 mt-20'>The Art of Game Design</span>
              <div className='flex gap-4 mt-3'>
                <p>By Robert Johnson</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>
          <div>
            <Link href='/education'>
            <Image src='/education.jpg' alt='fun' width='800' height='200' className='h-[280px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-black mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline'>Inclusive Education- Meeting the Needs of <br /></span>
              <div className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 text-center'>Every Student</div>
              
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[350px] left-5 box-border unicode-isolate bg-fuchsia-400">Education</div>
              <div className='flex gap-4 mt-3'>
                <p>By Jennifer Adam</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>

   
          <div>
            <Link href='/highedu'>
            <Image src='/education2.jpg' alt='fun' width='800' height='100' className='h-[280px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-black mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline'>Personalized Learning- The Future of</span>
              <div className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0  text-base leading-7 text-center'>Education</div>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[320px] left-5 box-border unicode-isolate bg-fuchsia-400">Education</div>
              
              <div className='flex gap-4 mt-3'>
                <p>By Jennifer Adams</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>
          <div>
            <Link href='/technology'>
            <Image src='/technology.jpg' alt='fun' width='800' height='400' className='h-[280px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-black mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline'>The Future of Transportation Technology</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[300px] left-5 box-border unicode-isolate bg-yellow-400">Technology</div>
              <div className='flex gap-4 mt-6'>
                <p>By Alex Rodriguez</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>
          <div>
            <Link href='/sport2'>
            <Image src='/sport2.jpg' alt='fun' width='800' height='400' className='h-[280px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-black mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline'>The Science of Sports Performance</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[300px] left-5 box-border unicode-isolate bg-blue-400">Sport</div>
              <div className='flex gap-4 mt-6'>
                <p>By John Smith</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>
          <div>
            <Link href='/fashion2'>
            <Image src='/fashion2.jpg' alt='fun' width='800' height='400' className='h-[280px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-black mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline'>Fashion Trends- Past, Present, and</span>
              <div className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 text-center'>Future</div>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[340px] left-5 box-border unicode-isolate bg-green-400">Fashion</div>
              <div className='flex gap-4'>
                <p>By Sophia Lee</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>
          </div>
          <div className='flex font-bold mt-16 mb-8 gap-4'>
          <LuTriangleRight/>
            <p>Latest blogs in Entertainment</p>
          </div>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 grid-rows-1 gap-5'>
            <Link href='/enter'>
            <Image src='/enter.jpg' alt='art' width='800' height='400' className='h-[480px] w-[1000px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-black mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline ml-40'>Haute Couture- The Evolution of High Fashion</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[490px] left-5 box-border unicode-isolate bg-green-400">Fashion</div>
              <div className='flex gap-4 justify-center items-center mt-3'>
                <p>By Elena Garcia</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          
          <div>
            <Link href='/tech'>
            <Image src='/tech.jpg' alt='technology' width='800' height='400'  className='h-[480px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-black mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline ml-52' >The Quantum Computing Revolution</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[490px] left-5 box-border unicode-isolate bg-yellow-400">Technology</div>
              <div className='flex gap-4 justify-center items-center mt-3'>
                <p>David White</p>
                <p>June 15,2023</p>  
              </div>
            </div>
            </Link>
          </div>
          </div>
          <div className='bg-blue-300 mt-10 p-14 text-center'>
            <h2 className='font-bold text-xl md:text-3xl mt-4'>Stay in the loop with our latest blog updates</h2>
            <p>Subscribe to our newsletter and never miss an update! Join our community to receive the latest articles</p>
            <div className='justify-center items-center mt-4'>
            <Link href='/subscribe'>
              <div className='flex justify-center items-center align-center text-center gap-2 bg-black text-white h-20 w-32 px-4 -mr-96'>
                <span className='text-white'>Subscribe</span>
                <FaCrown className='text-white'/>
                </div>
              </Link>
              </div>
          </div>

          <div className='flex font-bold mt-16 mb-8 gap-4'>
          <LuTriangleRight/>
            <p>Latest blogs in Entertainment</p>
          </div>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-rows-1 gap-9 mt-10'>
          <div>
            <Link href='/sport'>
            <Image src='/id16.jpg' alt='fun' width='800' height='400' className='h-[280px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-black mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline ml-16'>Sports Nutrition: A Comprehensive Guide</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[290px] left-5 box-border unicode-isolate bg-blue-400">Sport</div>
              <div className='flex gap-4 mt-3 text-center'>
                <p>Jessica Miller</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>
          <div>
            <Link href='/game'>
            <Image src='/id18.jpg' alt='fun' width='800' height='400' className='h-[280px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-black mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline ml-28 mt-10'>Exploring Virtual Reality Gaming</span>
              <div className="text-black p-4 text-xs leading-3 inline-block absolute bottom-[290px] left-5 box-border unicode-isolate bg-red-300">Game</div>
              <div className='flex gap-4 mt-3'>
                <p>Jesscia White</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>
          <div>
            <Link href='/education'>
            <Image src='/id10.jpg' alt='fun' width='800' height='400' className='h-[280px] hover:scale-110 transition-all'/>
            <div className="relative bottom-0 left-0 text-black mb-2">
              <span className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 inline ml-16'>The Psychology of Learning- Insights for</span>
              <div className='font-bold bg-white direction-1tr whitespace-pre-wrap break-clone mb-0 p-4 text-base leading-7 text-center'>Educators</div>
              <div className="text-black p-4 text-xs leading-4 inline-block absolute bottom-[330px] left-5 box-border unicode-isolate bg-fuchsia-400">Education</div>
              <div className='flex gap-4'>
                <p>Sophie Roberts</p>
                <p>June 15,2023</p>
              </div>
            </div>
            </Link>
          </div>
          </div>

          <div>
            <Link href='https://webflow.com/templates/designers/webestica'>
            <Image src='/webflow.jpg' alt='/' width='800' height='400' className='h-[200px] w-[80%] ml-[140px] mt-24'/>
            </Link>
          </div>
    </section>
  )
}