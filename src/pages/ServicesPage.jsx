import React from "react";
import freelanceServices from "../data/freelanceServices";
import AvailabilityStatus from "../components/AvailabilityStatus";
import TestimonialHighlights from "../components/TestimonialHighlights";
import ProjectInquiryForm from "../components/ProjectInquiryForm";
import ProfessionalMetrics from "../components/ProfessionalMetrics";
import { useTheme } from "../contexts/ThemeContext";
import SEO from "../components/SEO";
import { seoData } from "../data/seoData";

const ServicesPage = () => {
  const { classes } = useTheme();

  return (
    <div
      className={`container mx-auto p-8 ${classes.bg} min-h-screen transition-colors duration-300`}
    >
      <SEO {...seoData.services} />
      <div className="text-center mb-12">
        <h1 className={`text-5xl font-bold mb-4 ${classes.text}`}>
          Professional Services
        </h1>
        <p className={`text-xl ${classes.textMuted} max-w-3xl mx-auto`}>
          Specialized freelance services for React.js frontend, Python FastAPI
          backend, and full-stack e-commerce solutions.
        </p>
      </div>

      {/* Freelance Services Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-purple-600">
          Freelance Services
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {freelanceServices.map((service) => (
            <div
              key={service.id}
              className={`${classes.cardBg} p-8 rounded-2xl shadow-lg ${classes.cardHover} transition-all duration-300 ${classes.border} hover:border-purple-300 dark:hover:border-purple-500 relative overflow-hidden`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>

              {/* Service Header */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className={`text-2xl font-bold ${classes.text} mb-2`}>
                  {service.title}
                </h3>
                <p className={`${classes.textMuted} text-lg`}>
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-600 mb-3">
                  Features Included:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`${classes.textSecondary} flex items-start`}
                    >
                      <span className="text-purple-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-600 mb-3">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 text-sm px-3 py-1 rounded-full border border-purple-200 dark:border-purple-500/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-600 mb-3">
                  Deliverables:
                </h4>
                <ul className="space-y-1">
                  {service.deliverables.map((deliverable, index) => (
                    <li
                      key={index}
                      className={`${classes.textSecondary} flex items-center`}
                    >
                      <span className="text-purple-600 mr-2">📦</span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline & Pricing */}
              <div
                className={`mb-6 p-4 ${classes.bg} rounded-lg ${classes.border} transition-colors duration-300`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-600 font-semibold">
                    Timeline:
                  </span>
                  <span className={classes.text}>{service.timeline}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-600 font-semibold">
                    Starting at:
                  </span>
                  <span className={`${classes.text} font-bold text-lg`}>
                    {service.pricing.starting}
                  </span>
                </div>
                <div className={`text-sm ${classes.textMuted}`}>
                  {service.pricing.note}
                </div>
              </div>

              {/* Ideal For */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-600 mb-2">
                  Ideal For:
                </h4>
                <p className={classes.textSecondary}>{service.ideal_for}</p>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href="/contact"
                  className="bg-primary text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl inline-block w-full text-center"
                >
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="mb-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-purple-400">
          Additional Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600 card-hover relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <div className="text-4xl mb-6 text-center">🎨</div>
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              UI/UX Implementation
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              Transform designs into responsive, interactive user interfaces
              with modern frameworks.
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
              <li>Responsive Design Implementation</li>
              <li>Interactive Prototyping</li>
              <li>Cross-browser Compatibility</li>
              <li>Performance Optimization</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm px-4 py-2 rounded-full border border-purple-500/30">
                Tailwind CSS
              </span>
              <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm px-4 py-2 rounded-full border border-purple-500/30">
                Figma
              </span>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600 card-hover relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <div className="text-4xl mb-6 text-center">🔧</div>
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              Technical Consulting
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              Expert guidance on technology decisions, architecture planning,
              and development best practices.
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
              <li>Technology Stack Advisory</li>
              <li>Code Review & Optimization</li>
              <li>Architecture Planning</li>
              <li>Performance Analysis</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm px-4 py-2 rounded-full border border-purple-500/30">
                Strategy
              </span>
              <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm px-4 py-2 rounded-full border border-purple-500/30">
                Optimization
              </span>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600 card-hover relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <div className="text-4xl mb-6 text-center">🚀</div>
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              Deployment & DevOps
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              Complete deployment solutions and ongoing maintenance for your
              applications.
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
              <li>Cloud Deployment Setup</li>
              <li>CI/CD Pipeline Configuration</li>
              <li>Performance Monitoring</li>
              <li>Ongoing Maintenance</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm px-4 py-2 rounded-full border border-purple-500/30">
                AWS
              </span>
              <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm px-4 py-2 rounded-full border border-purple-500/30">
                Docker
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-semibold text-center mb-12">My Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              1
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">
              Discovery
            </h3>
            <p className="text-gray-300">
              Understanding your vision, goals, and project requirements through
              detailed consultation.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              2
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">
              Planning
            </h3>
            <p className="text-gray-300">
              Creating detailed project roadmap, technical architecture, and
              timeline for delivery.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              3
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">
              Development
            </h3>
            <p className="text-gray-300">
              Building your solution with clean, scalable code and regular
              progress updates.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              4
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">
              Delivery
            </h3>
            <p className="text-gray-300">
              Deploying your application and providing ongoing support for
              smooth operation.
            </p>
          </div>
        </div>
      </div>

      {/* Professional Advantages */}
      <div className="bg-gray-800 p-12 rounded-2xl shadow-xl border border-gray-700 mb-20">
        <h2 className="text-4xl font-semibold text-center mb-12">
          Professional Advantages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-purple-400 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-300">
              Efficient development process with regular updates and on-time
              delivery.
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-purple-400 mb-2">
              Quality Focus
            </h3>
            <p className="text-gray-300">
              Clean, maintainable code with comprehensive testing and
              documentation.
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-purple-400 mb-2">
              Clear Communication
            </h3>
            <p className="text-gray-300">
              Regular updates, transparent processes, and responsive
              communication.
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-purple-400 mb-2">
              ESSPL Experience
            </h3>
            <p className="text-gray-300">
              Professional experience at ESSPL with proven track record in
              enterprise solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Information */}
      <div className="mb-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-purple-400">
          Investment & Pricing
        </h2>
        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Transparent Pricing
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">💰</span>
                  Fixed-price projects with clear deliverables
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">📋</span>
                  Detailed project proposals with timeline
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">🔄</span>
                  Flexible payment terms and milestones
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">📞</span>
                  Free initial consultation and project assessment
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What's Included
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  Complete source code ownership
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  Comprehensive documentation
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  30-day post-launch support
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">✓</span>
                  Deployment assistance and guidance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Availability Status and Professional Metrics */}
      <div className="mb-20">
        <AvailabilityStatus />
      </div>

      {/* Professional Metrics Dashboard */}
      <div className="mb-20">
        <ProfessionalMetrics />
      </div>

      {/* Client Testimonials and Success Metrics */}
      <div className="mb-20">
        <TestimonialHighlights limit={4} />
      </div>

      {/* Project Inquiry Form */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Start Your Project</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to work together? Fill out the form below with your project
            details and I'll get back to you with a detailed proposal.
          </p>
        </div>
        <ProjectInquiryForm />
      </div>

      {/* Project Inquiry CTA Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">Prefer to Talk Directly?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Schedule a consultation call to discuss your requirements in detail.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="/contact"
            className="bg-primary text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg inline-block"
          >
            Schedule Consultation
          </a>
          <a
            href="/contact"
            className="border-2 border-purple-500 text-purple-400 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-purple-500 hover:text-white text-lg inline-block"
          >
            Contact Directly
          </a>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-purple-400 mb-3">
            Professional Guarantee
          </h3>
          <p className="text-gray-300 mb-2">
            ⏱️ Response within 24 hours for all inquiries
          </p>
          <p className="text-gray-300 mb-2">
            📧 Free initial consultation and project assessment
          </p>
          <p className="text-gray-300">
            🎯 Detailed proposal with timeline and deliverables
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
