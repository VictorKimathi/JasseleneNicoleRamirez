import React, { useState } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import Button from '../components/Button';
const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const portfolioItems = [ {
    id: 1,
    title: '5 One-Pot Campfire Dinners That Taste Way Better Than They Should',
    description: 'After a long day on the trail or around the campfire, few things hit the spot like a hot, hearty meal. It’s even better when it doesn’t leave you scrubbing dishes in the dark. These easy one-pot campfire meals are made for outdoor simplicity. Whether you're backpacking, car camping, or cooking in your backyard, these recipes go far beyond the usual can of beans.',
    imageUrl: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Outdoor Cooking',
    tags: ['One-Pot Recipes', 'Campfire Meals', 'Easy Camping Food'],
    href: '5_One_Pot_Campfire_Dinners.pdf'
  }, {
    id: 2,
    title: 'How to Make a DIY Campfire Cooking Tripod from Natural Materials',
    description: 'A tripod is one of the simplest and most stable ways to suspend a pot over a fire. Instead of carrying a manufactured setup, you can build one on-site using strong sticks and basic cords. This method saves pack weight, uses local materials, and works in most wooded environments. With just three straight branches, a sharp cutting tool, and a length of rope or paracord, you can create a reliable structure for campfire cooking.',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Outdoor DIY & Gear',
    tags: ['Campfire Tripod', 'Bushcraft Skills', 'Natural Materials'],
    href: 'How_to_Make_a_DIY.pdf'
  }, {
    id: 3,
    title: 'Backyard Astronomy: How to Stargaze Without a Telescope',
    description: 'Stargazing doesn’t require expensive equipment or remote locations. With clear skies and a little preparation, your own backyard is enough to explore planets, constellations, meteor showers, and even the occasional satellite or galaxy. What you see with the naked eye can be surprisingly detailed if you know when and where to look.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Backyard Science & Exploration',
    tags: ['Stargazing Tips', 'Light Pollution Reduction', 'Family Astronomy'],
    href: 'Backyard_Astronomy.pdf'
  }];
  const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">
              Portfolio & Writing Samples
            </h1>
            <p className="text-xl text-gray-300">
              A showcase of my published finance articles across major
              platforms.
            </p>
          </div>
        </div>
      </section>
      {/* Portfolio Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <button className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`} onClick={() => setFilter('all')}>
              All Articles
            </button>
            <button className={`px-4 py-2 rounded ${filter === 'retirement' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`} onClick={() => setFilter('retirement')}>
              Retirement
            </button>
            <button className={`px-4 py-2 rounded ${filter === 'income' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`} onClick={() => setFilter('income')}>
              Side Hustles
            </button>
            <button className={`px-4 py-2 rounded ${filter === 'debt' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`} onClick={() => setFilter('debt')}>
              Debt Management
            </button>
            <button className={`px-4 py-2 rounded ${filter === 'tax' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`} onClick={() => setFilter('tax')}>
              Tax Strategies
            </button>
            <button className={`px-4 py-2 rounded ${filter === 'basics' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`} onClick={() => setFilter('basics')}>
              Financial Basics
            </button>
          </div>
        </div>
      </section>
      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => <PortfolioItem key={item.id} title={item.title} publisher={item.publisher} description={item.description} imageUrl={item.imageUrl} tags={item.tags} />)}
          </div>
          {filteredItems.length === 0 && <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No articles found in this category.
              </p>
            </div>}
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
                <p className="text-gray-700">
                  Client retention rate with repeat assignments
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  100%
                </div>
                <p className="text-gray-700">
                  On-time delivery for all client projects
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">90+</div>
                <p className="text-gray-700">
                  Articles published on major platforms
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded shadow-sm text-left">
              <blockquote className="text-gray-700 text-lg italic mb-4">
                "Emmanuel consistently delivers high-quality finance content
                that resonates with our audience. His ability to explain complex
                topics clearly while maintaining reader engagement is
                exceptional."
              </blockquote>
              <div className="font-bold">
                - Finance Editor, Major Publication
              </div>
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
              I can create engaging, accurate financial content tailored to your
              specific audience and goals.
            </p>
            <Button to="/contact" variant="secondary" size="lg">
              Request a Writing Sample
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Portfolio;
