import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-96 bg-gradient-to-r from-teal-200 via-blue-100 to-white px-8 py-16">
      <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-teal-700">
          Make your ideas Executable!
        </h1>
        <p className="text-base lg:text-lg mb-6 text-gray-700">
          We are a team of talented designers making websites and also making a place in digital marketing!
        </p>
        <a
          href="#about"
          className="inline-block bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
        >
          Know More
        </a>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4 lg:px-8">
        <img
          src="https://ik.imagekit.io/7uve7qsipm/Untitled%20design.png?updatedAt=1724423685958" // Replace with the URL of your image
          alt="Hero"
          className="w-full h-full lg:h-80 lg:w-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
