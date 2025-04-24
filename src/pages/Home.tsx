import React from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';

// This file uses images stored in the `public/images` directory, named `1.jpg` through `10.jpg`.
// Ensure you have placed each car image next to public/index.html at: public/images/1.jpg, 2.jpg, etc.

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Premium Car Rentals in Toronto</h1>
          <p className="mt-2 text-xl">Experience luxury and comfort at competitive prices</p>
        </div>
      </header>

      {/* Fleet Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Fleet</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {cars.map((car) => (
            <Link
              key={car.id}
              to={`/car/${car.id}`}
              className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Car Image: served from public/images */}
              <img
                src={`/images/${car.id}.jpg`}  // {car.name}
                alt={car.name}
                className="w-full h-48 object-cover"
              />

              {/* Card Body */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
                <p className="text-gray-600 mt-2">{car.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${car.price}</span>
                  <span className="text-gray-500">per day</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
