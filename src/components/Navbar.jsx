import React from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt='logo' />
            <ul className='hidden md:flex text-white gap-7'>
                <a href='#Header' className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href='#Header' className='cursor-pointer hover:text-gray-400'>About</a>
                <a href='#Header' className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href='#Header' className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
            <button className='hidden md:block text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-full'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar