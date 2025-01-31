import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true); // Ensure navbar is visible on load
  }, []);

  return (
    <nav className={`bg-white shadow-lg fixed w-full z-50 top-0 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl font-bold text-blue-600 cursor-pointer"
            >
              GeekSpace
            </ScrollLink>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <ScrollLink to="home" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 px-3 py-2 cursor-pointer">
                Home
              </ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 px-3 py-2 cursor-pointer">
                About
              </ScrollLink>
              <ScrollLink to="services" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 px-3 py-2 cursor-pointer">
                Services
              </ScrollLink>
              <ScrollLink to="portfolio" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 px-3 py-2 cursor-pointer">
                Portfolio
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 px-3 py-2 cursor-pointer">
                Contact
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer">
                Get Started
              </ScrollLink>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ScrollLink to="home" smooth={true} duration={500} className="block text-gray-700 hover:text-blue-600 px-3 py-2 cursor-pointer" onClick={() => setIsOpen(false)}>
              Home
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className="block text-gray-700 hover:text-blue-600 px-3 py-2 cursor-pointer" onClick={() => setIsOpen(false)}>
              About
            </ScrollLink>
            <ScrollLink to="services" smooth={true} duration={500} className="block text-gray-700 hover:text-blue-600 px-3 py-2 cursor-pointer" onClick={() => setIsOpen(false)}>
              Services
            </ScrollLink>
            <ScrollLink to="portfolio" smooth={true} duration={500} className="block text-gray-700 hover:text-blue-600 px-3 py-2 cursor-pointer" onClick={() => setIsOpen(false)}>
              Portfolio
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="block text-gray-700 hover:text-blue-600 px-3 py-2 cursor-pointer" onClick={() => setIsOpen(false)}>
              Contact
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
