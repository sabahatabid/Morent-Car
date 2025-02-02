import React from "react";
import { BiRadioCircleMarked } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuArrowDownUp } from "react-icons/lu";

const Content = () => {
  return (
    <div className="bg-contentBg w-full h-auto py-10">
      {/* Ads Section */}
      <div className="w-full flex flex-col md:flex-row justify-center gap-5 items-center px-5">
        {/* Ads 1 */}
        <div className="bg-Ads1 rounded-[15px] p-7 flex flex-col justify-between shadow-lg max-w-lg">
          <div>
            <h1 className="text-[24px] font-bold">The Best Platform for Car Rental</h1>
            <p className="text-sm mt-2">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <button className="px-5 py-2 bg-primary500 text-black rounded-[10px] hover:bg-primary600 transition">
              Rental Car
            </button>
            <img src="./image1.png" alt="Ad 1" className="w-24 h-auto" />
          </div>
        </div>
        {/* Ads 2 */}
        <div className="bg-primary500 text-black rounded-[15px] p-7 flex flex-col justify-between shadow-lg max-w-lg">
          <div>
            <h1 className="text-[24px] font-bold">Easy Way to Rent a Car at a Low Price</h1>
            <p className="text-sm mt-2">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <button className="px-5 py-2 bg-Ads1 text-black rounded-[10px] hover:bg-Ads2 transition">
              Rental Car
            </button>
            <img src="./image2.png" alt="Ad 2" className="w-24 h-auto" />
          </div>
        </div>
      </div>

      {/* Pick-Up & Drop-Off Section */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-5 mt-10 px-5">
        {/* Pick-Up Card */}
        <div className="bg-white rounded-[10px] shadow-md p-5 max-w-xl w-full">
          <div className="flex items-center gap-2">
            <BiRadioCircleMarked className="text-blue-800 text-[25px]" />
            <p className="font-medium">Pick-Up</p>
          </div>
          <div className="flex justify-between items-center mt-5">
            {/* Location */}
            <div className="flex flex-col w-1/3">
              <p className="font-bold">Location</p>
              <div className="flex justify-between items-center border-b border-gray-300 py-2">
                <p className="text-gray-400 text-sm">Select your city</p>
                <RiArrowDropDownLine className="text-[20px]" />
              </div>
            </div>
            {/* Date */}
            <div className="flex flex-col w-1/3">
              <p className="font-bold">Date</p>
              <div className="flex justify-between items-center border-b border-gray-300 py-2">
                <p className="text-gray-400 text-sm">Select your date</p>
                <RiArrowDropDownLine className="text-[20px]" />
              </div>
            </div>
            {/* Time */}
            <div className="flex flex-col w-1/3">
              <p className="font-bold">Time</p>
              <div className="flex justify-between items-center border-b border-gray-300 py-2">
                <p className="text-gray-400 text-sm">Select your time</p>
                <RiArrowDropDownLine className="text-[20px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Swap Icon */}
        <div className="w-14 h-14 bg-primary500 rounded-full flex items-center justify-center shadow-md">
          <LuArrowDownUp className="text-white text-[24px]" />
        </div>

        {/* Drop-Off Card */}
        <div className="bg-white rounded-[10px] shadow-md p-5 max-w-xl w-full">
          <div className="flex items-center gap-2">
            <BiRadioCircleMarked className="text-blue-800 text-[25px]" />
            <p className="font-medium">Drop-Off</p>
          </div>
          <div className="flex justify-between items-center mt-5">
            {/* Location */}
            <div className="flex flex-col w-1/3">
              <p className="font-bold">Location</p>
              <div className="flex justify-between items-center border-b border-gray-300 py-2">
                <p className="text-gray-400 text-sm">Select your city</p>
                <RiArrowDropDownLine className="text-[20px]" />
              </div>
            </div>
            {/* Date */}
            <div className="flex flex-col w-1/3">
              <p className="font-bold">Date</p>
              <div className="flex justify-between items-center border-b border-gray-300 py-2">
                <p className="text-gray-400 text-sm">Select your date</p>
                <RiArrowDropDownLine className="text-[20px]" />
              </div>
            </div>
            {/* Time */}
            <div className="flex flex-col w-1/3">
              <p className="font-bold">Time</p>
              <div className="flex justify-between items-center border-b border-gray-300 py-2">
                <p className="text-gray-400 text-sm">Select your time</p>
                <RiArrowDropDownLine className="text-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;




