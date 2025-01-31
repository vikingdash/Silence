import React from 'react';

const CTA = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Begin Your Journey to Inner Peace
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join our community of mindful practitioners and discover the transformative power of silence
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-200 transition-colors">
            Start Free Trial
          </button>
          <button className="px-8 py-3 border-2 border-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;