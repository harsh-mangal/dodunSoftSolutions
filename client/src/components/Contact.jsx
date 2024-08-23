import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 px-8 bg-gradient-to-r from-teal-100 to-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-600 mb-8">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-12">
          We'd love to hear from you. Please reach out with any questions or feedback.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Our Address</h3>
            <p className="text-gray-700 mb-4">GM Plaza - Best office space in Mohali</p>
            <p className="text-gray-700">Phase-7, Industrial Area, Sector 73</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Call Us</h3>
            <p className="text-gray-700 mb-4">+91-8968881110</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Email Us</h3>
            <p className="text-gray-700">dodunsoftsolutions@gmail.com</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl mx-auto max-w-lg">
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">Get in Touch</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">Your Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Subject of your message"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">Your Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
