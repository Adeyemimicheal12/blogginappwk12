import React from 'react'
import { items } from '@/app/category/page'
import Image from 'next/image'
import Link from 'next/link'

export default function Page({params}) {

    const autoDetails = items.find(article => article.author.split(' ').join('-') == params.slug)
  return (
    <div>

    <div className='flex justify-start gap-8 px-6'>
        <Image src={`/${autoDetails.author.split(' ').join('-')}.jpg`} alt={autoDetails.author} width='400' height='500'/>
        
        <div className='flex flex-col gap-y-4'>
            <h2 className='bg-orange-700 text-white capitalize w-1/5 text-center py-4 text-2xl'>{autoDetails.authorDesignation}</h2>
            <h2 className='font-semibold text-5xl capitalize'>{autoDetails.author}</h2>
            <p className='text-xl w-5/6'>{autoDetails.authorDescription}</p>
        </div>  

    </div>

    <div className='py-16'>
        <h2 className='font-semibold text-5xl capitalize'>{autoDetails.author} Articles</h2>

        <div className='grid grid-cols-3 gap-4'>

        {items.filter(item => item.author == autoDetails.author).map(item => (

            <Link key={item.id} href={`/blog/${item.title.split(' ').join('-')}`} title={item.title}>
            <section  className={`p-4 text-black bg-cover h-[300px] mt-11`} style={{backgroundImage: `url(/id${item.id}.jpg)`}}>
                <h2 className='p-4 bg-orange-700 w-4/5 text-gray-300 capitalize'>{item.title}</h2>
            </section>
          </Link>
            ))
    }
        </div>
    </div>
        
    </div>
  )
}