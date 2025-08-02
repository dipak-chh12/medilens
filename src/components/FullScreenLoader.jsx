import React, { useEffect, useState } from 'react';

const loadingTexts = [
  'Analyzing your report…',
  'Extracting patient details…',
  'Summarizing findings…',
  'Checking for abnormalities…',
  'Recommending medicines and diet…',
  'Almost done…',
];

const FullScreenLoader = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/70 backdrop-blur-lg">
      <div className="flex flex-col items-center">
        {/* Animated Dots */}
        <div className="flex space-x-2 mb-6">
          <span className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
          <span className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
          <span className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
        </div>
        {/* Rotating Text */}
        <div className="text-lg md:text-xl font-semibold text-primary text-center min-h-[2.5rem]">
          {loadingTexts[textIndex]}
        </div>
      </div>
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-16px); }
        }
        .animate-bounce {
          animation: bounce 1.2s infinite;
        }
      `}</style>
    </div>
  );
};

export default FullScreenLoader; 