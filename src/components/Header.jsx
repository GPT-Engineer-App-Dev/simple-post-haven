import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">My Personal Blog</Link>
          <div className="flex items-center space-x-4">
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="hover:text-gray-600 dark:hover:text-gray-300">Home</Link></li>
                <li><Link to="/about" className="hover:text-gray-600 dark:hover:text-gray-300">About</Link></li>
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;