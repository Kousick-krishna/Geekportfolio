import { useEffect, useState } from 'react';
import AOS from 'aos';
import portfolio1 from '../assets/ecom.jpg';
import portfolio2 from '../assets/mob.jpg';
import portfolio3 from '../assets/ui.jpg';

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "E-commerce Platform",
      category: "web",
      image: portfolio1,
    },
    {
      title: "Mobile App",
      category: "app",
      image: portfolio2,
    },
    {
      title: "Brand Identity",
      category: "design",
      image: portfolio3,
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" data-aos="fade-up">Portfolio</h2>
          <p className="text-lg text-gray-600" data-aos="fade-up" data-aos-delay="100">
            Check out our latest work
          </p>
        </div>

        <div className="flex justify-center mb-12" data-aos="fade-up">
          <div className="flex space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 rounded-md ${filter === 'web' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              Web
            </button>
            <button
              onClick={() => setFilter('app')}
              className={`px-4 py-2 rounded-md ${filter === 'app' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              App
            </button>
            <button
              onClick={() => setFilter('design')}
              className={`px-4 py-2 rounded-md ${filter === 'design' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              Design
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-200 capitalize">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;