import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      title: "Upload Medical Report",
      description: "Simply upload your medical report as a PDF or image file (JPEG, PNG, etc.)"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI-Powered Analysis",
      description: "Our advanced AI extracts and analyzes the text from your medical report instantly."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Get Clear Summary",
      description: "Receive an easy-to-understand summary of your medical report with key insights and explanations."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
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

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Gradient Background - similar to hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FAFF] to-[#EEF2FF]"></div>
      
      {/* Subtle gradient orbs - similar to hero */}
      <div className="absolute top-6 left-1/4 w-48 h-48 bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-6 right-1/4 w-64 h-64 bg-gradient-to-r from-[#8B5CF6]/10 to-[#6366F1]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 md:mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            How It Works
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Get instant medical report summaries in just three simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative"
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg">
                {index + 1}
              </div>
              
              {/* Step Card - improved design */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 to-[#8B5CF6]/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <motion.div 
                  className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 text-[#6366F1] relative z-10"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {step.icon}
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden md:block absolute top-1/2 -right-4 md:-right-6 w-8 md:w-12 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] transform -translate-y-1/2 z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-8 md:mt-12"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.button 
            className="px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#7C3AED] text-white font-semibold text-base md:text-lg shadow-lg hover:scale-105 transition flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Try MediLens Now</span>
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 