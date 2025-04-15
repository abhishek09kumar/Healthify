import React, { useEffect, useState }from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';//

const RelatedDoctors = ({speciality,docId}) => {
    const {doctors}= useContext(AppContext);
    const [relDoc, setRelDoc]=useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        if(doctors.length >0 && speciality){
            const relatedDoctors = doctors.filter((doc)=> (doc.speciality === speciality) && (doc._id != docId));
            setRelDoc(relatedDoctors);
        }
        
    },[doctors,speciality,docId])
    
  return (
    <div className='font-semibold'>Related Doctors ▽
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  gap-4 ml-10 py-10">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {navigate(`/appointment/${item._id}`);scrollTo(1,1)}} // Navigate on card click
            key={index}
            className="bg-gray-900 w-56 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            {/* Doctor Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-56 h-44 object-cover" // Reduced the height of the image
            />

            {/* Doctor Details */}
            <div className="p-3">
              {/* Availability Badge */}
              <div className="flex items-center space-x-1">
                <span className="bg-green-500 w-2 h-2 rounded-full"></span>
                <span className="text-green-500 text-xs">Available</span>
              </div>

              {/* Doctor Name and Speciality */}
              <h2 className="text-sm font-bold text-white mt-2">{item.name}</h2>
              <p className="text-gray-400 text-xs">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedDoctors