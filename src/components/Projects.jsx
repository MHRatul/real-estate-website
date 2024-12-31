import React from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {
  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span
         className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
        <p className=' text-center text-gray-500 max-w-80  mb-8 mx-auto'>Crafting Spaces, Building Legacies-Epic Real Estate Project Portfolio</p>

        {/* Slider buttons */}

        <div className='flex justify-end items-center mb-8'>
          <button className='p-3 bg-gray-200 rounded mr-2 aria-label="Previous Project'>
            <img src={assets.left_arrow} alt='Previous' />
          </button>
          <button className='p-3 bg-gray-200 rounded mr-2 aria-label="Next Project'>
            <img src={assets.right_arrow} alt='Next' />
          </button>
        </div>

        {/* Projects slider container */}

        <div className='overflow-hidden'>
          <div className='flex gap-8 transition-transform duration-500 ease-in-out'>
            {projectsData.map((project, index)=>(
              <div key={index}>
                <img src={project.image} alt={project.title} />
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Projects