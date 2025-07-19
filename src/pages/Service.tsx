import React from 'react';
import { FileTextIcon, SearchIcon, BookOpenIcon, EditIcon, MountainIcon, HomeIcon } from 'lucide-react'; // Replaced TrendingUpIcon and BarChartIcon with more relevant icons
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

const Service = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Services & Expertise</h1>
            <p className="text-xl text-gray-300">
              Specialized outdoor and lifestyle writing services tailored to inspire, inform, and engage your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">How I Can Help</h2>
            <p className="text-gray-700 text-lg">
              I create clear, engaging outdoor and lifestyle content that helps your audience explore new hobbies, connect with nature, and tackle home projects with confidence. My specialized writing services are designed to deliver both educational value and compelling narratives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Long-Form Articles"
              description="Comprehensive 2,000–3,000 word guides that thoroughly cover outdoor adventure, gardening, and sustainable living topics, maintaining reader engagement."
              icon={<FileTextIcon size={32} />}
            />
            <ServiceCard
              title="SEO-Optimized Content"
              description="Strategic content that ranks well in search engines while providing genuine value to readers interested in outdoor and lifestyle topics."
              icon={<SearchIcon size={32} />}
            />
            <ServiceCard
              title="Educational Guides"
              description="Clear explanations of outdoor skills, gardening techniques, and sustainable practices that help your audience build knowledge and confidence."
              icon={<BookOpenIcon size={32} />}
            />
            <ServiceCard
              title="Content Editing"
              description="Professional refinement of existing outdoor and lifestyle content to improve clarity, accuracy, and engagement, adhering to AP Style."
              icon={<EditIcon size={32} />}
            />
            <ServiceCard
              title="Adventure & Travel Guides"
              description="Expert-driven articles on national parks, trail guides, gear reviews, and road trip itineraries for outdoor enthusiasts."
              icon={<MountainIcon size={32} />} // Using MountainIcon for adventure/travel
            />
            <ServiceCard
              title="Homesteading & DIY Content"
              description="Practical guides on backyard composting, herbal remedies, eco-conscious landscaping, and home improvement projects."
              icon={<HomeIcon size={32} />} // Using HomeIcon for homesteading/DIY
            />
          </div>
        </div>
      </section>

      {/* Writing Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Writing Specialties</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Outdoor Adventure</h3>
                <p className="text-gray-700">
                  Engaging trail guides, gear reviews, national park itineraries, and how-to articles for hikers, campers, and outdoor enthusiasts of all levels.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Gardening & Permaculture
                </h3>
                <p className="text-gray-700">
                  Practical content on starting backyard gardens, composting, sustainable growing practices, and creating thriving outdoor spaces.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Homesteading & Sustainable Living
                </h3>
                <p className="text-gray-700">
                  Articles covering topics like herbal remedies, eco-conscious landscaping, self-sufficiency, and environmentally friendly home practices.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Home Projects & DIY</h3>
                <p className="text-gray-700">
                  Features and how-to guides on home improvement projects, urban farming, and creative DIY solutions for a more sustainable lifestyle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Expert Interviews & Sourcing</h3>
                <p className="text-gray-700">
                  Content enriched by insights from local park rangers, botanists, outfitters, and community leaders to ensure accuracy and build reader trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">My Process</h2>
            <div className="space-y-12">
              <div className="flex">
                <div className="mr-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Discovery & Research
                  </h3>
                  <p className="text-gray-700">
                    I start by understanding your audience, content goals, and specific needs. Then, I conduct thorough research and interviews to ensure every piece is accurate and valuable.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Content Creation</h3>
                  <p className="text-gray-700">
                    I craft engaging, well-researched content that balances informative value with compelling storytelling, adhering to AP Style and your editorial guidelines.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Refinement & SEO</h3>
                  <p className="text-gray-700">
                    After the initial draft, I optimize the content for SEO using tools like Clearscope and Yoast, and polish it for clarity and engagement, incorporating your feedback.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Delivery & Publishing</h3>
                  <p className="text-gray-700">
                    I deliver finalized content on schedule and can directly publish into WordPress or your custom CMS, ensuring a smooth workflow.
                  </p>
                </div>
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
              Ready to Elevate Your Outdoor & Lifestyle Content?
            </h2>
            <p className="text-xl mb-8">
              Let's discuss your content needs and how my services can help you inspire and inform your audience.
            </p>
            <Button to="/contact" variant="secondary" size="lg">
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;