import { FaHeart } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import { SiNginxproxymanager } from "react-icons/si";
import { MdPeople } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const Card2 = () => {
    return (
        <div className="w-full h-fit bg-contentBg mt-5 p-4">
            {/* Section Header */}
            <div className="max-w-[1312px] mx-auto">
                <p className="text-sm text-gray-600 mb-5 font-semibold">Recommendation Cars</p>
                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Individual Card */}
                    {[
                        {
                            name: "All New Rush",
                            type: "SUV",
                            img: "./image5.png",
                            fuel: "90L",
                            transmission: "Manual",
                            capacity: "6 People",
                            price: "$72.00/day",
                            isFavorite: false,
                        },
                        {
                            name: "CR - V",
                            type: "SUV",
                            img: "./image6.png",
                            fuel: "70L",
                            transmission: "Manual",
                            capacity: "6 People",
                            price: "$80.00/day",
                            isFavorite: true,
                        },
                        {
                            name: "All New Terios",
                            type: "SUV",
                            img: "./image6.png",
                            fuel: "80L",
                            transmission: "Manual",
                            capacity: "6 People",
                            price: "$74.00/day",
                            isFavorite: false,
                        },
                        {
                            name: "MG ZX Exclusive",
                            type: "Hatchback",
                            img: "./image7.png",
                            fuel: "70L",
                            transmission: "Manual",
                            capacity: "4 People",
                            price: "$76.00/day",
                            isFavorite: true,
                        },
                    ].map((car, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-[388px] sm:h-[420px]"
                        >
                            {/* Card Header */}
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <p className="text-lg font-bold">
                                        {car.name}{" "}
                                        <span className="text-sm text-gray-400">{car.type}</span>
                                    </p>
                                </div>
                                <div>
                                    {car.isFavorite ? (
                                        <FaHeart className="text-red-500 text-xl cursor-pointer hover:scale-110 transition-transform" />
                                    ) : (
                                        <CiHeart className="text-gray-400 text-xl cursor-pointer hover:scale-110 transition-transform" />
                                    )}
                                </div>
                            </div>
                            {/* Car Image */}
                            <img
                                src={car.img}
                                alt={`${car.name}`}
                                className="w-full h-[120px] sm:h-[140px] object-contain mx-auto"
                            />
                            {/* Features */}
                            <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
                                <div className="flex items-center gap-1">
                                    <FaGasPump />
                                    <span>{car.fuel}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <SiNginxproxymanager />
                                    <span>{car.transmission}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MdPeople />
                                    <span>{car.capacity}</span>
                                </div>
                            </div>
                            {/* Pricing and Button */}
                            <div className="flex justify-between items-center mt-6">
                                <p className="text-lg font-semibold">
                                    {car.price.split("/")[0]}{" "}
                                    <span className="text-sm text-gray-400">/ {car.price.split("/")[1]}</span>
                                </p>
                                <button className="bg-primary500 text-white px-4 py-2 rounded-lg hover:bg-primary600 transition">
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* View All Button */}
                <div className="flex justify-center mt-8">
                    <button className="bg-primary500 text-white px-6 py-3 rounded-lg hover:bg-primary600 transition">
                        View All Cars
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card2;

