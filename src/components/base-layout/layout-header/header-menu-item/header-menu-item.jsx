import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeaderMenuItem = ({ to, icon: Icon, label }) => (
  <Link to={to} className="flex flex-col items-center cursor-pointer">
    <Icon size={22} />
    <span className="text-xs mt-1">{label}</span>
  </Link>
);

HeaderMenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};

export default HeaderMenuItem;
