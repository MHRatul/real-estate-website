import React from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardToShow] = useState(1);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1 );
  };

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span
         className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
        <p className=' text-center text-gray-500 max-w-80  mb-8 mx-auto'>Crafting Spaces, Building Legacies-Epic Real Estate Project Portfolio</p>

        {/* Slider buttons */}

        <div className='flex justify-end items-center mb-8'>
          <button onClick={prevProject}
          className='p-3 bg-gray-200 rounded mr-2 aria-label="Previous Project'>
            <img src={assets.left_arrow} alt='Previous' />
          </button>
          <button onClick={nextProject}
          className='p-3 bg-gray-200 rounded mr-2 aria-label="Next Project'>
            <img src={assets.right_arrow} alt='Next' />
          </button>
        </div>

        {/* Projects slider container */}

        <div className='overflow-hidden'>
          <div className='flex gap-8 transition-transform duration-500 ease-in-out'>
            {projectsData.map((project, index)=>(
              <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                <div className='absolute bottom-5 left-0 right-0 flex justify-center w-full p-4'>
                  <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                    <h2 className='text-xl text-gray-800 font-semibold'>{project.title}</h2>
                    <p className='text-sm text-gray-500'>
                      {project.price} <span>|</span> {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Projects