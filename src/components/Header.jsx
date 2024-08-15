import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-bold text-primary"
        >
          PrepWise.AI
        </motion.div>
        <nav>
          <Button
            onClick={() => navigate('/auth')}
            variant="outline"
            className="font-semibold"
          >
            Login / Sign Up
          </Button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;