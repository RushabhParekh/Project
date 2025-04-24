import { Link } from 'react-router-dom';
import { cars } from '../data/cars';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Premium Car Rentals in Toronto</h1>
          <p className="text-xl">Experience luxury and comfort at competitive prices</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Fleet</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car) => (
            <Link
              to={`/car/${car.id}`}
              key={car.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
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
      </div>
    </div>
  );
}