import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Target, Users } from 'lucide-react';

const features = [
  {
    icon: <Code size={40} />,
    title: 'AI-Powered Coding Practice',
    description: 'Solve coding challenges with real-time AI assistance and feedback.',
  },
  {
    icon: <Brain size={40} />,
    title: 'Personalized Learning Path',
    description: 'Adaptive curriculum tailored to your skill level and goals.',
  },
  {
    icon: <Target size={40} />,
    title: 'Mock Interviews',
    description: 'Simulate real interview scenarios with our AI interviewer.',
  },
  {
    icon: <Users size={40} />,
    title: 'Community Support',
    description: 'Connect with peers and mentors for collaborative learning.',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose PrepWise.AI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;