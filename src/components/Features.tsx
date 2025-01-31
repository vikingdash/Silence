import React from 'react';
import { Brain, Heart, Focus, Space as Peace } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Mental Clarity',
    description: 'Clear your mind and enhance cognitive function through regular silence practice'
  },
  {
    icon: Heart,
    title: 'Reduced Stress',
    description: 'Lower anxiety and stress levels by embracing moments of peaceful silence'
  },
  {
    icon: Focus,
    title: 'Improved Focus',
    description: 'Strengthen your concentration and attention span through mindful practice'
  },
  {
    icon: Peace,
    title: 'Inner Peace',
    description: 'Cultivate a deeper sense of tranquility and emotional balance'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Benefits of Practice</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how regular silence practice can transform your daily life and enhance your well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-black rounded-lg hover:bg-gray-800 transition-colors"
            >
              <feature.icon className="h-12 w-12 mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;