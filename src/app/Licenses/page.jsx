import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className='pt-24  w-[90%] pl-[90px]'>
        <div className='text-center bg-blue-300 p-5'>
            <h1 className='text-5xl font-bold p-10'>Licenses</h1>
            <p>All graphical assets in this template are licensed for personal and commercial use. If you&apos;d like to use a specific asset, please check the license below.</p>
        </div>
        </div>
        <div className='pt-24 w-[90%] pl-[90px]'>
        <div className='p-2 border-2 border-black'>
            <p className='bg-red-200 p-5 text-2xl font-semibold'>Photography</p>
            <p className='p-9'>All images in this template are sourced from Pexels and Freepik and, are free for commercial use. Check out the license for Pexels <Link href='https://www.pexels.com'>here</Link> and Freepik <Link href='https://www.freepikcompany.com/legal'>here</Link></p>
        </div>
        </div>
        <div className='pt-24 w-[90%] pl-[90px]'>
        <div className='p-2 border-2 border-black'>
            <p className='bg-red-200 p-5 text-3xl font-semibold'>Icons</p>
            <p className='p-9'>All Icons in this template are sourced from Iconstica icon. Check out the license for <Link href='https://www.iconstica.com/'>Iconstica here.</Link></p>
        </div>
        </div>
        <div className='pt-24 w-[90%] pl-[90px] pb-16'>
        <div className='p-2 border-2 border-black'>
            <p className='bg-red-200 p-5 text-3xl font-semibold'>Fonts</p>
            <p className='p-9'>All fonts used in this template are available to use freely under the Google fonts License, Check out the license for <Link href='https://fonts.google.com/specimen/Roboto/about'>Roboto fonts license.</Link></p>
        </div>
        </div>
    </div>
  )
}
