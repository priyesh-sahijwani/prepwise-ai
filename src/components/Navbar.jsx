import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProfileDropdown from './ProfileDropdown';

const Navbar = ({ isLoggedIn, username, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

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
              <Link to="/profile" className="text-gray-600 hover:text-primary">
                Profile
              </Link>
              <ProfileDropdown username={username} onLogout={handleLogout} />
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