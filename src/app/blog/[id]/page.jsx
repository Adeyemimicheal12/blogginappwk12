import { items } from '@/app/category/page'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page({params}) {
    const blogpost = items.find(post => post.title.split(' ').join('-') == params.id)
    const relatedart = items.filter(item => (item.category == blogpost.category) && (item.title !== blogpost.title))
  return (
    <article className='w-4/5 m-auto'>
        <Image src={`/id${blogpost.id}.jpg`} alt={blogpost.title} width='500' height='500' className='w-screen'/>

        <h2>{blogpost.title}</h2>
        <h2 className='font-bold text-2xl mt-2 mb-2 underline text-center'>DESCRIPTIONS</h2>
        {
            blogpost.descriptions.map((para,index) => (
                <p key={index} className='text-center'>{para}</p>
            ))
        }

        <section>
          <h2 className='font-bold text-2xl  mt-14 underline text-center'>RELATED ARTICLES</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {relatedart.map(item =>(
          <Link key={item.id} href={`/blog/${item.title.split(' ').join('-')}`} title={item.title}>
            <section  className={` text-black bg-cover h-[300px] mt-11`} style={{backgroundImage: `url(/id${item.id}.jpg)`}}>
                <h2>{item.title}</h2>
            </section>
          </Link>
        ))}
    </div>
        </section>
    </article>
  )
}
