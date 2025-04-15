import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useState, useEffect } from 'react';
import { assets } from '../assets/healthify_assets/assets_frontend/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointments = () => {
  const { docId } = useParams();
  const { doctors ,currencySymbol} = useContext(AppContext);

  const [docInfo, setdocInfo] = useState(null);
  const [docSlots, setdocSlots] = useState([]);
  const [slotIndex,setdocSlotsIndex]=useState(0);
  const [slotTime,setSlotTime]=useState('');  
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setdocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setdocSlots([]);

    let today = new Date(); // getting current date
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today); // getting date with index
      currentDate.setDate(today.getDate() + i);
      
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);
      
      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      
      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hours: '2-digit', minutes: '1-digit' });
        
        // add slots to the array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        });
        
        // incrementing 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      
      setdocSlots((prevSlots) => ([...prevSlots, timeSlots]));
    }
  };
  
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);
  
  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);
  
  useEffect(() => {
    //console.log(docSlots);
  }, [docSlots]);
  


  return (
    docInfo && (
      <div className="dark:bg-gray-900 text-white py-10 px-5">
        <div className="flex justify-center items-center">
          {/* Card container */}
          <div className="flex gap-10 bg-gray-800 rounded-lg p-5 shadow-lg w-full max-w-4xl">

            {/* Left - Doctor Image */}
            <div className="flex-shrink-0">
              <img
                src={docInfo?.image}
                alt={docInfo?.name}
                className="h-64 w-64  "
              />
            </div>

            {/* Right - Doctor Information */}
            <div className="flex flex-col justify-between">
              {/* Doctor's Name and Verification Badge */}
              <div className="flex items-center gap-3">
                <p className="text-2xl font-semibold">{docInfo.name}</p>
                <img
                  src={assets.verified_icon}
                  alt="Verified"
                  className="w-6 h-6"
                />
              </div>
              
              {/* Doctor's Degree and Specialty */}
              <p className="text-sm">{docInfo.degree} - {docInfo.speciality}</p>
              <p className="text-sm">{docInfo.experience} years of experience</p>

              {/* About the Doctor */}
              <div className="mt-5">
                <p className="font-semibold text-lg">About</p>
                <p className="text-sm">{docInfo.about}</p>
              </div>

              {/* Book Appointment Button */}
              <div className="mt-5">
                <p className='font-semibold'>Appointment Fee : {currencySymbol} {(docInfo.fees*10)/2}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Available Slots */}
        <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-white-700'>
          <p className='font-semibold '>Booking Slots</p>
          <div className='flex gap-4 item-center w-full overflow-x-scroll mt-4'>
        {docSlots.map((item,index)=>(
  <div key={index} onClick={()=>setdocSlotsIndex(index)} className= {`text-center py-3 w-14 rounded-full cursor-pointer border hover:border-teal-700 ${slotIndex === index ? 'dark:bg-teal-600   text-white border border-teal-600' : 'border border-white'} `} >
    <p>{item[0] && weekDays[item[0].datetime.getDay()]}</p>
    <p>{item[0] && item[0].datetime.getDate()}</p>
  </div>
))}
        </div>mb-2
        <div className='flex item-center gap-3 w-3/5  overflow-x-scroll mt-4'>
          {docSlots.length && docSlots[slotIndex].map((item,index)=>(
            <p key={index} className={`text-center text-sm py-4 px-2 w-full rounded-full cursor-pointer border hover:border-teal-600 ${item.time === slotTime ? 'dark:bg-teal-600 text-white border  border-teal-600' : 'border border-white'} }`}
               onClick={()=>setSlotTime(item.time)}>
              {new Date(item.datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
            </p>
          ))}
        </div>
        <button className='mt-5 bg-teal-700 rounded-lg mb-20 p-2 '>Book Now</button>
        </div>


        {/* Listing Related Doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointments;
