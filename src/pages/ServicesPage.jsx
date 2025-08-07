import React from 'react';

const ServicesPage = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-900 text-primary min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Services</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          I offer comprehensive web development services to help bring your ideas to life.
        </p>
      </div>

      {/* Main Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600 card-hover relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          <div className="text-4xl mb-6 text-center">🚀</div>
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Full-Stack Development</h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            Complete web applications from frontend to backend using modern technologies like React, FastAPI, and PostgreSQL.
          </p>
          <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
            <li>Custom Web Application Development</li>
            <li>RESTful API Design & Integration</li>
            <li>Database Design & Optimization</li>
            <li>Deployment & DevOps Setup</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm px-4 py-2 rounded-full border border-purple-500/30">React</span>
            <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm px-4 py-2 rounded-full border border-purple-500/30">FastAPI</span>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600 card-hover relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          <div className="text-4xl mb-6 text-center">🎨</div>
          <h2 className="text-3xl font-bold mb-6 text-center text-white">UI/UX Implementation</h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            Transform designs into responsive, interactive user interfaces that provide exceptional user experiences.
          </p>
          <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
            <li>Responsive Design Implementation</li>
            <li>Interactive Prototyping</li>
            <li>Cross-browser Compatibility</li>
            <li>Performance Optimization</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm px-4 py-2 rounded-full border border-purple-500/30">Tailwind CSS</span>
            <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm px-4 py-2 rounded-full border border-purple-500/30">Figma</span>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600 card-hover relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          <div className="text-4xl mb-6 text-center">🔧</div>
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Technical Consulting</h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            Expert guidance on technology decisions, architecture planning, and development best practices.
          </p>
          <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
            <li>Technology Stack Advisory</li>
            <li>Code Review & Optimization</li>
            <li>Architecture Planning</li>
            <li>Performance Analysis</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm px-4 py-2 rounded-full border border-purple-500/30">Strategy</span>
            <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm px-4 py-2 rounded-full border border-purple-500/30">Optimization</span>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-semibold text-center mb-12">My Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">1</div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Discovery</h3>
            <p className="text-gray-300">Understanding your vision, goals, and project requirements through detailed consultation.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">2</div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Planning</h3>
            <p className="text-gray-300">Creating detailed project roadmap, technical architecture, and timeline for delivery.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">3</div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Development</h3>
            <p className="text-gray-300">Building your solution with clean, scalable code and regular progress updates.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">4</div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Delivery</h3>
            <p className="text-gray-300">Deploying your application and providing ongoing support for smooth operation.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Me */}
      <div className="bg-gray-800 p-12 rounded-2xl shadow-xl border border-gray-700 mb-20">
        <h2 className="text-4xl font-semibold text-center mb-12">Why Choose Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-purple-400 mb-2">Fast Delivery</h3>
            <p className="text-gray-300">Efficient development process with regular updates and on-time delivery.</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-purple-400 mb-2">Quality Focus</h3>
            <p className="text-gray-300">Clean, maintainable code with comprehensive testing and documentation.</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-purple-400 mb-2">Clear Communication</h3>
            <p className="text-gray-300">Regular updates, transparent processes, and responsive communication.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's discuss your ideas and create something amazing together.
        </p>
        <a
          href="/contact"
          className="bg-primary text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg inline-block"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default ServicesPage;