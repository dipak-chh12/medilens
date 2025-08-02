import React, { useState, useEffect } from 'react';

const ResultDisplay = ({ analysis, isLoading, error, onReset }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (analysis || isLoading || error) {
      setIsVisible(true);
    }
  }, [analysis, isLoading, error]);

  if (!isVisible) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-h2 text-text mb-4">
              Analysis Results
            </h2>
            <p className="text-body text-gray-600">
              Your medical report has been analyzed by our AI assistant
            </p>
          </div>

          <div className="card">
            {isLoading && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
                <h3 className="text-h3 text-text mb-2">
                  Analyzing your report...
                </h3>
                <p className="text-body text-gray-600">
                  Our AI is processing your medical data and generating insights
                </p>
              </div>
            )}

            {error && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-h3 text-red-600 mb-2">
                  Analysis Failed
                </h3>
                <p className="text-body text-gray-600 mb-6">
                  {error}
                </p>
                <button 
                  onClick={onReset}
                  className="btn-secondary"
                >
                  Try Again
                </button>
              </div>
            )}

            {analysis && !isLoading && !error && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-h3 text-text">
                    Medical Report Analysis
                  </h3>
                  <button 
                    onClick={onReset}
                    className="btn-secondary text-sm"
                  >
                    Analyze New Report
                  </button>
                </div>

                <div className="prose prose-lg max-w-none">
                  {analysis.split('\n').map((paragraph, index) => {
                    if (paragraph.trim() === '') return null;
                    
                    // Check if it's a numbered list item
                    if (/^\d+\./.test(paragraph.trim())) {
                      return (
                        <div key={index} className="flex items-start space-x-3 mb-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                            {paragraph.match(/^\d+/)[0]}
                          </span>
                          <p className="text-body text-gray-700 flex-1">
                            {paragraph.replace(/^\d+\.\s*/, '')}
                          </p>
                        </div>
                      );
                    }
                    
                    // Check if it's a heading (starts with a number and colon)
                    if (/^\d+:/.test(paragraph.trim())) {
                      return (
                        <h4 key={index} className="text-h3 text-primary font-semibold mt-6 mb-3">
                          {paragraph}
                        </h4>
                      );
                    }
                    
                    // Regular paragraph
                    return (
                      <p key={index} className="text-body text-gray-700 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-h3 text-blue-900 font-semibold mb-2">
                        Important Notice
                      </h4>
                      <p className="text-body text-blue-800">
                        This analysis is for informational purposes only and should not replace professional medical advice. 
                        Always consult with a qualified healthcare provider for medical decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultDisplay; 