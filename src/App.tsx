import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
export function App() {
  return <Router>
      <div className="flex flex-col min-h-screen bg-cream">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Additional routes will be added for other pages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}