import React from 'react'
import Catlinks from './Catlinks'
import SocialIcons from './SocialIcons'
import Subscribelinks from './Subscribelinks'
import Pagelinks from './Pagelinks'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='flex gap-x-5 items-start h-[60vh] bg-slate-900 text-white p-5 md:grid-cols-2 sm:grid-cols-1'>
      <div className='flex flex-col gap-y-6'>
        <div className='flex gap-x-2 items-center capitalize'>
        <p>Coming Soon </p>
        </div>
        
        <SocialIcons/>
      </div>
      <div className=''>
        <h2>Category</h2>
        <div className='m-5 hover:underline to-black'>
          <Link href="/category/Sport">
          < Catlinks title='sport' bg='bg-red-700'/>
          </Link>
          <Link href="/category/Fashion">
          < Catlinks title='fashion'  bg='bg-yellow-700'/><br/>
          </Link>
          <Link href="/category/Technology">
          < Catlinks title='technology'  bg='bg-green-700'/>
          </Link>
          <Link href="/category/Game">
          < Catlinks title='game'  bg='bg-orange-700'/><br/>
          </Link>
          <Link href="/category/Education">
          < Catlinks title='education' bg='bg-fuchsia-700'/>
          </Link>
        </div>
      </div>
      <div className='capitalize'>
        <h2>Pages</h2>
        <div className='flex justify-start items-start gap-4 m-5'>
          <ol>
          <Pagelinks title=' ' link='/'/>
          <Pagelinks title='Blog' link='/'/>
          <Pagelinks title='Author'  link='/author'/>
          <Pagelinks title='Pricing' link='/pricing'/>
          <Pagelinks title='About Us' link='/about'/>
          <Pagelinks title='Subscribe' link='/subscribe'/>
          <Pagelinks title='Privacy Policy' link='/privacy'/> 
          </ol>
          <ol>
            <Pagelinks title='Style Guide' link='/styleguide'/>
            <Pagelinks title='Instructions' link='/instruction'/>
            <Pagelinks title='Licenses' link='/Licenses'/>
            <Pagelinks title='Changelog' link='/changelog'/>
            <Pagelinks title='Coming soon' link='/coming-soon'/>
          </ol>
        </div>
      </div>
      <div>
        <h2>Subscribe for more</h2>
        <div className=''>
        <Subscribelinks/>
        </div>
        <p className='p-5'>Designed by <Link href='https://webflow.com/'>Webflow</Link> Adeyemi Powered by Kehinde</p>
      </div>
    </footer>
  )
}

