import { Car } from '../types';

export const cars: Car[] = [
  {
    id: '1',
    name: 'Toyota Corolla',
    price: 40,
    image: 'https://images.unsplash.com/photo-1632183715740-2f8ab3aaa268?auto=format&fit=crop&w=800',
    description: 'Efficient and reliable compact sedan perfect for city driving',
    features: ['Bluetooth', 'Backup Camera', 'USB Ports', 'Cruise Control'],
    specs: {
      transmission: 'Automatic',
      seats: 5,
      luggage: 2,
      fuelType: 'Gasoline'
    }
  },
  {
    id: '2',
    name: 'Honda Civic',
    price: 45,
    image: 'https://images.unsplash.com/photo-1590347394362-2c83c9c18e18?auto=format&fit=crop&w=800',
    description: 'Sporty and comfortable sedan with excellent fuel economy',
    features: ['Apple CarPlay', 'Android Auto', 'Honda Sensing Suite', 'Heated Seats'],
    specs: {
      transmission: 'Automatic',
      seats: 5,
      luggage: 2,
      fuelType: 'Gasoline'
    }
  },
  {
    id: '3',
    name: 'Hyundai Tucson',
    price: 55,
    image: 'https://images.unsplash.com/photo-1634118514324-99e8513e0ff3?auto=format&fit=crop&w=800',
    description: 'Modern compact SUV with advanced safety features',
    features: ['Panoramic Sunroof', 'Wireless Charging', 'Lane Keep Assist', 'Blind Spot Monitor'],
    specs: {
      transmission: 'Automatic',
      seats: 5,
      luggage: 3,
      fuelType: 'Gasoline'
    }
  },
  {
    id: '4',
    name: 'Honda CR-V',
    price: 65,
    image: 'https://images.unsplash.com/photo-1663345068165-4790a1f31e46?auto=format&fit=crop&w=800',
    description: 'Spacious SUV with excellent comfort and versatility',
    features: ['Apple CarPlay', 'Android Auto', 'Lane Departure Warning', 'Blind Spot Monitor'],
    specs: {
      transmission: 'Automatic',
      seats: 5,
      luggage: 4,
      fuelType: 'Gasoline'
    }
  },
  {
    id: '5',
    name: 'Lexus RX',
    price: 85,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800',
    description: 'Luxury SUV combining comfort with sophisticated style',
    features: ['Mark Levinson Audio', 'Head-Up Display', 'Premium Leather', 'Adaptive Suspension'],
    specs: {
      transmission: 'Automatic',
      seats: 5,
      luggage: 3,
      fuelType: 'Hybrid'
    }
  },
  {
    id: '6',
    name: 'Tesla Model 3',
    price: 95,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259b6e09?auto=format&fit=crop&w=800',
    description: 'Premium electric sedan with cutting-edge technology',
    features: ['Autopilot', 'Premium Sound System', 'Glass Roof', 'Wireless Charging'],
    specs: {
      transmission: 'Electric',
      seats: 5,
      luggage: 3,
      fuelType: 'Electric'
    }
  },
  {
    id: '7',
    name: 'Porsche Cayenne',
    price: 120,
    image: 'https://images.unsplash.com/photo-1580274437636-1c384e896c77?auto=format&fit=crop&w=800',
    description: 'High-performance luxury SUV with exceptional handling',
    features: ['Sport Chrono Package', 'Air Suspension', 'Premium Audio', 'Panoramic Roof'],
    specs: {
      transmission: 'Automatic',
      seats: 5,
      luggage: 3,
      fuelType: 'Gasoline'
    }
  },
  {
    id: '8',
    name: 'BMW 7 Series',
    price: 130,
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800',
    description: 'Luxury sedan offering ultimate comfort and performance',
    features: ['Massage Seats', 'Executive Package', 'Premium Sound', 'Night Vision'],
    specs: {
      transmission: 'Automatic',
      seats: 5,
      luggage: 3,
      fuelType: 'Gasoline'
    }
  },
  {
    id: '9',
    name: 'Audi Q8',
    price: 125,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800',
    description: 'Premium SUV with sophisticated design and technology',
    features: ['Virtual Cockpit', 'Bang & Olufsen Sound', 'Air Suspension', 'Matrix LED'],
    specs: {
      transmission: 'Automatic',
      seats: 5,
      luggage: 4,
      fuelType: 'Gasoline'
    }
  },
  {
    id: '10',
    name: 'Mercedes-Benz GLS',
    price: 135,
    image: 'https://images.unsplash.com/photo-1622194993799-e4e628700089?auto=format&fit=crop&w=800',
    description: 'Full-size luxury SUV with superior comfort',
    features: ['Burmester Sound', 'E-Active Body Control', 'Executive Rear Seats', 'Ambient Lighting'],
    specs: {
      transmission: 'Automatic',
      seats: 7,
      luggage: 5,
      fuelType: 'Gasoline'
    }
  }
];