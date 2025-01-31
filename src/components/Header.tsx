import React, { useState } from 'react';
import { Moon, Menu, X, LogIn } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Moon className="h-8 w-8 text-gray-100" />
            <span className="ml-2 text-xl font-semibold">Silence</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <button className="flex items-center px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">About</a>
            <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white">Features</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">Contact</a>
            <button className="flex items-center w-full px-3 py-2 text-gray-300 hover:text-white">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;