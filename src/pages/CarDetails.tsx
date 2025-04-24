import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cars } from '../data/cars';

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === id);

  const [bookingData, setBookingData] = useState({
    startDate: '',
    endDate: '',
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  if (!car) {
    return <div>Car not found</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log(bookingData);
    alert('Booking successful! Thank you for choosing our service.');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{car.name}</h2>
              <p className="text-gray-600 mb-4">{car.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Features:</h3>
                  <ul className="mt-2 space-y-1">
                    {car.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">• {feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Specifications:</h3>
                  <ul className="mt-2 space-y-1">
                    <li className="text-gray-600">• Transmission: {car.specs.transmission}</li>
                    <li className="text-gray-600">• Seats: {car.specs.seats}</li>
                    <li className="text-gray-600">• Luggage: {car.specs.luggage} bags</li>
                    <li className="text-gray-600">• Fuel Type: {car.specs.fuelType}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Book This Car</h2>
            <div className="text-3xl font-bold text-blue-600 mb-6">
              ${car.price} <span className="text-lg text-gray-500">per day</span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Start Date</label>
                  <input
                    type="date"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={bookingData.startDate}
                    onChange={(e) => setBookingData({ ...bookingData, startDate: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">End Date</label>
                  <input
                    type="date"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={bookingData.endDate}
                    onChange={(e) => setBookingData({ ...bookingData, endDate: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                />
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Card Number</label>
                    <input
                      type="text"
                      required
                      maxLength={16}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={bookingData.cardNumber}
                      onChange={(e) => setBookingData({ ...bookingData, cardNumber: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                      <input
                        type="text"
                        required
                        placeholder="MM/YY"
                        maxLength={5}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        value={bookingData.expiryDate}
                        onChange={(e) => setBookingData({ ...bookingData, expiryDate: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">CVV</label>
                      <input
                        type="text"
                        required
                        maxLength={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        value={bookingData.cvv}
                        onChange={(e) => setBookingData({ ...bookingData, cvv: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}