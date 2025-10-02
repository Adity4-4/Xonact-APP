import React from 'react';

const Header = () => {
  return (
    <header className="bg-red-500 px-6 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          Xonact
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a 
            href="#home" 
            className="text-white text-base hover:text-red-100 transition-colors"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-white text-base hover:text-red-100 transition-colors"
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-white text-base hover:text-red-100 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <button className="bg-white text-red-500 px-6 py-2.5 rounded-lg font-semibold hover:bg-red-50 transition-colors">
          Creators Studio
        </button>
      </div>
    </header>
  );
};

export default Header