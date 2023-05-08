import React from 'react'
import injection from '../assets/injection.jpg'
import microscope from '../assets/microscope.jpg'
import skin from '../assets/skin.jpg'
import man from '../assets/man.jpg'
import { Footer } from './Footer'
import { HiArrowCircleRight } from 'react-icons/hi'

export const Article = () => {
  return (
    <>
      <div className='mt-20'>

        <div className='bg-[#1CACF4] text-white w-full md:max-w-[900px] h-[300px] border-solid border-2 rounded-md mx-auto px-4 md:px-8'>

          <h1 className='text-center text-[20px] md:text-[30px] font-bold mt-6'>What our customer are saying</h1>

          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-24 '>

            <div className="flex items-center mt-8 md:mt-0">
              <img src={man} alt="" className="rounded-full h-24 w-24 md:h-32 md:w-32 ml-4" />
              <div className="ml-4">
                <span className="block text-lg font-bold">Edward Newgate</span>
                <span className="">Founder Circle</span>
              </div>
            </div>

            <p className='mt-6 md:mt-0'>
              "Our dedicated patient engagement app and web portal allow you access information instantly (no tedious form, long calls, or administrative hassle) and securely."
            </p>

          </div>

        </div>




        {/* next content */}

        <h1 className='text-center font-bold text-[20px] mt-9'>Check out our latest articel</h1>

        <div className='grid grid-cols-1  md:grid-cols-3 gap-5  mt-10 mx-20 md:mx-40'>
          
          <div className='shadow-lg'>
            <img src={injection} className='w-[200px] h-[150px]' alt="" />

            <div className='mx-5 '>
              <h1 className='font-bold'>Diseases detection,check  <br /> up in the laboratory</h1>
              <p className='text-[13px]'>in this case, the role of the health laboratory is very important to do a diseases detection ...</p>
              <button className='text-blue-900 mt-4 flex items-center'>Read more <span className='ml-2'><HiArrowCircleRight /></span> </button>
            </div>
          </div>

          <div className='shadow-lg'>
            <img src={microscope} alt="" className='w-[200px] h-[150px]' />
            <div className='mx-5'>
              <h1 className='font-bold'>Herbal medicines that are<br /> safe for consumption</h1>
              <p className='text-[13px]'>Herbal medicine is very widly used at this time because of its very good gor your health ...</p>
              <button className='text-blue-900 mt-4 flex items-center'>Read more <span className='ml-2'><HiArrowCircleRight /></span> </button>
            </div>
          </div>

          <div className='shadow-lg'>
            <img src={skin} alt="" className='w-[200px] h-[150px]' />
            <div className='mx-5'>
              <h1 className='font-bold'>Natural care for healthy  <br />facial skin</h1>
              <p className='text-[13px]'>A healthy lifestyle should start from now and also for your skin health. There are some ...</p>
              <button className='text-blue-900 mt-4 flex items-center'>Read more <span className='ml-2'><HiArrowCircleRight /></span> </button>
            </div>
          </div>


        </div>

        <div class="flex justify-center">
          <button className='border-solid border-2 border-sky-500 rounded-full px-5 mt-5 mx-auto'>View all</button>
        </div>

      </div>

      <div className='mt-10'>
        <Footer />
      </div>
      
    </>
  )
}
