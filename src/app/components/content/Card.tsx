import React from "react";
import { FaHeart, FaGasPump } from "react-icons/fa";
import { SiNginxproxymanager } from "react-icons/si";
import { MdPeople } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const Card = () => {
  return (
    <div className="w-full bg-contentBg py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <p className="text-sm font-semibold">Popular Cars</p>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            View All
          </a>
        </div>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="w-[304px] h-[388px] bg-white shadow-lg rounded-md p-4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-bold">
                Koenigsegg <span className="text-gray-400 text-sm">Sport</span>
              </p>
              <FaHeart className="text-red-600 text-xl cursor-pointer" />
            </div>
            <div className="flex justify-center mb-6">
              <img src="./image2.png" alt="Koenigsegg" className="w-40 h-auto" />
            </div>
            <div className="flex justify-between text-gray-500 text-sm mb-6">
              <div className="flex items-center gap-1">
                <FaGasPump />
                <span>90L</span>
              </div>
              <div className="flex items-center gap-1">
                <SiNginxproxymanager />
                <span>Manual</span>
              </div>
              <div className="flex items-center gap-1">
                <MdPeople />
                <span>2 People</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">
                $99.00/<span className="text-gray-400 text-sm">day</span>
              </p>
              <button className="bg-primary500 text-white px-4 py-2 rounded-md hover:bg-primary600 transition">
                Rent Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[304px] h-[388px] bg-white shadow-lg rounded-md p-4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-bold">
                Nissan GT-R <span className="text-gray-400 text-sm">Sport</span>
              </p>
              <CiHeart className="text-gray-500 text-xl cursor-pointer" />
            </div>
            <div className="flex justify-center mb-6">
              <img src="./image3.png" alt="Nissan GT-R" className="w-40 h-auto" />
            </div>
            <div className="flex justify-between text-gray-500 text-sm mb-6">
              <div className="flex items-center gap-1">
                <FaGasPump />
                <span>80L</span>
              </div>
              <div className="flex items-center gap-1">
                <SiNginxproxymanager />
                <span>Manual</span>
              </div>
              <div className="flex items-center gap-1">
                <MdPeople />
                <span>2 People</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">
                $80.00/<span className="text-gray-400 text-sm">day</span>{" "}
                <span className="line-through text-gray-300">$100.00</span>
              </p>
              <button className="bg-primary500 text-white px-4 py-2 rounded-md hover:bg-primary600 transition">
                Rent Now
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-[304px] h-[388px] bg-white shadow-lg rounded-md p-4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-bold">
                Rolls-Royce <span className="text-gray-400 text-sm">Sport</span>
              </p>
              <FaHeart className="text-red-600 text-xl cursor-pointer" />
            </div>
            <div className="flex justify-center mb-6">
              <img src="./image4.png" alt="Rolls-Royce" className="w-40 h-auto" />
            </div>
            <div className="flex justify-between text-gray-500 text-sm mb-6">
              <div className="flex items-center gap-1">
                <FaGasPump />
                <span>70L</span>
              </div>
              <div className="flex items-center gap-1">
                <SiNginxproxymanager />
                <span>Manual</span>
              </div>
              <div className="flex items-center gap-1">
                <MdPeople />
                <span>2 People</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">
                $96.00/<span className="text-gray-400 text-sm">day</span>
              </p>
              <button className="bg-primary500 text-white px-4 py-2 rounded-md hover:bg-primary600 transition">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
