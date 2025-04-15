import React from 'react'
import { assets } from '../assets/healthify_assets/assets_frontend/assets'

const About = () => {
  return (
  <div className='dark:bg-gray-900'>
    <div className=' text-center text-2xl pt-10 text-white'>
      <p>ABOUT <span>US</span></p>
    </div>
    <div className='my-10 mx-10 flex flex-col md:flex-row text-white'>
      <img src={assets.about_image} className='w-72 ml-36 md:max-w-[360px]' />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 mx-5 text-sm'>
        <p> Welcome to Healtify, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records. </p>
        <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
        <b>Our Vision</b>
        <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
      </div>
      
    </div>
    <div className='bg-gray-700 text-white text-center mx-20 py-2 my-32 '>
        <p className=' text-xl text-white font-semibold text-center mx-10'>WHY CHOOSE US</p>
      </div>
      <div className='flex flex-col md:flex-row gap-10 mx-40 my-10 text-sm text-white'>
      <div >
        <p className='flex flex-col w-72 border border-gray-600 p-7' ><b >EFFICIENCY </b>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div><div>
        <p className='flex flex-col w-72 border border-gray-600 p-7' ><b >CONVENIENCE</b>Access to a network of trusted healthcare professionals in your area.</p>
        </div><div >
        <p className='flex flex-col w-72 border border-gray-600 p-5' ><b >PERSONALIZATION </b>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
        </div>
       








    <div className="dark:bg-gray-900 min-h-screen p-8">
    {/* Header */}
    <header className="text-white mb-8">
      <h1 className="text-3xl font-bold">Welcome to My App</h1>
      <p className="text-gray-400">Your journey starts here.</p>
    </header>
  
    {/* Card */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-white text-xl font-semibold mb-4">Featured Content</h2>
      <p className="text-gray-400 mb-4">
        Explore our latest features and updates.
      </p>
      <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded">
        Learn More
      </button>
    </div>
  
    {/* Footer */}
    <footer className="mt-8 text-gray-500">
      <p>© 2023 My App. All rights reserved.</p>
    </footer>
  </div>






<div className="dark:bg-gray-900 min-h-screen p-8">
{/* Header */}
<header className="text-white mb-8">
  <h1 className="text-3xl font-bold">Welcome to My App</h1>
  <p className="text-gray-400">Your journey starts here.</p>
  <a href="#" className="text-blue-500 hover:text-blue-400">Learn More</a>
  <button className="text-teal-400 hover:text-teal-300">  Click Me</button>
  <button className="text-purple-500 hover:text-purple-400">  Sign Up</button>
  <span className="text-pink-500"> Limited Time Offer!</span>
</header>

{/* Card */}
<div className="bg-gray-800 p-6 rounded-lg shadow-lg">
  <h2 className="text-white text-xl font-semibold mb-4">Featured Content</h2>
  <p className="text-gray-400 mb-4">
    Explore our latest features and updates.
  </p>
 
  <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded">
    Learn More
  </button>
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
  Submit
</button>
<button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
  Upgrade Now
</button>
</div>

{/* Footer */}
<footer className="mt-8 text-gray-500">
  <p>© 2023 My App. All rights reserved.</p>
  <div className="bg-gray-800 p-4 rounded-lg">
  <p className="text-white">This is a card.</p>
</div>
<div className="bg-gray-800 p-4 rounded-lg">
  <p className="text-white">This is a card.</p>
</div>

<div className="border border-gray-700 p-4 rounded-lg">
  <p className="text-white">This is a bordered section.</p>
</div>
<input className="border border-blue-500 p-2 rounded" placeholder="Enter text" />
</footer>
</div>




<div className="relative h-96">
  {/* Background Image */}
  <img
    src="https://via.placeholder.com/1920x600"
    alt="Header Background"
    className="w-full h-full object-cover"
  />

  {/* Overlay for Better Text Readability */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
      Welcome to Healthify
    </h1>
    
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-">
  Welcome to Healthify
</h1>
    <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
      Your journey to better health starts here. Explore our services and take the first step towards a healthier you.
    </p>
    <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">
      Get Started
    </button>
  </div>
</div>
</div>
  )
}

export default About