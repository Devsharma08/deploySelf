import React from 'react';

const ConnectWorldwide = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gray-950 text-white py-20 px-6">
      {/* Background Map Image */}
      <img
        src="https://kartikchandra14.github.io/img/flat/map.png"
        alt="World Map"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      {/* Overlay Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Connect with Us from Anywhere in the World
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl">
          Whether you’re in India or across the globe, we’re just a message away.
          Reach out to us for collaboration, queries, or support — anytime, anywhere.
        </p>
      </div>

      {/* Decorative Pulse Circle */}
      <div className="absolute bottom-12 right-12 w-24 h-24 rounded-full bg-blue-500/20 blur-2xl animate-ping" />
    </section>
  );
};

export default ConnectWorldwide;
