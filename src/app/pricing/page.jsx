import React from 'react'

export default function page() {
  return (
    <div className='flex items-start'>
        <div className='p-24'>
            <h1 className='text-3xl font-bold'>Access premium content</h1>
            <p className='p-4'>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero <br /> vitae erat.</p>
            <ol className='p-8'>
                <li>Full article access</li>
                <li>Weekly emails</li>
                <li>No advertisement</li>
            </ol>
        </div>
        <div className='text-black bg-yellow-400 p-20 m-auto'>
            <p className='text-5xl font-bold'>$ 4.99 USD</p>
            <p className='font-bold p-2'>Stay on top of the ever-changing world with our <br />
                exclusive premium content.</p>
            <div className='p-9 border-solid border-black b-2   '>
            <button type="submit">Add to Cart</button>
            </div>
        </div>
    </div>
  )
}
