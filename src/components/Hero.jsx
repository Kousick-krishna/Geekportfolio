import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hero from "../assets/hero.png";
import { Link as ScrollLink } from 'react-scroll';

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We offer modern solutions for growing your business
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We are team of talented developers and designers
            </p>
            <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
                          >
                            Get Started
                          </ScrollLink>
          </div>
          <div data-aos="zoom-in" className="hidden md:block">
            <img
              src={hero}
              alt="Hero"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;