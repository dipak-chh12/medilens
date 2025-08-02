import React, { useState } from 'react';
import UploadBox from './UploadBox';

const TwoStepModal = ({ onClose, onStartAnalysis }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [filesReady, setFilesReady] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleFilesProcessed = (filesData) => {
    setUploadedFiles(filesData);
    setFilesReady(true);
    setError('');
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
    if (newFiles.length === 0) {
        setFilesReady(false);
    }
  };

  const handleStartAnalysis = () => {
    if (onStartAnalysis) {
      onStartAnalysis(uploadedFiles, {});
    }
  };

  return (
    <div className="w-full space-y-6">
      {!filesReady ? (
        <UploadBox 
          onFilesProcessed={handleFilesProcessed}
          onStartAnalysis={null}
        />
      ) : (
        <div className="space-y-4">
          {/* Preview Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {uploadedFiles.map((fileData, index) => (
              <div key={index} className="relative group">
                <div className="aspect-w-1 aspect-h-1">
                {fileData.file.type.startsWith('image/') ? (
                  <img src={URL.createObjectURL(fileData.file)} alt={`preview ${index}`} className="w-full h-full object-cover rounded-lg shadow-md" />
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-xs text-center p-2">{fileData.file.name}</span>
                  </div>
                )}
                </div>
                <button 
                  onClick={() => handleRemoveFile(index)} 
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
          
          {/* Action Button */}
          <button
            onClick={handleStartAnalysis}
            className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#7C3AED] text-white font-semibold shadow-lg hover:scale-105 transition flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span>Start Analyzing</span>
          </button>
        </div>
      )}
      
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}
    </div>
  );
};

export default TwoStepModal;