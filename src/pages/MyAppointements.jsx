import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="dark:bg-gray-900 text-white p-5">
      <div className="my-20">
        <p className="text-xl font-semibold">My Appointments</p>
        <div>
          {doctors.slice(0, 3).map((item, index) => (
            <div className="flex flex-col sm:flex-row items-center gap-6 my-14" key={index}>
              {/* Image on the left */}
              <div className="w-full sm:w-1/4">
                <img src={item.image} alt={item.name} className="w-full h-72 rounded-lg" />
              </div>
              {/* Details below the image */}
              <div className="flex flex-col gap-1 w-full sm:w-1/2 text-sm sm:text-base">
                <p className="text-lg font-bold">{item.name}</p>
                <p>{item.speciality}</p>
                <p>Availability: {item.availability}</p>
                <p>Fees: {item.fee}</p>
                <p className="font-semibold mt-1">Address</p>
                <p>{item.address.line1}</p>
                <p>{item.address.line2}</p>
              </div>
              {/* Buttons on the right */}
              <div className="flex flex-col gap-4 w-full sm:w-auto">
                <button className="bg-teal-700 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0">
                  Book Appointment
                </button>
                <button className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
