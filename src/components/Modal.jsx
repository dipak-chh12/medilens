import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children, currentStep = 1, onStepChange, patientDetails, onPatientDetailsChange }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      {/* Modal Content */}
      <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-primary/20 max-w-lg w-full mx-4 p-8 animate-fadeIn flex flex-col items-center">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-primary bg-white/60 rounded-full p-2 shadow-sm transition"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Instruction Text */}
        <div className="w-full mb-6">
          <h2 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
            Upload your reports
          </h2>
        </div>
        
        {/* Modal Content */}
        {children}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
};

export default Modal;