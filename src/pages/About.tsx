import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Database, Code, Users, Globe } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Technology',
      description: 'Utilizing state-of-the-art machine learning algorithms for accurate disease prediction and pattern recognition.'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Enterprise-grade security measures ensuring your health data remains private and protected.'
    },
    {
      icon: Database,
      title: 'Real-time Processing',
      description: 'Processing millions of health data points in real-time for immediate insights and alerts.'
    },
    {
      icon: Code,
      title: 'Open Architecture',
      description: 'Built on modern, scalable technology stack allowing seamless integration with existing health systems.'
    },
    {
      icon: Users,
      title: 'Collaborative Platform',
      description: 'Enabling healthcare professionals to work together and share insights securely.'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Monitoring disease patterns and health trends across multiple geographic regions.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About HealthWatch AI</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Revolutionizing disease surveillance through artificial intelligence and real-time data analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We're committed to transforming global health surveillance through innovative AI technology. 
                Our platform enables early detection of disease outbreaks, facilitates rapid response, 
                and helps healthcare providers make data-driven decisions.
              </p>
              <ul className="space-y-4">
                {[
                  'Early detection of disease outbreaks',
                  'Real-time health monitoring',
                  'AI-powered prediction models',
                  'Global health data analysis'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-2 w-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
                alt="Medical professionals using advanced technology"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}