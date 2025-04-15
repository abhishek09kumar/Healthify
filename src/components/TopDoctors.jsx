import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();  // `useNavigate` should be inside the component
  const {doctors}= useContext(AppContext)

  return (
    <div className="dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Top Doctors To Book</h1>
        <p className="text-lg text-gray-400">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 ml-14 py-10">
        {doctors.slice(0, 8).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)} // Navigate on card click
            key={index}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            {/* Doctor Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-56 h-44  object-cover" // Reduced the height of the image
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

      {/* More Button */}
      <div className="flex justify-center mt-6">
        <button className="text-white font-bold hover:text-blue-500 border px-3 py-2 rounded-lg"
        onClick={()=>{navigate('/doctors') ; scrollTo(0,0)}}>
          more ▽
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;
