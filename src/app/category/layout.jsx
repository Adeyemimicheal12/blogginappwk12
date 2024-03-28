import React from 'react'
import BlogCat from './BlogCat'

export default function layout({children}) {
  return (
    <div className='my-11'>
        <div>
            <BlogCat/>
        </div>
        {children}
    </div>
  )
}
