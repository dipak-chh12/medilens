import React, { useState, useRef } from 'react';


const UploadBox = ({ onFilesProcessed, onAnalysisStart, onStartAnalysis }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const validateFile = (file) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'application/pdf'];
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (!validTypes.includes(file.type)) {
      throw new Error('Please upload a valid image (JPEG, PNG, GIF, WebP) or PDF file.');
    }
    if (file.size > maxSize) {
      throw new Error('File size must be less than 10MB.');
    }
    return true;
  };

  const extractTextFromImage = async (file) => {
    console.log('Starting OCR for image:', file.name, file.type);
    
    try {
      const worker = await createWorker('eng+fra+spa+deu+chi_sim+ara+rus', 1, {
        logger: m => console.log('OCR Progress:', m),
        errorHandler: err => console.error('OCR Error:', err)
      });
      
      // Configure worker for better medical document recognition
      await worker.setParameters({
        tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;()-/\'\" ',
        tessedit_pageseg_mode: '6', // Assume uniform block of text
        tessedit_ocr_engine_mode: '3', // Default, based on what is available
        preserve_interword_spaces: '1'
      });
      
      const { data: { text, confidence } } = await worker.recognize(file);
      console.log('OCR completed. Confidence:', confidence, 'Text length:', text.length);
      console.log('Extracted text preview:', text.substring(0, 200));
      
      await worker.terminate();
      
      if (!text || text.trim().length < 10) {
        throw new Error('OCR could not extract sufficient text from the image. Please ensure the image is clear and contains readable text.');
      }
      
      return text.trim();
    } catch (error) {
      console.error('OCR extraction failed:', error);
      throw new Error(`Failed to extract text from image: ${error.message}. Please try a clearer image or a different file format.`);
    }
  };

  const extractTextFromPDF = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        resolve(text || 'PDF content extracted');
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  const processFiles = async (files) => {
    try {
      setIsProcessing(true);
      setError('');
      const results = [];
      for (const file of files) {
        validateFile(file);
        results.push({ file });
      }
      onFilesProcessed(results);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      processFiles(files);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      processFiles(files);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      <div
        className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
          isDragOver 
            ? 'border-primary bg-primary/5' 
            : 'border-gray-300 hover:border-primary/50'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png,.gif,.webp"
          multiple
          onChange={handleFileSelect}
          className="hidden"
        />
        {isProcessing ? (
          <div className="space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="text-body text-gray-600">
              Processing your file(s)...
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <div>
              <h3 className="text-h3 text-text mb-2">
                Drop your files here
              </h3>
              <p className="text-body text-gray-600 mb-4">
                or click to browse
              </p>
              <p className="text-sm text-gray-500">
                Supports PDF, JPEG, PNG, GIF, WebP (Max 10MB each)
              </p>
            </div>
          </div>
        )}
      </div>
      
      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}
    </div>
  );
};

export default UploadBox;