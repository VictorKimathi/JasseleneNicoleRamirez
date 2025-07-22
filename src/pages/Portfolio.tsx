import React, { useState } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import Button from '../components/Button';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: '5 One-Pot Campfire Dinners That Taste Way Better Than They Should',
      publisher: 'Outdoor Life',
      description:
        'After a long day on the trail or around the campfire, few things hit the spot like a hot, hearty meal. It’s even better when it doesn’t leave you scrubbing dishes in the dark. These easy one-pot campfire meals are made for outdoor simplicity.',
      imageUrl:
        'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&',
      category: 'Outdoor Cooking',
      tags: ['One-Pot Recipes', 'Campfire Meals', 'Easy Camping Food'],
      href: '5_One_Pot_Campfire_Dinners.pdf',
    },
    {
      id: 2,
      title: 'How to Make a DIY Campfire Cooking Tripod from Natural Materials',
      publisher: 'Wilderness Skills Daily',
      description:
        'A tripod is one of the simplest and most stable ways to suspend a pot over a fire. Build one on-site using strong sticks and basic cords. This method saves pack weight and works in most wooded environments.',
      imageUrl:
        'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&',
      category: 'Outdoor DIY & Gear',
      tags: ['Campfire Tripod', 'Bushcraft Skills', 'Natural Materials'],
      href: 'How_to_Make_a_DIY.pdf',
    },
    {
      id: 3,
      title: 'Backyard Astronomy: How to Stargaze Without a Telescope',
      publisher: 'Sky Watch Weekly',
      description:
        'Stargazing doesn’t require expensive equipment or remote locations. With clear skies and preparation, your own backyard is enough to explore planets, constellations, and even satellites.',
      imageUrl:
        'https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&',
      category: 'Backyard Science & Exploration',
      tags: ['Stargazing Tips', 'Light Pollution Reduction', 'Family Astronomy'],
      href: 'Backyard_Astronomy.pdf',
    },
  ];

  const categories = [
    'all',
    'Outdoor Cooking',
    'Outdoor DIY & Gear',
    'Backyard Science & Exploration',
  ];

  const filteredItems =
    filter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Portfolio & Writing Samples</h1>
            <p className="text-xl text-gray-300">
              A showcase of my published outdoor and science articles.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded ${
                  filter === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}
                onClick={() => setFilter(cat)}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <PortfolioItem
                  key={item.id}
                  title={item.title}
                  publisher={item.publisher}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  link={item.href}
                  tags={item.tags}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Client Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Client Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                <p className="text-gray-700">Client retention rate with repeat assignments</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-700">On-time delivery for all client projects</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">90+</div>
                <p className="text-gray-700">Articles published on major platforms</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded shadow-sm text-left">
              <blockquote className="text-gray-700 text-lg italic mb-4">
                "Emmanuel consistently delivers high-quality finance content that resonates with our audience. His ability to explain complex topics clearly while maintaining reader engagement is exceptional."
              </blockquote>
              <div className="font-bold">- Finance Editor, Major Publication</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Similar Content for Your Platform?
            </h2>
            <p className="text-xl mb-8">
              I can create engaging, accurate content tailored to your specific audience and goals.
            </p>
            <Button to="/contact" variant="secondary" size="lg">
              Request a Writing Sample
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
