import React from 'react';
import ExperienceItem from '../components/ExperienceItem';
import Button from '../components/Button';

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Experience & Expertise</h1>
            <p className="text-xl text-gray-300">
              Versatile and self-motivated outdoor and lifestyle writer with over three years of experience.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Image Section (Optional - can be removed or replaced) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">Meet Jasselene Nicole Ramirez</h2>
                <p className="text-gray-700 text-lg mb-4">
                  I combine a passion for the outdoors with clear, engaging writing to help readers explore and connect with nature and sustainable living.
                </p>
                <p className="text-gray-700 text-lg mb-6">
                  My approach is straightforward: craft SEO-optimized, long-form content across gardening, adventure travel, and homesteading niches that empowers readers to take action.
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-1 bg-blue-600 mr-4"></div>
                  <p className="text-gray-900 font-medium italic">
                    "My goal is to inspire and inform, making outdoor and sustainable living accessible to everyone."
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  {/* Replace with an appropriate image for Jasselene */}
                  <img src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Jasselene Nicole Ramirez" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Professional Summary</h2>
            <p className="text-gray-700 text-lg mb-4">
              I'm Jasselene Nicole Ramirez, a freelance outdoor and lifestyle writer with over three years of experience crafting SEO-optimized, long-form content across gardening, adventure travel, and homesteading niches. I am skilled in digital publishing tools including WordPress and custom CMS platforms.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              My commitment is to clear, engaging storytelling that empowers readers to take action—whether it’s exploring national parks, starting a backyard garden, or tackling seasonal home projects. I thrive in independent remote environments and consistently meet fast-paced editorial deadlines with clean, AP-style copy.
            </p>
          </div>
        </div>
      </section>

      {/* Work History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Work History</h2>
            <ExperienceItem
              role="Freelance Feature Writer"
              company="Various Clients (including The Spruce, EcoLiving Daily, and HomeRooted)"
              period="Jan 2021 – Present"
              location="Remote"
              achievements={[
                'Researched, pitched, and wrote long-form articles (2,000–3,000 words) on outdoor adventure, gardening, and sustainable DIY living.',
                'Wrote high-ranking, evergreen content optimized for organic search using SEO tools like Clearscope and Yoast.',
                'Published over 150 articles across digital publications with an average engagement time of 4+ minutes per article.',
                'Maintained consistent tone and formatting across platforms using AP Style and in-house editorial guidelines.'
              ]}
            />
            <ExperienceItem
              role="Content Contributor – Adventure & Gear"
              company="TrailMarked Magazine (Contract)"
              period="Jul 2020 – Mar 2023"
              location="Remote"
              achievements={[
                'Wrote expert-driven gear reviews, trail guides, and how-to articles targeting beginner and intermediate hikers and campers.',
                'Interviewed local park rangers, botanists, and outfitters to enrich story accuracy and reader trust.',
                'Covered topics from national park road trip itineraries to seasonal layering for high-altitude treks.',
                'Collaborated with the editor to refine story angles and meet strict weekly deadlines.'
              ]}
            />
            <ExperienceItem
              role="Copy Editor and Blogger"
              company="GreenPatch Collective (Sustainable Living Blog)"
              period="Mar 2019 – Dec 2021"
              location="Remote"
              achievements={[
                'Edited contributor submissions on homesteading, permaculture, and outdoor cooking for clarity, tone, and formatting.',
                'Authored blog posts focused on backyard composting, herbal remedies, and eco-conscious landscaping.',
                'Managed editorial calendar using Trello and published content directly into WordPress CMS.'
              ]}
            />
            <ExperienceItem
              role="Staff Writer – Outdoors & Home Projects"
              company="Baytown Living Weekly"
              period="May 2017 – Nov 2019"
              location="Baytown, TX"
              achievements={[
                'Reported on regional outdoor events, community garden initiatives, and local conservation efforts.',
                'Produced weekly features and photo essays spotlighting home improvement DIYers and urban farmers.',
                'Built strong relationships with local organizations including Baytown Nature Center and Gulf Coast Wildlife Rehab.'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Education & Skills */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Education</h2>
              <div className="mb-4">
                <h3 className="text-xl font-bold">
                  Lee College, Baytown, TX
                </h3>
                <p className="text-blue-600">
                  Associate of Arts – Liberal Arts | Graduated: 2012
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Skills</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-center bg-gray-50 p-3 rounded">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                  <span>Long-form content creation (2,500+ words)</span>
                </li>
                <li className="flex items-center bg-gray-50 p-3 rounded">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                  <span>WordPress & custom CMS platforms</span>
                </li>
                <li className="flex items-center bg-gray-50 p-3 rounded">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                  <span>SEO optimization & keyword research</span>
                </li>
                <li className="flex items-center bg-gray-50 p-3 rounded">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                  <span>AP Style and in-house editorial standards</span>
                </li>
                <li className="flex items-center bg-gray-50 p-3 rounded">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                  <span>Outdoor writing: camping, hiking, gardening, homesteading</span>
                </li>
                <li className="flex items-center bg-gray-50 p-3 rounded">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                  <span>Interviewing & sourcing expert insights</span>
                </li>
                <li className="flex items-center bg-gray-50 p-3 rounded">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                  <span>Time management in remote freelance settings</span>
                </li>
                <li className="flex items-center bg-gray-50 p-3 rounded">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                  <span>Feature writing, service journalism, listicles, and guides</span>
                </li>
                <li className="flex items-center bg-gray-50 p-3 rounded">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                  <span>Social media integration & cross-channel formatting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl mb-8">
              Let's discuss how my experience and expertise can help create exceptional outdoor and lifestyle content for your audience.
            </p>
            <Button to="/contact" variant="secondary" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;