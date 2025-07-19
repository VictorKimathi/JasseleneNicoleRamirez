import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
export function App() {
  return <Router>
      <div className="flex flex-col min-h-screen bg-cream">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Service/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/portfolio" element={<Portfolio/>} />



            {/* Additional routes will be added for other pages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}