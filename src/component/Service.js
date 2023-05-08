import React from 'react'
import search from '../assets/search.jpg'
import medicine from '../assets/medicine.jpg'
import consultant from '../assets/consultant.jpg'
import detail from '../assets/detail.jpg'
import emergency from '../assets/emergency.jpg'
import tracking from '../assets/tracking.jpg'
import { Footer } from './Footer'

export const Service = () => {
  return (
    <div className=''>
      <h1 className='text-[25px] text-center font-bold '>Our services</h1>
      <p className=' md:text-center md:mx-64 md:mt-5'>We provide to you the best choices for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualidied doctors you can consult with us which type of service is suitable for your health</p>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-10  md:gap-5 md:mx-28 md:mt-20 '>
        
        <div className='shadow-lg'>
          <div className='ml-8'>
        <img src={search} alt="" className="h-20" />
          <h1 className='font-bold text-[20px]'>Search doctor</h1>
          <p className='text-[15px]'>choose your doctor form thousands <br /> of specialist general and trusted  <br /> hospitals</p>
          </div>
        </div>


        <div className='shadow-lg'>
        <div className='ml-8'>
          <img src={medicine} alt=""  className="h-20"/>
          <h1 className='font-bold text-[20px]'>Online Pharmacy</h1>
          <p>Buy your medicines with our <br /> movile application with a simple <br /> delivery system </p>
        </div>
        </div>
        

        <div className='shadow-lg'>
        <div className='ml-8'>
          <img src={consultant} alt=""  className="h-20"/>
          <h1 className='font-bold text-[20px]'>Consultation</h1>
          <p>Free consultation with out trusted <br /> doctors and get the best <br />recomendations</p>
        </div>
        </div>


        <div className='shadow-lg'>
        <div className='ml-8'>
          <img src={detail} alt=""  className="h-20"/>
          <h1 className='font-bold text-[20px]'>Details info</h1>
          <p>Free consultation with our trusted <br />doctors and get the best <br />recomendations</p>
        </div>
        </div>


        <div className='shadow-lg'>
        <div className='ml-8'>
          <img src={emergency} alt=""  className="h-20"/>
          <h1 className='font-bold text-[20px]'>Emergency care</h1>
          <p>You can get 24/7 urgent care for <br />yourself or your children and your <br />lovely family</p>
        </div>
        </div>


        <div className='shadow-lg'>
        <div className='ml-8'>
          <img src={tracking} alt=""  className="h-20"/>
          <h1 className='font-bold text-[20px]'>Tracking</h1>
          <p>Track and save your medical history <br />and health data</p>
        </div>
        </div>


      </div>
      <div className='mt-10'>
      <Footer />
    </div>

    </div>
  )
}
