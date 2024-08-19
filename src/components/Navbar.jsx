import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProfileDropdown from './ProfileDropdown';

const Navbar = ({ isLoggedIn, username }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          PrepWise.AI
        </Link>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="text-gray-600 hover:text-primary">
                Dashboard
              </Link>
              <ProfileDropdown username={username} />
            </>
          ) : (
            <Link to="/auth">
              <Button variant="outline">Login / Sign Up</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;