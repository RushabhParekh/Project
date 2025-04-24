import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Michael Thompson',
    rating: 5,
    date: 'March 15, 2024',
    comment: 'Exceptional service! The BMW 7 Series I rented was immaculate and the staff was incredibly professional. Will definitely be using AeroDrive again.',
    carRented: 'BMW 7 Series'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    rating: 5,
    date: 'March 12, 2024',
    comment: 'The Tesla Model 3 was a dream to drive. The booking process was smooth, and the staff explained all the features thoroughly. Best car rental experience in Toronto!',
    carRented: 'Tesla Model 3'
  },
  {
    id: 3,
    name: 'David Patel',
    rating: 5,
    date: 'March 10, 2024',
    comment: 'Very impressed with the cleanliness of the vehicle and the efficiency of the service. The Honda CR-V was perfect for our family trip.',
    carRented: 'Honda CR-V'
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    rating: 5,
    date: 'March 8, 2024',
    comment: 'Outstanding customer service! They went above and beyond to accommodate my last-minute booking. The Toyota Corolla was fuel-efficient and comfortable.',
    carRented: 'Toyota Corolla'
  },
  {
    id: 5,
    name: 'James Wilson',
    rating: 5,
    date: 'March 5, 2024',
    comment: 'AeroDrive has the best luxury car selection in Toronto. The online booking system is user-friendly, and their prices are very competitive.',
    carRented: 'BMW 7 Series'
  }
];

export default function Reviews() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Customer Reviews</h1>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
                  <p className="text-gray-500">Rented: {review.carRented}</p>
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-500">{review.date}</span>
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}