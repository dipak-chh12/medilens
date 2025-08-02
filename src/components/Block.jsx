import React from 'react';
import { motion } from 'framer-motion';

const Block = ({ title, children, status }) => {
  const statusClasses = {
    danger: 'bg-red-100/80 border-red-400/30',
    warning: 'bg-yellow-100/80 border-yellow-400/30',
    success: 'bg-green-100/80 border-green-400/30',
    default: 'bg-white/80 border-primary/10',
  };

  const statusTextClasses = {
    danger: 'text-red-800',
    warning: 'text-yellow-800',
    success: 'text-green-800',
    default: 'text-primary',
  }

  return (
    <motion.div
      className={`mb-8 p-8 backdrop-blur-lg rounded-2xl shadow-lg border ${statusClasses[status] || statusClasses.default}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className={`text-xl font-semibold mb-4 ${statusTextClasses[status] || statusTextClasses.default}`}>{title}</h3>
      <div className="text-gray-800 text-base leading-relaxed">{children}</div>
    </motion.div>
  );
};

export default Block;