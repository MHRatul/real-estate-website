import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'motion/react';
const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8866eb3e-37c6-4ef2-b66d-bb3a1f83c0e3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult();
      toast.success('Form Submitted Successfully')
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0, x:-100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x:0 }}
      viewport={{ once: true }}

    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mt-20 mb-2'>Contact <span className='underline
         underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
        <p className='text-center text-gray-500 max-w-80 mb-12 mx-auto'>Get in touch with us today and let us help you find your dream home</p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    Your Name :
                <input type='text' name='Name' placeholder='Your Name' required className='w-full border border-gray-300 rounded  py-3 px-4 mt-2'/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email :
                <input type='email' name='Email' placeholder='Your Email' required className='w-full border border-gray-300 rounded  py-3 px-4 mt-2'/>
                </div>
            </div>
            <div className='my-6 text-left'>
                Your Message :
                <textarea name='Message' placeholder='Your Message' required className='w-full border border-gray-300 rounded
                 py-3 px-4 mt-2 h-48 resize-none'></textarea>
            </div>
            <div className='my-6 text-left'>
            <button className='bg-gradient-to-r from-blue-500 to-blue-500 hover:from-blue-500 hover:to-blue-400 ...
            text-white px-8 py-2 rounded'>{ result ? result : "Send Message"}</button>
            </div>
        </form>
    </motion.div>
  )
}

export default Contact