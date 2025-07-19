import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
const Hero = () => {
  return <div className="relative h-[80vh] min-h-[600px] bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Mountain landscape with forest" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/80 to-forest/30 mix-blend-multiply" />
      </div>
      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Authentic Outdoor & Lifestyle Storytelling
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Bringing the outdoors to life through expert content creation for
            publications, brands, and outdoor enthusiasts.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/portfolio" className="inline-flex items-center bg-adventure-orange hover:bg-adventure-orange/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Explore My Work
              <ChevronRightIcon size={20} className="ml-2" />
            </Link>
            <Link to="/contact" className="inline-flex items-center bg-white hover:bg-white/90 text-forest px-6 py-3 rounded-md font-medium transition-colors">
              Let's Create Content
            </Link>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;