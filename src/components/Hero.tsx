import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      ></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Find Peace in Silence
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          Discover the transformative power of mindful silence in your daily life
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-200 transition-colors">
          Begin Your Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;