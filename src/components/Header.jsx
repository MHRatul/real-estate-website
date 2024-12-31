import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react"

const Header = () => {
  return (
    <div
      className=" min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <motion.div
      initial={{ opacity: 0, y:100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y:0 }}
      viewport={{ once: true }}
      className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">Explore homes that fit your dreams
          <span className="text-gradient ml-2 ">.</span>
        </h2>
        <div className="flex justify-center gap-4 mt-16">
          <a href="#Project" className="border border-white bg-transparent hover:bg-blue-500  py-3 px-8">Projects</a>
          <a href="#Contact"className="bg-blue-500 border-white py-3 px-8">Contact Us</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
