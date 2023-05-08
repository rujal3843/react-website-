import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";

export const Nav = () => {
  const [nav, setNav] = useState(false)
  const handleclick = () => setNav(!nav)

  return (
    <div className='w-full h-[100px] flex text-gray-800 justify-between items-center p-4 uppercase font-bold'>
      <div>
        <h1 className='text-[20px] ml-20 lowercase'> <span className='border rounded bg-blue-500 text-white px-2 uppercase'>T</span>Trafalgar</h1>
      </div>

      {/* menu */}

      <ul className='hidden md:flex'>
        <li><NavLink to='/'  style={({isActive})=> {
          return {backgroundColor: isActive? 'green':''}
        }}>Home</NavLink></li>
        <li><NavLink to='/service'  style={({isActive})=> {
          return {backgroundColor: isActive? 'green':''}
        }}>Service</NavLink></li>
        <li><NavLink to='/about'  style={({isActive})=> {
          return {backgroundColor: isActive? 'green':''}
        }}>About</NavLink></li>
        <li><NavLink to='/articel'  style={({isActive})=> {
          return {backgroundColor: isActive? 'green':''}
        }}>Articel</NavLink></li>
        <li><NavLink to='/contact'  style={({isActive})=> {
          return {backgroundColor: isActive? 'green':''}
        }}>Contact</NavLink></li>
      </ul>


      {/* icons */}
      <div onClick={handleclick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}

      <ul className={
            !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[white] flex flex-col justify-center items-center'
       }>
        <li className='py-6 text-4xl'><NavLink onClick={handleclick} to='/'>Home</NavLink></li>
        <li className='py-6 text-4xl'><NavLink onClick={handleclick} to='/service'>Service</NavLink></li>
        <li className='py-6 text-4xl'><NavLink onClick={handleclick} to='/About'>About</NavLink></li>
        <li className='py-6 text-4xl'><NavLink onClick={handleclick} to='/articel'>Articel</NavLink></li>
        <li className='py-6 text-4xl'><NavLink onClick={handleclick} to='/contact'>Contact</NavLink></li>

      </ul>



    </div>
  )
}
