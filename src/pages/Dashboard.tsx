import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Users, AlertTriangle, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { icon: Activity, label: 'Active Cases', value: '2,345', change: '+5.2%' },
    { icon: Users, label: 'Recovered', value: '12,456', change: '+8.1%' },
    { icon: AlertTriangle, label: 'Critical', value: '123', change: '-2.3%' },
    { icon: TrendingUp, label: 'Predictions', value: '89%', change: '+1.2%' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8">Disease Surveillance Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="mt-4">
                <span className={`text-sm ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change} from last week
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">Disease Trends</h2>
            <div className="h-64 flex items-center justify-center">
              <p className="text-gray-600 dark:text-gray-400">Chart placeholder</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">Geographic Distribution</h2>
            <div className="h-64 flex items-center justify-center">
              <p className="text-gray-600 dark:text-gray-400">Map placeholder</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}