import React from 'react'
import first from '../assets/First.png'
import Second from '../assets/Second.png'
import { Footer } from './Footer'
import { HiArrowNarrowRight } from 'react-icons/hi';

export const About = () => {
  return (
    <div className=''>
       <div className='grid grid-cols-1 md:grid-cols-2  md:mx-32 '>
        <div className='ml-28 md:ml-0'>
          <img src={first} alt="" className=' h-72' />
        </div>
        <div>
          <h1 className='font-bold  text-center md:text-left md:text-[25px]'>Leading healthcare <br /> provider</h1>
          <p className='mt-8'>Trafagar provides progressive and affodable healthcar,accessible on mobile and online for everyone. To us it's not just work. We take pride in the solutions we deliver</p>
          <button className='border-solid border-2 border-sky-500 rounded-full px-5 py-2 mt-5 '>Learn more</button>

        </div>

       </div>

       <div className='grid grid-cols-1 md:grid-cols-2  md:mx-32 mt-10 '>

        <div>
        <h1 className='font-bold  text-center md:text-left md:text-[25px]'>Download our<br /> mobile apps</h1>
          <p className='mt-8'>Our dedicated patient engaged app and web portal allow you to access information instaneously(no tedeous form, long calls, or administrative hassle) and securely</p>
          <button className='group border-solid border-2 border-sky-500 rounded-full px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
        <div className='ml-28 md:ml-0'>
          <img src={Second} alt="" className=' h-72'/>
        </div>


       </div>
       <div className='mt-10'>
      <Footer />
    </div>
    </div>
  )
}
