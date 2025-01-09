import { useEffect } from 'react';
import AOS from 'aos';

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Modern and responsive websites built with the latest technologies",
      icon: "🌐"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that engage and convert",
      icon: "🎨"
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your business",
      icon: "📈"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" data-aos="fade-up">Our Services</h2>
          <p className="text-lg text-gray-600" data-aos="fade-up" data-aos-delay="100">
            We offer a wide range of digital services to help your business grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;