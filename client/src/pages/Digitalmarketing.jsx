import React from 'react';
import Navbar from '../components/Navbar';

const DigitalMarketing = () => {
  return (
    <div>

      <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-8 py-16 bg-gradient-to-r from-teal-50 to-white overflow-hidden relative">
        {/* Left Section: Text */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-12 relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 transition-transform transform hover:scale-105 hover:text-teal-600">
            Digital Marketing
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed transition-opacity opacity-90 hover:opacity-100">
            “Your brand is what people say about you when you’re not in the room.” 
            We emphasize the active nature of consumers in this quote. Our company makes lasting positive impressions that last beyond a consumer's initial interaction.
          </p>
        
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 relative z-10 flex justify-center">
          <img
            src="https://ik.imagekit.io/7uve7qsipm/digital.png?updatedAt=1724425460069" // Replace with the URL of your image
            alt="Digital Marketing"
            className="w-11/12 lg:w-4/5 h-auto max-w-lg rounded-lg shadow-lg transform hover:scale-105 transition-transform"
          />
        </div>

        {/* Background Decorative Element */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="rgba(0, 150, 136, 0.1)" />
            <circle cx="150" cy="150" r="70" fill="rgba(0, 150, 136, 0.1)" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
