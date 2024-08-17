import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Software Engineer at Google',
    content: 'PrepWise.AI helped me ace my Google interview. The AI-generated challenges were spot-on, and the mock interviews boosted my confidence tremendously.',
    avatar: '/images/avatar1.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Frontend Developer at Facebook',
    content: "I can't thank PrepWise.AI enough. The personalized learning path and real-time feedback on my coding solutions were game-changers in my interview prep.",
    avatar: '/images/avatar2.jpg'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Data Scientist at Amazon',
    content: 'The AI interviewer in PrepWise.AI is incredibly realistic. It helped me identify my weak areas and improve rapidly. I landed my dream job thanks to this platform!',
    avatar: '/images/avatar3.jpg'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;