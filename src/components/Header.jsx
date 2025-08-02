import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo with medical icon */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <span className="text-2xl font-semibold text-gray-900">MediLens</span>
        </div>
        
        {/* Centered Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="bg-gray-100 rounded-full px-3 py-2 flex items-center space-x-2">
            <a href="#" className="text-base text-gray-700 hover:text-primary font-medium px-4 py-2 rounded-full hover:bg-white transition-colors">Home</a>
            <a href="#" className="text-base text-gray-700 hover:text-primary font-medium px-4 py-2 rounded-full hover:bg-white transition-colors">How It Works</a>
            <div className="relative group">
              <button className="flex items-center text-base text-gray-700 hover:text-primary font-medium px-4 py-2 rounded-full hover:bg-white transition-colors focus:outline-none">
                Features
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#" className="text-base text-gray-700 hover:text-primary font-medium px-4 py-2 rounded-full hover:bg-white transition-colors">Support</a>
          </div>
        </nav>
        
        {/* Buttons with medical context */}
        <div className="flex items-center space-x-3">
          <button className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-white border border-gray-300 text-gray-900 text-base font-medium hover:bg-gray-100 transition">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Get Started
          </button>
          <button className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-base font-semibold hover:from-[#5B5BD6] hover:to-[#7C3AED] transition">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Upload Report
            <span className="ml-2 bg-white/20 rounded-full p-1">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 