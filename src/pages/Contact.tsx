import React from 'react';
import { MailIcon, PhoneIcon, ClockIcon, LinkedinIcon } from 'lucide-react';
import ContactForm from '../components/ContactForm';
const Contact = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Let's Work Together</h1>
            <p className="text-xl text-gray-300">
              Ready to discuss your finance content needs? I'm here to help
              bring your vision to life.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="md:col-span-1">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 p-3 rounded text-white mr-4">
                      <MailIcon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a href="mailto:emmanuelstembridge36@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                        emmanuelstembridge36@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 p-3 rounded text-white mr-4">
                      <PhoneIcon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <a href="tel:2069291478" className="text-gray-700 hover:text-blue-600 transition-colors">
                        206-929-1478
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 p-3 rounded text-white mr-4">
                      <ClockIcon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Response Time</h3>
                      <p className="text-gray-700">
                        I typically respond to all inquiries within 24 hours
                        during business days.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 p-3 rounded text-white mr-4">
                      <LinkedinIcon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Connect</h3>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-10 bg-gray-50 p-6 rounded">
                  <h3 className="font-bold text-lg mb-3">Preferred Projects</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Long-form financial guides</li>
                    <li>SEO-optimized finance content</li>
                    <li>Educational financial articles</li>
                    <li>Personal finance series</li>
                    <li>Financial product reviews</li>
                  </ul>
                </div>
              </div>
              {/* Contact Form */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded shadow-sm">
                <h3 className="text-xl font-bold mb-2">What are your rates?</h3>
                <p className="text-gray-700">
                  Rates vary based on project scope, research requirements, and
                  content length. I provide custom quotes for each project after
                  understanding your specific needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  What is your typical turnaround time?
                </h3>
                <p className="text-gray-700">
                  For standard articles (1,500-2,000 words), I typically deliver
                  within 5-7 business days. Longer pieces or projects requiring
                  extensive research may take longer. Rush delivery is available
                  for an additional fee.
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  Do you offer revisions?
                </h3>
                <p className="text-gray-700">
                  Yes, all projects include up to two rounds of revisions to
                  ensure the content perfectly meets your needs. Additional
                  revisions can be arranged as needed.
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  How do you handle factual accuracy?
                </h3>
                <p className="text-gray-700">
                  All content is thoroughly researched using reputable sources.
                  Financial information is verified against multiple
                  authoritative references to ensure accuracy and currency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;