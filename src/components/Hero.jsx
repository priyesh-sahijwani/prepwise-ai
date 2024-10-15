import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gradient-to-r from-primary to-purple-600 text-white py-32"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Ace Your Tech Interviews with AI
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
        >
          Prepare smarter, not harder. Let AI guide your coding interview journey and boost your chances of landing your dream tech job.
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            onClick={() => navigate('/auth')}
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;