import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Added useNavigate for navigation
import { Link } from 'react-router-dom';
import { specialityData } from '../assets/healthify_assets/assets_frontend/assets';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();  // Fetch the 'speciality' param from the URL
  const [filterdoctor, setFilterDoctor] = React.useState([]);  // Set initial state as an empty array
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate(); // For programmatic navigation

  const applyFilter = (speciality) => {
    if (speciality) {
      // Filter doctors based on speciality
      setFilterDoctor(doctors.filter(doc => doc.speciality === speciality));
    } else {
      // Show all doctors if no speciality is selected
      setFilterDoctor(doctors);
    }
  };

  useEffect(() => {
    applyFilter(speciality);  // Apply filter whenever doctors or speciality changes
  }, [doctors, speciality]);

  return (
    <div className="dark:bg-gray-900  py-10 px-4 text-white font-semibold sm:px-6 lg:px-8">
      <div className="grid grid-cols-2  md:grid-cols-6 gap-4 py-5">
        {specialityData.map((data, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            key={index}
            to={`/doctors/${data.speciality}`}
            className="flex flex-col items-center justify-center"
          >
            <img
              src={data.image}
              alt={data.speciality}
              className="w-10 h-10 hover:border-blue-700 rounded-full hover:border-5"
            />
            <p className="text-center">{data.speciality}</p>
          </Link>
        ))}
      </div>
{/* Doctor Cards */}
      <div className="grid my-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 ml-14 py-10">
        {filterdoctor.length > 0 ? (
          filterdoctor.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)} // Navigate on card click
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
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
          ))
        ) : (
          <div className="text-center  text-white">No doctors available for this speciality.</div>
        )}
      </div>
      <div className='mb-72'></div>
    </div>
  );
};

export default Doctors;
