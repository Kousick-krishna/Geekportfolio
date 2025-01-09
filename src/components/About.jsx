import { useEffect } from 'react';
import AOS from 'aos';
import about from '../assets/about.jpg';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" data-aos="fade-up">About Us</h2>
          <p className="text-lg text-gray-600" data-aos="fade-up" data-aos-delay="100">
            We are a passionate team dedicated to delivering exceptional web solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <img src={about} alt="About Us" className="rounded-lg shadow-lg" />
          </div>
          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 mb-6">
              We are a team of dedicated professionals who are passionate about creating innovative web solutions that help businesses grow and succeed in the digital world.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Expert Development Team</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Quality Focused Solutions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>24/7 Support Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;