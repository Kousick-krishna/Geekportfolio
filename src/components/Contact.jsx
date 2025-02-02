import { useEffect, useState } from 'react';
import AOS from 'aos';
import axios from 'axios';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://geekportfolio-rho.vercel.app/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 201) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully!',
        });
  
        // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus({
          type: 'error',
          message: 'Unexpected server response. Please try again.',
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
  
      setStatus({
        type: 'error',
        message:
          error.response?.data?.message || 'Failed to send message. Please try again.',
      });
    }
  };
  

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" data-aos="fade-up">Contact Us</h2>
          <p className="text-lg text-gray-600" data-aos="fade-up" data-aos-delay="100">
            Get in touch with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <p className="text-gray-600">Email: geekspace24by7@gmail.com</p>
              <p className="text-gray-600">Call: +91 8248345160, 7305825218</p>
            </div>
          </div>

          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              {status.message && (
                <div className={`p-4 rounded-md ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {status.message}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
