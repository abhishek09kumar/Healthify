import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          <Link to="/">Logo</Link>
        </div>

        <div className="lg:flex hidden space-x-8">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4">
          <Link to="/" className="block text-white hover:text-gray-300 py-2">Home</Link>
          <Link to="/about" className="block text-white hover:text-gray-300 py-2">About</Link>
          <Link to="/services" className="block text-white hover:text-gray-300 py-2">Services</Link>
          <Link to="/contact" className="block text-white hover:text-gray-300 py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
