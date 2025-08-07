import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800/95 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-blue-300 transition-all duration-300">
          <img src="./logo1.png" alt="" className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10'/>
        </Link>

        <ul className="hidden md:flex space-x-8">
          <li><Link to="/about" className="text-gray-300 hover:text-white font-medium transition-all duration-300 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link></li>
          
          <li><Link to="/portfolio" className="text-gray-300 hover:text-white font-medium transition-all duration-300 relative group">
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link></li>
          
          <li><Link to="/services" className="text-gray-300 hover:text-white font-medium transition-all duration-300 relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link></li>

          <li><Link to="/contact" className="bg-primary text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg">
            Hire Me
          </Link></li>
        </ul>

        <button className="md:hidden text-gray-300 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
