import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { assets } from '../assets/healthify_assets/assets_frontend/assets';

import { Navigate } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [status,setStatus] =useState(false);
  const [token,setToken]= useState(false); 

  // Toggle dropdown menu
  const toggleDropdown = (e) => {
    e.stopPropagation(); // Stop event propagation
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => {
      const newState = !prevState;
      return newState;
    });
  };

 // Close dropdown and menu when clicking outside
 useEffect(() => {
  const handleClickOutside = (e) => {
    if (isDropdownOpen ) {
      setIsDropdownOpen(false);
     
    }
  };

  document.addEventListener("click", handleClickOutside);
  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, [isDropdownOpen]);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        {/* Logo and Title */}
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUelxljVn0E_yz9uhkcVySMx-MtUvJZzg_knLuWbtWwObGZjfK6jyGq42CXcxmftAtNfg&usqp=CAU"
            onClick={()=>Navigate('/')}
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Healthify
          </span>
        </NavLink>


        {/* Right-side buttons and menu */}
        <div className="  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Profile Dropdown Button */}
         <div className="w-14"> { token ? <div>
          <button
            type="button"
            className=" flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen ? "true" : "false"}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src={assets.profile_pic}
              alt="user photo"
            />
          </button>

          {/* Dropdown Menu */}
          <div
            className={`z-50 ${isDropdownOpen ? "block" : "hidden"} absolute top-12 right-4 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                name@Healthify.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <NavLink
                  to="/my-profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="my-appointments"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  My Appointments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-400 dark:hover:text-white "onClick={()=>setToken(false)}
                >
                  Sign out
                </NavLink>
              </li>
            </ul>
          </div>
          </div>
: <NavLink to="/login" className=" text-teal-500 flex-shrink-0   " onClick={()=>setToken(true)} >Sign In</NavLink> }
</div>
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu (Hidden on smaller screens) */}
        <div className="lg:flex hidden space-x-8">
          <NavLink to="/" className="text-white hover:text-gray-300" activeClassName="underline text-blue-500">
            Home
            <hr className="border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden"></hr>
          </NavLink>
          <NavLink to="/about" className="text-white hover:text-gray-300">
            About
            <hr className="border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden"></hr>
          </NavLink>
          <NavLink to="/doctors" className="text-white hover:text-gray-300">
            All Doctors
            <hr className="border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden"></hr>
          </NavLink>
          <NavLink to="/contact" className="text-white hover:text-gray-300">
            Contact
            <hr className="border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden"></hr>
          </NavLink>
          
        </div>

        {/* Mobile Menu (Visible on smaller devices when toggled) */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full md:hidden`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
                onClick={()=>setIsMenuOpen(false)}
              >
                Home
              <bg className=" h-0.5 justify-center bg-blue-700 m-auto hidden"></bg>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={()=>setIsMenuOpen(false)}
              >
                About
                <bg className=" h-0.5 justify-center bg-blue-700 m-auto hidden"></bg>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/doctors"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={()=>setIsMenuOpen(false)}            >
                All Doctors
                <bg className=" h-0.5 justify-center bg-blue-700 m-auto hidden"></bg>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={()=>setIsMenuOpen(false)}
                >
                Contact
                <bg className=" h-0.5 justify-center bg-blue-700 m-auto hidden"></bg>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
