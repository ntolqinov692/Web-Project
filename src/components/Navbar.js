import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">E-Learning</Link>
        <div className="flex space-x-4">
          <Link to="/dashboard" className="text-white">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;