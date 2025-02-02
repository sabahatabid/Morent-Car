import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import { CgProfile } from 'react-icons/cg';
import { IoIosSettings } from 'react-icons/io';
import { FaBell, FaHeart } from 'react-icons/fa6';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
      <div className="flex justify-between w-full md:w-auto items-center">
        <h1 className="font-black text-2xl text-primary500">MORENT</h1>
        <div className="flex md:hidden items-center space-x-4">
          <FaHeart className="text-lg" />
          <FaBell className="text-lg" />
          <CgProfile className="text-lg" />
        </div>
      </div>
      <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
        <button className="flex items-center border w-full md:w-auto h-10 px-4 rounded-full shadow-sm">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search something here"
            className="w-full md:w-60 bg-transparent focus:outline-none"
          />
          <HiAdjustmentsHorizontal className="text-gray-400 ml-2" />
        </button>
      </div>
      <div className="hidden md:flex items-center space-x-4 text-xl">
        <FaHeart />
        <FaBell />
        <IoIosSettings />
        <CgProfile />
      </div>
      <Link href="/cart" className="flex items-center text-gray-700 hover:text-blue-500">
          Cart </Link>

        <Link href="/checkout" className="text-gray-700 hover:text-blue-500">
          Checkout
        </Link> 
    </div>
  );
};

export default Navbar;
