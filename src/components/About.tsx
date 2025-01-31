import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Philosophy</h2>
            <p className="text-gray-300 text-lg mb-6">
              At Silence, we believe in the transformative power of mindful silence. Our platform is built on the understanding that "a wandering mind is an unhappy mind" - a principle supported by extensive research at Harvard University.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              We provide a sanctuary for those seeking mental clarity, emotional balance, and deeper self-awareness through the practice of silence and mindfulness.
            </p>
            <p className="text-gray-300 text-lg">
              Our mission is to help you cultivate a meaningful practice that enhances your mental well-being and brings more peace into your daily life.
            </p>
          </div>
          <div 
            className="relative h-96 rounded-lg overflow-hidden"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.8)'
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;