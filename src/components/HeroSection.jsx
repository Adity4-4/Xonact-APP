import { useState } from "react";
import { Search } from 'lucide-react';

// Hero Section Component
const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Text */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-normal text-gray-900 mb-2">
            Bring the power in your
          </h1>
          <h2 className="text-5xl font-bold text-gray-900">
            Marketing.
          </h2>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSearch} className="flex gap-0">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-6 py-4 text-base border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-8 py-4 rounded-r-lg hover:bg-red-600 transition-colors flex items-center justify-center"
            >
              <Search className="w-6 h-6" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection