import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-forest">
                Jasselene Nicole Ramirez
              </span>
            </Link>
          </div>
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-forest hover:text-sage font-medium">
              Home
            </Link>
            <Link to="/about" className="text-forest hover:text-sage font-medium">
              About
            </Link>
            <Link to="/services" className="text-forest hover:text-sage font-medium">
              Services
            </Link>
            <Link to="/portfolio" className="text-forest hover:text-sage font-medium">
              Portfolio
            </Link>
            <Link to="/blog" className="text-forest hover:text-sage font-medium">
              Blog
            </Link>
            <Link to="/contact" className="bg-adventure-orange hover:bg-adventure-orange/90 text-white px-4 py-2 rounded-md font-medium transition-colors">
              Contact
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-forest hover:text-sage focus:outline-none">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-forest hover:bg-sage/10 font-medium">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 text-forest hover:bg-sage/10 font-medium">
              About
            </Link>
            <Link to="/services" className="block px-3 py-2 text-forest hover:bg-sage/10 font-medium">
              Services
            </Link>
            <Link to="/portfolio" className="block px-3 py-2 text-forest hover:bg-sage/10 font-medium">
              Portfolio
            </Link>
            <Link to="/blog" className="block px-3 py-2 text-forest hover:bg-sage/10 font-medium">
              Blog
            </Link>
            <Link to="/contact" className="block px-3 py-2 bg-adventure-orange text-white rounded-md font-medium">
              Contact
            </Link>
          </div>
        </div>}
    </nav>;
};
export default Navbar;