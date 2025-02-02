"use client";

import Link from "next/link";
import Hero from "./components/Hero";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { allCars } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { car } from "../../types/cars";
import { addToCart } from "./actions/actions";
import Swal from "sweetalert2";
import AdminLogin from "./admin/page";


const CARS = () => {
  const [cars, setCars] = useState<car[]>([]);

  useEffect(() => {
    async function fetchCars() {
      try {
        const fetchedCars: car[] = await client.fetch(allCars);
        console.log("Fetched Cars Data:", fetchedCars);
        setCars(fetchedCars);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }
    fetchCars();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, car: car) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${car.name} added to rent`,
      showConfirmButton : false,
      timer: 1000
    })
    addToCart(car);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Available Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car._id || `${car.name}-${car.slug?.current || Math.random()}`}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <Link href={`/car/${car.slug?.current || "#"}`}>
              <h2 className="text-xl font-semibold mb-2">{car.name}</h2>
              {car.image?.asset ? (
                <img
                  src={urlFor(car.image).url()}
                  alt={car.name}
                  width={200}
                  height={200}
                  className="rounded-lg shadow-md mb-4"
                />
              ) : (
                <div className="w-52 h-52 bg-gray-200 flex items-center justify-center rounded-lg mb-4">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
            </Link>
            <p className="text-lg font-medium text-gray-700">
              Price: <span className="text-green-500">{car.priceperday}</span>
            </p>
            {car.description && (
              <p className="text-gray-600 mt-2">{car.description}</p>
            )}
            <button
              className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              onClick={(e) => handleAddToCart(e, car)}
            >
              Add To Rent
            </button>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <Hero />
     </div>
     <div>
      <AdminLogin />
     </div>
</div>
  );
};

export default CARS;



