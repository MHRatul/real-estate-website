import React from 'react'

const Contact = () => {
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mt-20 mb-2'>Contact <span className='underline
         underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
        <p className='text-center text-gray-500 max-w-80 mb-12 mx-auto'>Get in touch with us today and let us help you find your dream home</p>

        <form>
            <div>
                <div>Your Name</div>
                <input type='text' placeholder='Your Name' className='border border-gray-300 rounded-md p-2 w-full'/>
            </div>
        </form>
    </div>
  )
}

export default Contact