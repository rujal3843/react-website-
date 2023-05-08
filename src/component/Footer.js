import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-blue-700 min-h-80 w-full text-white grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-10'>
      <div className='mt-10 '>
        <h1 className='text-[20px] ml-20 font-bold'> <span className='border rounded bg-blue-500 text-white px-2 '>T</span>Trafalgar</h1>
        <p className='mt-4 ml-12'>Trafalgar provides progressive, and affordable
          healthcare, accessible on mobile and online for everyone</p>
        <p className='mt-5 ml-12'>©Trafalgar PTY LTD 2020. All rights reserved</p>
      </div>

      <div className='mt-10 ml-40'>
       <h1 className='mb-4 font-bold text-[20px]'>Company</h1>
        <p className='my-2'>About</p>
        <p className='my-2'>Testimonals</p>
        <p className='my-2'>Find a doctor</p>
        <p className='my-2'>Apps</p>
      </div>

      <div className='mt-10 ml-40 md:ml-16'>
       <h1 className='mb-4 font-bold text-[20px]'>Region</h1>
        <p className='my-2'>Indonesia</p>
        <p className='my-2'>Singapore</p>
        <p className='my-2'>Hongkong</p>
        <p className='my-2'>Canada</p>
      </div>

      <div className='mt-10 ml-40 md:ml-1'>
       <h1 className='mb-4 font-bold text-[20px]'>Help</h1>
        <p className='my-2'>Help center</p>
        <p className='my-2'>Contact support</p>
        <p className='my-2'>Instructions</p>
        <p className='my-2'>How it works</p>
      </div>




    </div>
  )
}
