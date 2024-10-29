import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Title Slide
    {
      title: "Mass Mail Dispatcher System",
      content: (
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-blue-600">Final Project Presentation</h2>
          <p className="text-gray-600">A Scalable Email Marketing Solution</p>
          <div className="mt-8 text-gray-500">
            <p>Presented By: [Your Name]</p>
            <p>Date: October 2024</p>
          </div>
        </div>
      )
    },
    // Overview
    {
      title: "Project Overview",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-700">Purpose</h3>
            <p>Develop a scalable system for managing and sending mass emails efficiently</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700">Key Goals</h4>
              <ul className="list-disc list-inside">
                <li>High Deliverability</li>
                <li>Real-time Analytics</li>
                <li>User-friendly Interface</li>
                <li>Scalable Architecture</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-700">Target Users</h4>
              <ul className="list-disc list-inside">
                <li>Marketing Teams</li>
                <li>Business Owners</li>
                <li>Content Creators</li>
                <li>Newsletter Publishers</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // Architecture
    {
      title: "System Architecture",
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded">
                <h3 className="font-bold text-blue-700">Frontend</h3>
                <p>React.js</p>
                <p>Tailwind CSS</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded">
                <h3 className="font-bold text-green-700">Backend</h3>
                <p>Python/Flask</p>
                <p>REST API</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded">
                <h3 className="font-bold text-purple-700">Database</h3>
                <p>PostgreSQL</p>
                <p>Redis Cache</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-bold text-gray-700">Email Processing</h3>
              <ul className="list-disc list-inside">
                <li>Queue Management</li>
                <li>Rate Limiting</li>
                <li>Bounce Handling</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-bold text-gray-700">Analytics Engine</h3>
              <ul className="list-disc list-inside">
                <li>Real-time Tracking</li>
                <li>Performance Metrics</li>
                <li>Report Generation</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // Features
    {
      title: "Key Features",
      content: (
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-bold text-blue-700">Email Campaign Management</h3>
              <ul className="list-disc list-inside">
                <li>Visual Template Builder</li>
                <li>List Management</li>
                <li>Schedule Campaigns</li>
                <li>A/B Testing</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h3 className="font-bold text-green-700">Analytics Dashboard</h3>
              <ul className="list-disc list-inside">
                <li>Open Rate Tracking</li>
                <li>Click Analysis</li>
                <li>Bounce Management</li>
                <li>Performance Reports</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded">
              <h3 className="font-bold text-purple-700">Security Features</h3>
              <ul className="list-disc list-inside">
                <li>SPF & DKIM Support</li>
                <li>Encryption</li>
                <li>Access Control</li>
                <li>Audit Logging</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-4 rounded">
              <h3 className="font-bold text-orange-700">Automation</h3>
              <ul className="list-disc list-inside">
                <li>Triggered Emails</li>
                <li>Dynamic Content</li>
                <li>Auto-responders</li>
                <li>List Segmentation</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // Technical Implementation
    {
      title: "Technical Implementation",
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-bold text-gray-700">Backend Implementation</h3>
            <pre className="bg-gray-800 text-white p-4 rounded mt-2 overflow-x-auto">
              {`@app.route('/api/campaign', methods=['POST'])
def create_campaign():
    data = request.get_json()
    campaign = Campaign(
        name=data['name'],
        subject=data['subject'],
        content=data['content']
    )
    db.session.add(campaign)
    db.session.commit()
    
    # Launch async task
    send_emails.delay(campaign.id)
    return {'status': 'success'}`}
            </pre>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-bold text-blue-700">API Endpoints</h3>
              <ul className="list-disc list-inside">
                <li>Campaign Management</li>
                <li>Subscriber CRUD</li>
                <li>Analytics API</li>
                <li>Webhook Handlers</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h3 className="font-bold text-green-700">Database Schema</h3>
              <ul className="list-disc list-inside">
                <li>Users & Authentication</li>
                <li>Campaigns & Templates</li>
                <li>Subscriber Lists</li>
                <li>Analytics Data</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // Results & Benefits
    {
      title: "Results & Benefits",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-bold text-blue-700">Performance Metrics</h3>
              <div className="space-y-2 mt-2">
                <div className="flex justify-between">
                  <span>Delivery Rate:</span>
                  <span className="font-bold">99.5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Average Open Rate:</span>
                  <span className="font-bold">25%</span>
                </div>
                <div className="flex justify-between">
                  <span>Click-through Rate:</span>
                  <span className="font-bold">3.5%</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h3 className="font-bold text-green-700">Business Impact</h3>
              <div className="space-y-2 mt-2">
                <div className="flex justify-between">
                  <span>Time Saved:</span>
                  <span className="font-bold">75%</span>
                </div>
                <div className="flex justify-between">
                  <span>Cost Reduction:</span>
                  <span className="font-bold">40%</span>
                </div>
                <div className="flex justify-between">
                  <span>User Satisfaction:</span>
                  <span className="font-bold">4.8/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <h3 className="font-bold text-purple-700">Key Achievements</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Successfully processed over 1M emails</li>
              <li>Zero security incidents</li>
              <li>99.9% system uptime</li>
              <li>Positive user feedback</li>
            </ul>
          </div>
        </div>
      )
    },
    // Future Plans
    {
      title: "Future Development",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-bold text-blue-700">Short-term Goals</h3>
              <ul className="list-disc list-inside mt-2">
                <li>Mobile App Development</li>
                <li>Advanced Analytics</li>
                <li>Template Marketplace</li>
                <li>API Extensions</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h3 className="font-bold text-green-700">Long-term Vision</h3>
              <ul className="list-disc list-inside mt-2">
                <li>AI-powered Content</li>
                <li>Global CDN</li>
                <li>Multi-channel Support</li>
                <li>Enterprise Features</li>
              </ul>
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <h3 className="font-bold text-purple-700">Timeline</h3>
            <div className="mt-2 space-y-2">
              <div className="flex justify-between">
                <span>Q4 2024:</span>
                <span>Mobile App Launch</span>
              </div>
              <div className="flex justify-between">
                <span>Q1 2025:</span>
                <span>AI Integration</span>
              </div>
              <div className="flex justify-between">
                <span>Q2 2025:</span>
                <span>Global Expansion</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Thank You
    {
      title: "Thank You",
      content: (
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-blue-600">Questions?</h2>
          <div className="space-y-2">
            <p className="text-gray-600">Thank you for your attention</p>
            <p className="text-gray-500">Project Repository: [GitHub Link]</p>
            <p className="text-gray-500">Contact: [Your Email]</p>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>Mass Mail Dispatcher System</p>
            <p>© 2024 All Rights Reserved</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev < slides.length - 1 ? prev + 1 : prev
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev > 0 ? prev - 1 : prev
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{slides[currentSlide].title}</h1>
            <div className="h-1 w-20 bg-blue-500"></div>
          </div>
          
          <div className="min-h-[400px]">
            {slides[currentSlide].content}
          </div>
          
          <div className="mt-8 flex justify-between items-center">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-2 rounded-full ${currentSlide === 0 ? 'text-gray-400' : 'text-blue-600 hover:bg-blue-50'}`}
            >
              <ChevronLeft size={24} />
            </button>
            
            <span className="text-gray-600">
              Slide {currentSlide + 1} of {slides.length}
            </span>
            
            <button 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`p-2 rounded-full ${currentSlide === slides.length - 1 ? 'text-gray-400' : 'text-blue-600 hover:bg-blue-50'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
