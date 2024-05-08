import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { items } from '@/app/category/page'

export default function Author({params}) {
  return (
    <div className='py-9 bg-red-300'>
    <div className='font-bold text-3xl text-center'>
      <h1>Author</h1>
    </div>
    <div className='grid grid-cols-3'>
      {items.map(item => (
        <div key={item.author}>
          <Image src={`/${item.author.split(' ').join('-')}.jpg`} alt={item.author} width="800" height="700" className='h-[700px] gap-6'/>
          <h2>{item.author}</h2>
        </div>
      ))}
          </div>
    </div>
  )
}
