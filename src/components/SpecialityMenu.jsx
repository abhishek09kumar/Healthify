import React from 'react'
import { Link } from 'react-router-dom'  
import { specialityData } from '../assets/healthify_assets/assets_frontend/assets'

const SpecialityMenu = () => {
  return (
    <div id="speciality" className='bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white flex-col flex items-center gap-4 py-40 '> 
        <h1>Find By Speciality</h1>
        <p>Simple browse through our extensive list of trusted doctors, schedule your appointment hassle-free</p>
        <div className='grid grid-cols-2 md:grid-cols-6 gap-4 py-5'>
            {specialityData.map((data, index) => (
                <Link 
                  onClick={()=>scrollTo(0,0 )}
                  key={index} 
                  to={`/doctors/${data.speciality}`} 
                  className="flex flex-col items-center justify-center "
                >
                    <img 
                      src={data.image} 
                      alt={data.speciality} 
                      className='w-14 sm:w-16 mb-2 border  border-transparent hover:border-blue-600  transition-all duration-300 hover:border-y-3 hover:border-x-4 rounded-full ' 
                    />
                    <p className="text-center">{data.speciality}</p>
                </Link>
            ))}
        </div>
    </div>  
  )
}

export default SpecialityMenu
