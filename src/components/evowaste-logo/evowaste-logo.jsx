import React from 'react';
import PropTypes from 'prop-types';

const EvoWasteLogo = ({ className = 'text-lg', textColor = 'text-white' }) => {
  return (
    <div className={`relative ${className} font-bold ${textColor}`}>
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="block w-full h-px bg-gray-800 transform rotate-12 -translate-y-1"></span>
        <span className="block w-full h-px bg-gray-800 transform -rotate-12 translate-y-1"></span>
      </span>
      EvoWaste
    </div>
  );
};

EvoWasteLogo.propTypes = {
  className: PropTypes.string,
  textColor: PropTypes.string
};

export default EvoWasteLogo;
