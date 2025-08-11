import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const TestimonialHighlights = ({ compact = false, limit = null }) => {
  const { classes } = useTheme();

  const testimonialHighlights = [
    {
      id: 1,
      rating: 5,
      highlight:
        "Exceptional React.js development skills and professional communication",
      client: "Sarah Johnson",
      position: "Product Manager",
      company: "TechStart Inc.",
      project: "E-commerce Platform",
      avatar: "SJ",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      rating: 5,
      highlight: "Delivered a robust Python FastAPI backend ahead of schedule",
      client: "Michael Chen",
      position: "CTO",
      company: "DataFlow Solutions",
      project: "API Development",
      avatar: "MC",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      rating: 5,
      highlight:
        "Outstanding full-stack development and problem-solving abilities",
      client: "Emily Rodriguez",
      position: "Startup Founder",
      company: "InnovateLab",
      project: "MVP Development",
      avatar: "ER",
      color: "from-green-500 to-teal-500",
    },
    {
      id: 4,
      rating: 5,
      highlight:
        "Professional, reliable, and delivers high-quality code consistently",
      client: "David Kim",
      position: "Tech Lead",
      company: "WebSolutions Pro",
      project: "Full-Stack Application",
      avatar: "DK",
      color: "from-orange-500 to-red-500",
    },
  ];

  const displayTestimonials = limit
    ? testimonialHighlights.slice(0, limit)
    : testimonialHighlights;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-yellow-500" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  if (compact) {
    return (
      <div
        className={`${classes.cardBg} rounded-xl shadow-lg ${classes.border} p-6 transition-colors duration-300`}
      >
        <h3 className={`text-xl font-bold ${classes.text} mb-4 text-center`}>
          Client Satisfaction
        </h3>

        <div className="text-center mb-4">
          <div className="text-4xl font-bold text-purple-600 mb-2">5.0/5.0</div>
          <div className="flex justify-center mb-2">{renderStars(5)}</div>
          <p className={`text-sm ${classes.textMuted}`}>
            Average client rating
          </p>
        </div>

        <div className="space-y-3">
          {displayTestimonials.slice(0, 2).map((testimonial) => (
            <div
              key={testimonial.id}
              className="border-l-4 border-purple-500 pl-4"
            >
              <p className={`text-sm ${classes.textSecondary} italic mb-2`}>
                "{testimonial.highlight}"
              </p>
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white text-xs font-bold mr-2`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className={`text-xs font-semibold ${classes.text}`}>
                    {testimonial.client}
                  </p>
                  <p className={`text-xs ${classes.textMuted}`}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a
            href="/testimonials"
            className="text-purple-600 hover:text-purple-700 text-sm font-medium hover:underline"
          >
            View All Testimonials →
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-16 ${classes.bg} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold ${classes.text} mb-4`}>
            Client Testimonials
          </h2>
          <p className={`text-xl ${classes.textMuted} max-w-3xl mx-auto`}>
            What clients say about working with me on React.js, Python, and
            full-stack projects
          </p>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-12">
          <div
            className={`inline-block ${classes.cardBg} rounded-xl shadow-lg p-8 ${classes.border} transition-colors duration-300`}
          >
            <div className="text-5xl font-bold text-purple-600 mb-2">5.0</div>
            <div className="flex justify-center mb-2">{renderStars(5)}</div>
            <p className={classes.textMuted}>
              Average rating from {testimonialHighlights.length} clients
            </p>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${classes.cardBg} rounded-xl shadow-lg ${classes.border} p-8 hover:shadow-xl transition-all duration-300`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Rating */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex">{renderStars(testimonial.rating)}</div>
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-bold`}
                >
                  {testimonial.avatar}
                </div>
              </div>

              {/* Testimonial */}
              <blockquote
                className={`${classes.textSecondary} text-lg italic mb-6`}
              >
                "{testimonial.highlight}"
              </blockquote>

              {/* Client Info */}
              <div className={`border-t ${classes.borderLight} pt-4`}>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className={`font-semibold ${classes.text}`}>
                      {testimonial.client}
                    </h4>
                    <p className={`text-sm ${classes.textMuted}`}>
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-purple-600 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm ${classes.textLight}`}>Project:</p>
                    <p
                      className={`text-sm font-medium ${classes.textSecondary}`}
                    >
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className={`text-lg ${classes.textMuted} mb-6`}>
            Join these satisfied clients and start your project today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Project
            </a>
            <a
              href="/testimonials"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-300"
            >
              Read All Reviews
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialHighlights;
