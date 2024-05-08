import React from 'react'


export default function page() {
  return (
    <div className='w-[90%] pl-[90px]'>
      <div  className='bg-blue-300 text-center mt-20 p-20'>
            <h1 className='text-6xl font-bold'>Style Guide</h1>
            <p>Manage div cla the look and feel of the entire website from our style guide. Style and components used on the site are documented here, and any changes made will be immediately visible across all pages.</p>
      </div>
      <div className='mt-20 border-2 border-black'>
        <div className='bg-black p-9 mt-4 mr-5 ml-5'>
        <h2 className='font-bold text-2xl'>Buttons</h2>
        <p>A variety of button styles are available throughout the website.</p>
        </div>
        <div className='mt-20 mb-10 flex gap-20'>
          <button className='h-{150px] w-[150px] bg-black p-5 text-white ml-10'>Button Black</button>
          <button className='h-{150px] w-[150px] bg-white p-5 text-black border-2 border-black'>Button White</button>
        </div>
      </div>
      <div className='mt-20 border-2 border-black'>
        <div className='bg-black p-9 mr-3 ml-3 mt-4'>
        <h2 className='font-bold text-2xl'>Blockquote</h2>
        <p>Styling for blockquotes.</p>
        </div>
        <div>
          <p className='mt-20 bg-yellow-300 p-10 text-center ml-5 mr-5 mb-5'>This is a blockquote. Lorem comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up its enjoyment <br /> agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing although the material does <br /> the exercise of. Up attempt offered ye civilly so sitting to. Of acceptance insipidity remarkably is an invitation.</p>
        </div>
      </div>
      <div className='mt-20 border-2 border-black'>
        <div className='bg-black p-9'>
        <h2>Margins</h2>
        <p>Helper margin classes are available to add a margin between elements and keep spacing values consistent and unified throughout the site.</p>
        </div>
      </div>
      <div>
        <h3>Margin bottom 0px <span className='bg-blue-400'>No Margin</span></h3>
      </div>
      <div>
        <h3>Margin bottom 4px <span>Margin Bottom 4</span></h3>
      </div>
      <div>
        <h3>Margin bottom 8px <span>Margin Bottom 8</span></h3>
      </div>
      <div></div>
    </div>
       
       
  )
}
