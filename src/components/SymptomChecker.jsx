import React, { useState } from 'react';
import Block from './Block';

const SymptomChecker = ({ onSymptomSubmit }) => {
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!symptoms.trim()) return;

    setLoading(true);
    setFeedback('');

    try {
        const response = await onSymptomSubmit(symptoms);
        setFeedback(response);
    } catch (error) {
        console.error("Error getting feedback:", error);
        setFeedback('Sorry, something went wrong. Please try again.');
    } finally {
        setLoading(false);
    }
  };

  return (
    <Block title="Explain Your Symptoms">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="For example: 'I have a persistent cough and a mild fever.'"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            rows="4"
            disabled={loading}
          />
        </div>
        <div className="flex justify-end">
          <button 
            type="submit"
            disabled={loading || !symptoms.trim()}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
          >
            {loading ? 'Getting Feedback...' : 'Get Feedback'}
          </button>
        </div>
      </form>

      {feedback && (
        <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-sm text-red-600 mb-4">Disclaimer: This is an AI-generated answer trained on thousands of real patient data. Consult a physician for accurate results.</p>
            <h4 className="font-semibold text-gray-800 mb-2">AI Feedback:</h4>
            <div className="prose max-w-none">
                {feedback.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
      )}
    </Block>
  );
};

export default SymptomChecker;