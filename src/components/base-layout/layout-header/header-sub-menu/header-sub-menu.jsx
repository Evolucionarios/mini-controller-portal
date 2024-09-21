import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderSubMenu = ({ isOpen, onClose, items }) => {
  const subMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        subMenuRef.current &&
        !subMenuRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={subMenuRef}
      className="absolute top-full left-1/2 transform -translate-x-1/2 z-10 w-48 bg-white text-sm text-black shadow-lg rounded-md border border-gray-300"
    >
      {items.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className="block px-4 py-2 text-xs hover:bg-gray-100"
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

HeaderSubMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HeaderSubMenu;
