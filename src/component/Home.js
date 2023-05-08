import React from 'react'
import ab from '../assets/ab.jpg'
import { Footer } from './Footer'

export const Home = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 md:ml-60 ml-10  '>
    <div>
      <h1 className='font-bold text-[30px] mt-20'>Virtual health care <br /> for you</h1>
      <p className='mt-6'>Trafalgar provides progressive and affodable <br /> healthcare accessible on mobile and online <br /> for everyone</p>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-10">Consult today</button>
    </div>

      <div>
        <img src={ab} alt="" className='md:w-[500px] w-[300px]' />
      </div>

    </div>

    <div className='mt-5'>
      <Footer />
    </div>
    </>
  )
}
