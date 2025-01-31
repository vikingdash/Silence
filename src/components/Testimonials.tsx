import React from 'react';

const testimonials = [
  {
    quote: "Practicing silence has completely transformed my daily routine. I've never felt more focused and at peace.",
    author: "Sarah J.",
    role: "Mindfulness Practitioner"
  },
  {
    quote: "The clarity I've gained through regular silence practice has improved both my work and personal relationships.",
    author: "Michael R.",
    role: "Business Executive"
  },
  {
    quote: "This practice helped me find inner calm during the most challenging times of my life.",
    author: "Emma L.",
    role: "Yoga Instructor"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Voices of Silence
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 bg-gray-900 rounded-lg"
            >
              <blockquote className="text-lg text-gray-300 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-sm">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;