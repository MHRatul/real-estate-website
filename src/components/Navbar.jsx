import React, { useState } from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
    const [showMobileMenu, setMobileMenu] = useState(false)
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt='' />
            <ul className='hidden md:flex text-white gap-7'>
                <a href='#Header' className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href='#Header' className='cursor-pointer hover:text-gray-400'>About</a>
                <a href='#Header' className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href='#Header' className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
            <button className='hidden md:block text-white bg-gradient-to-r
             from-blue-500 to-blue-500 hover:from-blue-500 hover:to-blue-400 ... px-8 py-2 rounded-full'>Sign Up</button>
             <img onClick={()=>setMobileMenu(true)} src={assets.menu_icon} alt='' className='md:hidden w-7 cursor-pointer' />
        </div>

                {/* ---------mobile-menu---------- */}


        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full': 'h-0 w-0' } right-0 top-0 bottom-0 overflow-hidden
         bg-white transition-all`}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img onClick={()=>setMobileMenu(false)} src={assets.cross_icon} alt='' className='w-6' />
            </div>


            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a href="#Header" className="px-4 py-2 round-full inline-block hover:text-gray-400">Home</a>
                <a href="#About" className="px-4 py-2 round-full inline-block hover:text-gray-400">About</a>
                <a href="#Projects" className="px-4 py-2 roun-full inline-block hover:text-gray-400">Projects</a>
                <a href="#Testimonials" className="px-4 py-2 roun-full inline-block hover:text-gray-400">Testimonials</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar