import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import doctorImage from '../assets/doctor.png';

const LandingHero = ({ onUploadClick }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const highlightedWords = [
    "Accurately",
    "Securely", 
    "Instantly",
    "Confidently"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % highlightedWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [highlightedWords.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.8
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <section className="h-screen flex flex-col justify-start items-center pt-6 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFF] to-[#E0E7FF]"></div>
      
      {/* Medical-themed gradient orbs */}
      <div className="absolute top-8 left-8 w-64 h-64 bg-gradient-to-r from-[#6366F1]/15 to-[#8B5CF6]/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-72 h-72 bg-gradient-to-r from-[#8B5CF6]/15 to-[#6366F1]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Medical cross decoration */}
      <div className="absolute top-16 right-16 opacity-10">
        <svg className="w-14 h-14 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      
      {/* Doctor Image */}
      <motion.div 
        className="absolute right-0 top-0 h-full w-1/2 hidden lg:flex items-center justify-center z-20"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img 
          src={doctorImage} 
          alt="Medical Doctor" 
          className="h-full w-full object-cover object-center"
        />
      </motion.div>
      
      <motion.div 
        className="flex flex-col items-center relative z-10 max-w-2xl mx-auto px-6 lg:mr-auto lg:ml-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Trust Component */}
        <motion.div 
          className="flex flex-col items-center mb-4"
          variants={itemVariants}
        >
          {/* Overlapping Avatars */}
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-xs border-2 border-white shadow-sm -mr-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold text-xs border-2 border-white shadow-sm -mr-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-xs border-2 border-white shadow-sm -mr-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-xs border-2 border-white shadow-sm -mr-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold text-xs border-2 border-white shadow-sm">
              +99
            </div>
          </div>
          
          {/* Trust Text */}
          <p className="text-xs text-gray-600 font-medium">
            Trusted by thousands of healthcare professionals
          </p>
        </motion.div>

        {/* Pill with medical icon */}
        <motion.div 
          className="flex items-center justify-center mb-6 w-full"
          variants={itemVariants}
        >
          <div className="flex-1 h-px bg-gray-300" />
          <div className="mx-3 px-4 py-1.5 rounded-full border border-primary/30 bg-white/80 backdrop-blur-sm shadow-sm flex items-center space-x-2 text-primary font-medium text-sm">
            <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>AI-Powered Healthcare</span>
          </div>
          <div className="flex-1 h-px bg-gray-300" />
        </motion.div>
        
        {/* Headline with medical context */}
        <motion.h1 
          className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 text-center leading-tight mb-5 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          <span className="block lg:whitespace-nowrap">Analyze Your Medical</span>
          <span className="block mt-2 lg:whitespace-nowrap">
            Reports{' '}
            <span className="relative inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent"
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {highlightedWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
        </motion.h1>
        
        {/* Improved subheading with medical focus */}
        <motion.p 
          className="text-base md:text-lg text-gray-600 text-center mb-6 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Upload your medical reports and receive instant, easy-to-understand summaries powered by advanced AI technology.
        </motion.p>
        
        {/* Medical benefits */}
        <motion.div 
          className="flex items-center justify-center space-x-4 md:space-x-6 mb-8 text-xs md:text-sm text-gray-500"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-1">
            <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>HIPAA Compliant</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Secure & Private</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-3 h-3 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Instant Results</span>
          </div>
        </motion.div>
        
        {/* Gradient Button with medical icon */}
        <motion.button 
          onClick={onUploadClick}
          className="px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#7C3AED] text-white font-semibold text-base md:text-lg shadow-lg hover:scale-105 transition flex items-center space-x-2"
          variants={buttonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Upload Medical Report</span>
          <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default LandingHero; 