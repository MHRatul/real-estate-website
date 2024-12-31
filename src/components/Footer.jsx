import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div>
            <div>
                <img src={assets.logo_dark} alt='' />
                <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
                <div className='flex justify-center gap-4'>
                    <img src={assets.facebook_icon} alt='' className='w-6 h-6'/>
                    <img src={assets.twitter_icon} alt='' className='w-6 h-6'/>
                    <img src={assets.instagram_icon} alt='' className='w-6 h-6'/>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
        <div></div>
    </div>
  )
}

export default Footer