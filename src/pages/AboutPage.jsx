import profile from '../assets/Profile1.jpg'

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-900 text-primary min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Get to know the person behind the code and the passion that drives my work.
        </p>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-20">
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="Suraj Kumar Sah - Full Stack Developer"
            className="rounded-full w-64 h-64 object-cover shadow-xl border-4 border-purple-500"
          />
        </div>
        
        <div className="flex-grow text-center md:text-left">
          <h2 className="text-4xl font-semibold mb-6">Full-Stack Developer & Problem Solver</h2>
          <p className="text-lg leading-relaxed mb-4 text-gray-300">
            I'm a passionate <span className="font-bold text-secondary">Full-Stack Developer</span> with a focus on creating 
            scalable web applications that make a real impact. With expertise in React, FastAPI, and PostgreSQL, 
            I help <span className="font-bold text-secondary">startups and growing businesses</span> transform their ideas into powerful digital solutions.
          </p>
        
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            My approach combines technical excellence with clear communication and user-centered design. 
            I believe in writing clean, maintainable code and building applications that not only work flawlessly 
            but also provide exceptional user experiences.
          </p>
        
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-purple-400 mb-1">Availability</h4>
              <p className="text-gray-300">Mon-Fri, 9AM-5PM (GMT+5:30)</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-purple-400 mb-1">Languages</h4>
              <p className="text-gray-300">English (Fluent), Hindi (Native)</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://github.com/SurajSah776" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/suraj-kumar-sah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://twitter.com/SurajSah776" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="mailto:surajkumarsah@example.com" className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.58l9.615-6.759h.749c.904 0 1.636.732 1.636 1.636z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-semibold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600 card-hover">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">React.js</h3>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out" style={{ width: '95%' }}></div>
            </div>
            <p className="text-right text-sm mt-3 text-gray-400">Expert</p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600 card-hover">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">JavaScript</h3>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out" style={{ width: '92%' }}></div>
            </div>
            <p className="text-right text-sm mt-3 text-gray-400">Expert</p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600 card-hover">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Tailwind CSS</h3>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out" style={{ width: '90%' }}></div>
            </div>
            <p className="text-right text-sm mt-3 text-gray-400">Advanced</p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600 card-hover">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Python</h3>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out" style={{ width: '88%' }}></div>
            </div>
            <p className="text-right text-sm mt-3 text-gray-400">Advanced</p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600 card-hover">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">FastAPI</h3>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out" style={{ width: '85%' }}></div>
            </div>
            <p className="text-right text-sm mt-3 text-gray-400">Proficient</p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600 card-hover">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">PostgreSQL</h3>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out" style={{ width: '80%' }}></div>
            </div>
            <p className="text-right text-sm mt-3 text-gray-400">Proficient</p>
          </div>
        </div>
      </div>

      {/* What I Do Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-semibold text-center mb-12">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Full-Stack Development</h3>
            <p className="text-gray-300 leading-relaxed">
              I build complete web applications from frontend to backend, ensuring seamless integration 
              and optimal performance across all components.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">UI/UX Implementation</h3>
            <p className="text-gray-300 leading-relaxed">
              I transform designs into responsive, interactive user interfaces that provide 
              exceptional user experiences across all devices.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">API Development</h3>
            <p className="text-gray-300 leading-relaxed">
              I create robust, scalable APIs using FastAPI that handle complex business logic 
              and integrate seamlessly with frontend applications.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Technical Consulting</h3>
            <p className="text-gray-300 leading-relaxed">
              I help businesses make informed technology decisions and optimize their 
              development processes for maximum efficiency and scalability.
            </p>
          </div>
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="text-center">
        <h2 className="text-4xl font-semibold mb-8">Tools & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 px-6 py-3 rounded-full text-lg border border-purple-500/30">Git & GitHub</span>
          <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 px-6 py-3 rounded-full text-lg border border-purple-500/30">Docker</span>
          <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 px-6 py-3 rounded-full text-lg border border-purple-500/30">VS Code</span>
          <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 px-6 py-3 rounded-full text-lg border border-purple-500/30">Figma</span>
          <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 px-6 py-3 rounded-full text-lg border border-purple-500/30">Vercel</span>
          <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 px-6 py-3 rounded-full text-lg border border-purple-500/30">Render</span>
          <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 px-6 py-3 rounded-full text-lg border border-purple-500/30">Postman</span>
          <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 px-6 py-3 rounded-full text-lg border border-purple-500/30">Vite</span>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;