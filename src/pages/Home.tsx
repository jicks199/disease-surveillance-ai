import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Revolutionizing Disease Surveillance with AI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to predict, monitor, and prevent disease outbreaks in real-time.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/dashboard"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <Brain className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">AI-Powered Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Advanced machine learning algorithms analyze health data to predict disease outbreaks before they occur.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <Shield className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Real-time Monitoring</h3>
            <p className="text-gray-600 dark:text-gray-300">
              24/7 surveillance of health metrics and disease patterns across multiple regions and healthcare facilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <Activity className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Instant Alerts</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Receive immediate notifications about potential health risks and outbreaks in your area.
            </p>
          </motion.div>
        </div>

        <div className="mt-24 text-center">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80"
            alt="Medical professionals using advanced technology"
            className="rounded-xl shadow-2xl mx-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
}