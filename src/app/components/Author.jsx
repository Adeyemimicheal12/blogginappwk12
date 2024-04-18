import Image from 'next/image'
import React from 'react'
import { items } from '../category/page'

export default function Author() {


  return (
    <div className='py-9 bg-red-300'>
    <div className='font-bold text-3xl text-center'>
      <h1>Author</h1>
    </div>
    <div className='grid grid-cols-3'>
      {items.map(item => (
        <div key={item.id}>
          <Image src={`/${item.author.split(' ').join('-')}.jpg`} alt={item.author} width="800" height="700" />
          <h2>{item.author}</h2>
        </div>
      ))}
    </div>
    </div>
  )
}
