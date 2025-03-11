import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Activity, Bell, Map, Users, MessageSquare, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ isDark, toggleDarkMode }: NavbarProps) {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Brain, label: 'Home' },
    { path: '/dashboard', icon: Activity, label: 'Dashboard' },
    { path: '/alerts', icon: Bell, label: 'Alerts' },
    { path: '/prediction', icon: Map, label: 'Prediction' },
    { path: '/about', icon: Users, label: 'About' },
    { path: '/contact', icon: MessageSquare, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold">HealthWatch AI</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === item.path
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <item.icon className="h-4 w-4 mr-1" />
                {item.label}
              </Link>
            ))}
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}