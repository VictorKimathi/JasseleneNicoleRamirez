import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, BookOpenIcon, LeafIcon, HomeIcon, CompassIcon, HeartIcon } from 'lucide-react';
import Hero from '../components/Hero';
import ArticleCard from '../components/ArticleCard';
const Home = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
                Bringing the Outdoors to Life Through Authentic Storytelling
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                I craft SEO-optimized content that transforms complex outdoor
                skills and sustainable practices into accessible adventures for
                everyday explorers and conscious homesteaders.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-sage/20 flex items-center justify-center mr-3">
                    <LeafIcon size={20} className="text-forest" />
                  </div>
                  <span className="font-medium">6+ years of experience</span>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-sage/20 flex items-center justify-center mr-3">
                    <BookOpenIcon size={20} className="text-forest" />
                  </div>
                  <span className="font-medium">150+ published articles</span>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center mt-6 text-adventure-orange font-medium hover:underline">
                Learn more about me
                <ChevronRightIcon size={16} className="ml-1" />
              </Link>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Jasselene writing in a natural setting" className="rounded-lg shadow-lg object-cover w-full h-[500px]" />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-forest text-lg">4+ minute</p>
                <p className="text-gray-600">Average engagement time</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Expertise Areas */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
              Areas of Expertise
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Specialized content creation across multiple outdoor and lifestyle
              niches, backed by hands-on experience and a passion for nature.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Outdoor Adventure */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 rounded-full bg-sage/20 flex items-center justify-center mb-4">
                <CompassIcon size={28} className="text-forest" />
              </div>
              <h3 className="text-xl font-bold text-forest mb-2">
                Outdoor Adventure
              </h3>
              <p className="text-gray-700 mb-4">
                Comprehensive trail guides, gear reviews, and adventure travel
                content for beginners to intermediate explorers.
              </p>
              <Link to="/services#outdoor" className="text-adventure-orange font-medium hover:underline inline-flex items-center">
                Learn more
                <ChevronRightIcon size={16} className="ml-1" />
              </Link>
            </div>
            {/* Gardening & Horticulture */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 rounded-full bg-sage/20 flex items-center justify-center mb-4">
                <LeafIcon size={28} className="text-forest" />
              </div>
              <h3 className="text-xl font-bold text-forest mb-2">
                Gardening & Horticulture
              </h3>
              <p className="text-gray-700 mb-4">
                Seasonal planning guides, plant care tutorials, and sustainable
                gardening practices for all skill levels.
              </p>
              <Link to="/services#gardening" className="text-adventure-orange font-medium hover:underline inline-flex items-center">
                Learn more
                <ChevronRightIcon size={16} className="ml-1" />
              </Link>
            </div>
            {/* Homesteading */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 rounded-full bg-sage/20 flex items-center justify-center mb-4">
                <HomeIcon size={28} className="text-forest" />
              </div>
              <h3 className="text-xl font-bold text-forest mb-2">
                Homesteading
              </h3>
              <p className="text-gray-700 mb-4">
                DIY projects, self-sufficiency skills, and rural living guides
                for modern homesteaders and urban farmers.
              </p>
              <Link to="/services#homesteading" className="text-adventure-orange font-medium hover:underline inline-flex items-center">
                Learn more
                <ChevronRightIcon size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Work */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-forest mb-2">
                Featured Work
              </h2>
              <p className="text-gray-700">
                A selection of my best outdoor and lifestyle content
              </p>
            </div>
            <Link to="/portfolio" className="mt-4 md:mt-0 inline-flex items-center bg-forest hover:bg-forest/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
              View Full Portfolio
              <ChevronRightIcon size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ArticleCard title="10 Essential Hiking Skills Every Beginner Should Master" category="Outdoor Adventure" image="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" publication="TrailMarked Magazine" readTime="6 min read" />
            <ArticleCard title="Seasonal Gardening Guide: What to Plant in Early Spring" category="Gardening & Horticulture" image="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" publication="The Spruce" readTime="5 min read" />
            <ArticleCard title="Getting Started with Backyard Composting: A Complete Guide" category="Sustainable Living" image="https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" publication="EcoLiving Daily" readTime="7 min read" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
        What Clients Are Saying
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto">
        Hear directly from those I've worked with — creators, publishers, and outdoor brands who trust my voice.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-cream rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
        <p className="text-gray-800 italic mb-4">
          "An absolute pleasure to work with. Jasselene turned complex outdoor topics into accessible, engaging reads our readers loved."
        </p>
        <div className="flex items-center">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client 1" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="font-bold text-forest">Samantha Green</p>
            <p className="text-gray-600 text-sm">Editor, TrailMarked Magazine</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-cream rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
        <p className="text-gray-800 italic mb-4">
          "Her writing voice is warm and authentic, yet packed with useful insights. A perfect match for our sustainable living series."
        </p>
        <div className="flex items-center">
          <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="Client 2" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="font-bold text-forest">Daniel Kim</p>
            <p className="text-gray-600 text-sm">Founder, EcoLiving Daily</p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-cream rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
        <p className="text-gray-800 italic mb-4">
          "Reliable, creative, and deeply knowledgeable. Jasselene brought a fresh and informative tone to our gardening series."
        </p>
        <div className="flex items-center">
          <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Client 3" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="font-bold text-forest">Linda Chavez</p>
            <p className="text-gray-600 text-sm">Content Director, The Spruce</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Compelling Outdoor Content?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Let's collaborate on your next outdoor adventure, gardening guide,
            or sustainable living feature.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-adventure-orange hover:bg-adventure-orange/90 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors">
            Commission Your Next Outdoor Story
            <ChevronRightIcon size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>;
};
export default Home;