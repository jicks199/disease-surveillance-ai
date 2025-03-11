import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

export default function Alerts() {
  const alerts = [
    {
      id: 1,
      severity: 'high',
      title: 'COVID-19 Cases Surge',
      description: 'Significant increase in COVID-19 cases in downtown area',
      timestamp: '2 hours ago',
      icon: AlertTriangle,
    },
    {
      id: 2,
      severity: 'medium',
      title: 'Flu Season Alert',
      description: 'Higher than usual influenza cases reported',
      timestamp: '5 hours ago',
      icon: AlertCircle,
    },
    {
      id: 3,
      severity: 'low',
      title: 'Hospital Capacity Update',
      description: 'Local hospitals at 75% capacity',
      timestamp: '1 day ago',
      icon: Info,
    },
  ];

  const severityColors = {
    high: 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400',
    medium: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400',
    low: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8">Health Alerts</h1>

        <div className="space-y-6">
          {alerts.map((alert, index) => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl shadow-lg ${severityColors[alert.severity]}`}
            >
              <div className="flex items-start">
                <alert.icon className="h-6 w-6 mr-4 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{alert.title}</h2>
                    <span className="text-sm opacity-75">{alert.timestamp}</span>
                  </div>
                  <p className="mt-2">{alert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">Hospital Availability</h2>
            <div className="space-y-4">
              {['General Hospital', 'City Medical Center', 'Community Hospital'].map((hospital, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span>{hospital}</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-sm">
                    Available
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">Emergency Contacts</h2>
            <div className="space-y-4">
              {[
                { name: 'Emergency Response', number: '911' },
                { name: 'Health Hotline', number: '1-800-HEALTH' },
                { name: 'Poison Control', number: '1-800-222-1222' },
              ].map((contact, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span>{contact.name}</span>
                  <span className="font-mono">{contact.number}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}