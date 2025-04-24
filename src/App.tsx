import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CarDetails from './pages/CarDetails';
import Reviews from './pages/Reviews';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/car/:id" element={<CarDetails />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App