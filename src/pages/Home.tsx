// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';

// Local car images (place these JPGs in the same folder as this file)
import img1 from './toyota-corolla-18l-elite-hybrid-cvt-fwd.jpg';   // Toyota Corolla
import img2 from './m_r_w.webp';   // Honda Civic
import img3 from './tucson.webp';   // Hyundai Tucson
import img4 from './crv.jpg';   // Honda CR-V
import img5 from './lexus.jpg';   // BMW 3 Series
import img6 from './tesla.webp';   // Audi Q5
import img7 from './porche.jpg';   // Tesla Model 3
import img8 from './bmw.jpg';   // Ford Mustang
import img9 from './audi.avif';   // Jeep Wrangler
import img10 from './mercides.avif'; // Mercedes-Benz GLS

const imagesMap: Record<string, string> = {
  '1': img1,
  '2': img2,
  '3': img3,
  '4': img4,
  '5': img5,
  '6': img6,
  '7': img7,
  '8': img8,
  '9': img9,
  '10': img10,
};

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
              {/* Car Image */}
              <img
                src={imagesMap[car.id]}
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
