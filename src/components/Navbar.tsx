import { Car, Home, Phone, Star } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">AeroDrive</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <Link
              to="/about"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Car className="h-4 w-4 mr-1" />
              About
            </Link>
            <Link
              to="/reviews"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/reviews') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Star className="h-4 w-4 mr-1" />
              Reviews
            </Link>
            <Link
              to="/contact"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Phone className="h-4 w-4 mr-1" />
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}