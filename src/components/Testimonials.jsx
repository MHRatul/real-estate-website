import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden ' id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mt-20 mb-2'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Real Stories from Our Satisfied Customers and Satisfied Clients</p>

        <div className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map((testimonial, index) =>(
                <div className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center' key={index}>
                    <img src={testimonial.image} alt={testimonial.alt} className='w-20 h-20 rounded-full mx-auto mb-4'/>
                    <h2>{testimonial.name}</h2>
                    <p className='text-gray-500 text-sm text-center mb-4'>{testimonial.title}</p>
                    <div className='flex justify-center gap-1 text-yellow-500 mb-4'>
                        {Array.from({ length: testimonial.rating }, (_, index) => (
                            <img key={index} src={assets.star_icon} alt='star' className='w-5 h-5' />
                        ))}
                    </div>
                    <p className='text-gray-500 max-w-80 text-justify ... mt-2'>{testimonial.text}</p>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Testimonials