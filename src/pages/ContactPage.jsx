import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all required fields.');
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('Message sent successfully! I will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: '',
      });
    } catch (error) {
      setStatus('Failed to send message. Please try again later.');
      console.error('Contact form submission error:', error);
    }
  };

  return (
    <div className="container mx-auto p-8 bg-gray-900 text-primary min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Let's Work Together</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Have a project in mind? I'd love to hear about it and discuss how we can make it happen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-center">Send Me a Message</h2>
          <p className="text-gray-300 text-center mb-8">
            Ready to bring your project to life? Let's discuss how I can help you build something amazing.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-200 mb-2">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-400 transition-all duration-300"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-200 mb-2">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-400 transition-all duration-300"
                required
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-lg font-semibold text-gray-200 mb-2">Project Type</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white transition-all duration-300"
              >
                <option value="">Select a project type</option>
                <option value="web-app">Web Application</option>
                <option value="api">API Development</option>
                <option value="ui-ux">UI/UX Implementation</option>
                <option value="consulting">Technical Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-gray-200 mb-2">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-400 transition-all duration-300 resize-none"
                placeholder="Tell me about your project, timeline, and any specific requirements..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-xl"
            >
              Send Message
            </button>

            {status && (
              <p className={`text-center mt-4 text-lg ${status.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Contact Info & Social */}
        <div className="space-y-8">
          {/* Contact Information */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.58l9.615-6.759h.749c.904 0 1.636.732 1.636 1.636z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">surajkumarsah2060@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Timezone</p>
                  <p className="text-white">GMT+5:30 (IST)</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Response Time</p>
                  <p className="text-white">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Connect With Me</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://github.com/SurajSah776" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300 group">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span className="text-white group-hover:text-purple-400">GitHub</span>
              </a>

              <a href="https://linkedin.com/in/suraj-kumar-sah" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300 group">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-white group-hover:text-purple-400">LinkedIn</span>
              </a>

              <a href="https://twitter.com/SurajSah776" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300 group">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <span className="text-white group-hover:text-purple-400">Twitter</span>
              </a>

              <a href="mailto:surajkumarsah2060@gmail.com" className="flex items-center space-x-3 p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300 group">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.58l9.615-6.759h.749c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
                <span className="text-white group-hover:text-purple-400">Email</span>
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Availability</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Monday - Friday</span>
                <span className="text-white">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Weekend</span>
                <span className="text-gray-400">By appointment</span>
              </div>
              <div className="mt-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <p className="text-purple-300 text-sm">
                  💡 Currently accepting new projects for Q2 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;