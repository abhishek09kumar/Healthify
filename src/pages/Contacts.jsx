import React from 'react'
import { assets } from '../assets/healthify_assets/assets_frontend/assets'

const Contacts = () => {
  return (
    <div className='dark:bg-gray-900 text-white min-h-screen flex flex-col '>
      <div className=''>
        <p className='text-3xl text-center p-10 font-semibold'>CONTACT US</p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 flex-grow mb-40 '> 
        <img
          src={assets.contact_image}
          alt="Contact Us"
          className='w-full md:max-w-[360px] object-cover'
        />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-white'>
            OUR OFFICE
          </p>
          <p className='my-1 text-sm' >
            00000 Willms Station, Suite 000, Washington, USA
          </p>
          <p className='text-sm'>
            Tel: (000) 000-0000
            <br />
            Email: greatstackdev@gmail.com
          </p>
          <p className='font-semibold text-lg '>CAREERS AT HEALTHIFY</p>
          <p className=' text-sm'>
            Learn more about our teams and job openings.
          </p>
          <button className='text-white font-semibold border border-opacity-35 rounded-sm border-white bg-teal-700 p-1'>Explore Jobs</button>
        </div>
      </div>
      
    </div>
  )
} 

export default Contacts
