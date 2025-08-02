import React from 'react';

const Hero = ({ onUploadClick }) => {
  return (
    <section className="bg-gradient-to-br from-secondary to-white py-20">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-h1 md:text-h1 text-text mb-6">
            Your Health, Understood
          </h1>
          <p className="text-body text-gray-600 mb-8 max-w-2xl mx-auto">
            Upload your medical report and get clear insights instantly.
          </p>
          <button 
            onClick={onUploadClick}
            className="btn-primary text-lg px-8 py-4"
          >
            Upload Report
          </button>
        </div>
        
        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-h3 text-text mb-2">Report Analysis</h3>
            <p className="text-body text-gray-600">AI-powered medical report interpretation.</p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-h3 text-text mb-2">Ask-AI Chat</h3>
            <p className="text-body text-gray-600">Ask follow-up questions in simple language.</p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
            </div>
            <h3 className="text-h3 text-text mb-2">Diet Guidance</h3>
            <p className="text-body text-gray-600">Personalized diet & lifestyle recommendations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 