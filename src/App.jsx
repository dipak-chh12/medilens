import React, { useState } from 'react';
import Header from './components/Header';
import LandingHero from './components/LandingHero';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Modal from './components/Modal';
import TwoStepModal from './components/TwoStepModal';
import ResultPage from './components/ResultPage';
import FullScreenLoader from './components/FullScreenLoader';


function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'result'

  // Open modal when upload button is clicked
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  // Called when "Start Analyzing" button is clicked from TwoStepModal
  const handleStartAnalysis = async (filesData, patientDetails) => {
    setIsAnalyzing(true);
    setError('');
    setResult(null);
    setModalOpen(false);
    
    try {
            const formData = new FormData();

            if (!filesData || filesData.length === 0 || !filesData[0].file) {
                setError('Please provide a valid medical report to analyze.');
                setIsAnalyzing(false);
                return; // Stop execution if no valid file
            }

            filesData.forEach(fileData => {
                const file = fileData.file;
                formData.append('files', file, file.name);
            });

            const response = await fetch('/api/analyze', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to analyze report on the server.');
            }

            const data = await response.json();
            setResult(data);
            setCurrentPage('result'); // Navigate to result page on success

        } catch (err) {
            setError('Failed to analyze the medical report. Please try again.');
        } finally {
            setIsAnalyzing(false);
        }
    };

    const handleBackToHome = () => {
        setCurrentPage('home');
        setResult(null);
        setError('');
    };

  if (currentPage === 'result') {
    return (
      <div className="min-h-screen">
        <Header />
        <ResultPage result={result} onBack={handleBackToHome} />
        {isAnalyzing && <FullScreenLoader />}
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <LandingHero onUploadClick={handleOpenModal} />
      <HowItWorks />
      <Contact />
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <TwoStepModal 
          onClose={handleCloseModal}
          onStartAnalysis={handleStartAnalysis}
        />
      </Modal>
      {isAnalyzing && <FullScreenLoader />}
    </div>
  );
}

export default App;