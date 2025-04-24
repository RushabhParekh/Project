export interface Car {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  specs: {
    transmission: string;
    seats: number;
    luggage: number;
    fuelType: string;
  };
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  startDate: string;
  endDate: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}