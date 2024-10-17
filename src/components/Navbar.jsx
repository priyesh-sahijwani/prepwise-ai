import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          PrepWise.AI
        </Link>
        <div>
          <Button variant="outline">Login / Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;