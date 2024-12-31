import React from 'react'
import { assets } from '../assets/assets'
import { IoIosCall } from "react-icons/io";
import { IoMailOpen } from 'react-icons/io5';
import {  FaLinkedin, FaLocationDot } from 'react-icons/fa6';
import { ImFacebook2 } from 'react-icons/im';
import { FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center '>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt='' />
                <p className='text-gray-500 max-w-80 mt-4 text-justify ...'>Passionate About Properties, Dedicated to Your Vision. We are a leading real
                     estate company dedicated to providing exceptional services to our clients.</p>
                <div className='flex item-left mt-2 gap-4'>
                    <p className='text-2xl text-blue-700 hover:text-blue-400'><ImFacebook2 /></p>
                    <p className='text-2xl text-blue-300 hover:text-blue-100'><FaTwitterSquare /></p>
                    <p className='text-2xl text-blue-600 hover:text-blue-300'><FaLinkedin /></p>
                </div>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-lg text-white font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className="text-gray-500 hover:text-gray-300">Home</a>
                    <a href="#About" className="text-gray-500 hover:text-gray-300">About Us</a>
                    <a href="#Contact" className="text-gray-500 hover:text-gray-300">Contact Us</a>
                    <a href="#" className="text-gray-500 hover:text-gray-300">Privacy Policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-lg text-white font-bold mb-4'>Contact</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <li className='flex items-center gap-2'><IoIosCall/> +880152-1431-510</li>
                    <li className='flex items-center gap-2'><IoMailOpen/> estate@gmail.com</li>
                    <li className='flex items-center gap-2'><FaLocationDot/> 123 Main Street, City, Country</li>
                </ul>
                <div className='flex flex-col md:flex-row gap-2 mb-8'>
                    <input type='email' placeholder='Enter your email' className='bg-gray-800 text-white p-2 px-4 py-2 mt-4 border border-gray-100 focus:outline-none w-full
                    md:w-auto rounded'/>
                    <button className=' bg-gradient-to-r from-blue-500 to-blue-500 hover:from-blue-500 hover:to-blue-400 ... text-white px-4 py-2 mt-4 rounded'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py=4  container mx-auto text-center'>
            <p className='text-gray-500 text-center mt-4 mb-4'>Copyright © M H Ratul. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer