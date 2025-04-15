import React from 'react';
import { assets } from '../assets/healthify_assets/assets_frontend/assets';
import { use } from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate= useNavigate();
    return (
        <div className='bg-gray-900 py-10'>
        <div className=' bg-gray-800 rounded-lg flex px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 text-white'>
                <div className=' flex-1 py-8 sm:py-10 md"py-16 lg:py-20 lg:pl-5 bg-gray-800 p-4 rounded-lg'> 
                    <h1 className='text-2xl  m-0.5 font-semibold'>Book an appointment with the best doctors in town</h1>
                    <p className='mb-8'>Get the best medical consultation from the top doctors in your city</p>
                
                <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='bg-teal-700 font-bold  rounded-md p-2 hover:scale-105 transition-all'>Create Account</button>
                </div>
                
               


                <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                    <img className='w-72 absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} />
            </div>
            </div>
        </div>
    );
}

export default Banner;