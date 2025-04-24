import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AeroDrive Pvt. Ltd</h3>
            <p className="text-gray-300">Your trusted partner in premium car rentals since 2015.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+14165557890" className="hover:text-white">+1 (416) 555-7890</a>
              </p>
              <p className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@aerodrive.ca" className="hover:text-white">info@aerodrive.ca</a>
              </p>
              <p className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2" />
                123 Bay Street, Toronto, ON M5J 2T3
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="text-gray-300">
              <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
              <p>Saturday: 9:00 AM - 6:00 PM</p>
              <p>Sunday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} AeroDrive Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}