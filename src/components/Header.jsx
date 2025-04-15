import React from 'react'
import { assets } from '../assets/healthify_assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:pt-20  lg:pr-36  bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 text-gray-800 dark:text-white  shadow-lg">
      
      {/* Left side: Content with text and images */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-gray-800 dark:text-white">
          Book Appointment <br /> With Trusted Doctors
        </h1>
        <div className="space-y-4">
          <img 
            className=" md:w-28 mx-auto md:mx-0" 
            src={assets.group_profiles} 
            alt="Profiles of doctors"
          />
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            Simply browse through our extensive list of doctors, <br /> schedule your appointment hassle-free.
          </p>
        </div>
        <a 
          href="#speciality" 
          className="inline-flex items-center px-2 py-2 bg-blue-600 hover:bg-blue-700 text-white font-small text-md rounded-lg transition duration-300 ease-in-out"
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="Arrow" className="ml-2 w-4 h-4" />
        </a>
      </div>
        
      {/* Right side: Image */}
      <div className="mt-10 md:mt-0">
        <img 
          className="w-64 md:w-80  lg:w-96" 
          src={assets.header_img} 
          alt="Header Illustration"
        />
      </div>
    </div>
  );
}

export default Header;
