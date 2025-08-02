import React from 'react';
import { motion } from 'framer-motion';
import Block from './Block';
import SymptomChecker from './SymptomChecker';

const ResultPage = ({ result, onBack }) => {
  if (!result) return null;
  
  const {
    patientDetails = {},
    reportDetails = {},
    summary = '',
    abnormalities = '',
    recommendedMedicines = '',
    recommendedDiet = '',
    advisory = {},
    disclaimer = '',
  } = result;

  const handleSymptomSubmit = async (symptoms) => {
    const response = await fetch('http://localhost:3001/symptoms_check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms, result }),
    });
    const data = await response.json();
    return data.feedback;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFF] to-[#E0E7FF] py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Analysis Complete
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Your medical report has been analyzed by our AI assistant
          </p>
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-full bg-gray-600 text-white font-semibold hover:bg-gray-700 transition flex items-center space-x-2 mx-auto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Analyze Another Report</span>
          </button>
        </motion.div>

        {/* Results */}
        <div className="space-y-8">
          <Block title="Patient Details">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div><span className="font-medium">Name:</span> {patientDetails.name || '-'}</div>
              <div><span className="font-medium">Sex:</span> {patientDetails.sex || '-'}</div>
              <div><span className="font-medium">Age:</span> {patientDetails.age || '-'}</div>
            </div>
          </Block>
          
          <Block title="Report Details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><span className="font-medium">Report ID:</span> {reportDetails.reportId || '-'}</div>
              <div><span className="font-medium">Hospital:</span> {reportDetails.hospitalName || '-'}</div>
              <div><span className="font-medium">Doctor:</span> {reportDetails.doctorName || '-'}</div>
              <div><span className="font-medium">Report Date:</span> {reportDetails.reportDate || '-'}</div>
              <div><span className="font-medium">Collected On:</span> {reportDetails.collectedOn || '-'}</div>
              <div><span className="font-medium">Test Type:</span> {reportDetails.testType || '-'}</div>
              {reportDetails.other && <div><span className="font-medium">Other:</span> {reportDetails.other}</div>}
            </div>
          </Block>
          
          <Block title="Summary">
            <div className="prose prose-lg max-w-none">
              {summary ? `This is a summary of the report: ${summary}` : '-'}
            </div>
          </Block>
          
          <Block 
            title={abnormalities ? "Abnormalities Found" : "No Abnormalities Found"}
            status={abnormalities ? 'warning' : 'success'}
          >
            <div className="prose prose-lg max-w-none">
              {abnormalities ? `The following abnormalities were found: ${abnormalities}` : 'Everything is fine as per the report.'}
            </div>
          </Block>

          {recommendedMedicines && (
            <Block title="Recommended Medicines">
              <div className="prose prose-lg max-w-none">
                {recommendedMedicines}
              </div>
              {disclaimer && (
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 text-sm italic">{disclaimer}</p>
                </div>
              )}
            </Block>
          )}
          
          {recommendedDiet && (
            <Block title="Recommended Diet">
              <div className="prose prose-lg max-w-none">
                {recommendedDiet}
              </div>
            </Block>
          )}

          {advisory && (advisory.dos || advisory.donts) && (
            <Block title="Advisory">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advisory.dos && (
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Do's</h4>
                    <div className="prose max-w-none">{advisory.dos}</div>
                  </div>
                )}
                {advisory.donts && (
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Don'ts</h4>
                    <div className="prose max-w-none">{advisory.donts}</div>
                  </div>
                )}
              </div>
            </Block>
          )}

          <SymptomChecker onSymptomSubmit={handleSymptomSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;