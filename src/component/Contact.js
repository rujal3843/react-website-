import React from 'react'
import { Footer } from './Footer'

export const Contact = () => {
  return (
    <div className=''>
      <h1 class="text-4xl font-bold text-center ">Contact Us</h1>
      <p class="text-lg text-gray-700 text-center mt-8">Have any questions? We'd love to hear from you.</p>


      <form className="max-w-sm mx-auto mt-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Your Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
        </div>
        <div className="mb-4">
          <label htmlFor="num" className="block text-gray-700 font-bold mb-2">
            Phone No
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="num" type="tel" placeholder="Enter your phone number" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email ID
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email address" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Your message
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Enter your message"></textarea>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Send Message
          </button>
        </div>
      </form>
      <div className='mt-10'>
      <Footer />
    </div>
    </div>
  )
}
