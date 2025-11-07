
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold text-gray-700">Finding the best spots for you...</p>
      <p className="text-gray-500">Our AI is thinking hard!</p>
    </div>
  );
};

export default LoadingSpinner;
