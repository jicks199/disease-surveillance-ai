import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Thermometer, Activity, Stethoscope, Brain } from 'lucide-react';

export default function Prediction() {
  const [symptoms, setSymptoms] = useState({
    fever: false,
    cough: false,
    fatigue: false,
    headache: false,
  });

  const [prediction, setPrediction] = useState<null | {
    disease: string;
    probability: number;
    riskLevel: string;
    recommendations: string[];
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated AI prediction response
    setPrediction({
      disease: "Common Cold",
      probability: 85,
      riskLevel: "Low",
      recommendations: [
        "Rest and stay hydrated",
        "Monitor symptoms for 24-48 hours",
        "Practice good hygiene",
        "Consult a healthcare provider if symptoms worsen"
      ]
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8">AI Disease Prediction</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <Brain className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              Symptom Checker
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {Object.entries(symptoms).map(([symptom, value]) => (
                <div key={symptom} className="flex items-center">
                  <input
                    type="checkbox"
                    id={symptom}
                    checked={value}
                    onChange={(e) => setSymptoms(prev => ({
                      ...prev,
                      [symptom]: e.target.checked
                    }))}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor={symptom} className="ml-3 capitalize">
                    {symptom}
                  </label>
                </div>
              ))}
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Analyze Symptoms
              </button>
            </form>
          </div>

          {prediction && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <Stethoscope className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
                AI Prediction Results
              </h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Predicted Condition</p>
                  <p className="text-lg font-semibold">{prediction.disease}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Confidence Level</p>
                  <p className="text-lg font-semibold">{prediction.probability}%</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Risk Level</p>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-sm">
                    {prediction.riskLevel}
                  </span>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Recommendations</p>
                  <ul className="space-y-2">
                    {prediction.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <span className="h-5 w-5 mr-2 text-blue-600">•</span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}