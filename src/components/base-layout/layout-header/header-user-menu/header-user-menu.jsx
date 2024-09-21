import React from 'react';
import PropTypes from 'prop-types';

const HeaderUserMenu = ({ isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="absolute top-full right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md border border-gray-300">
      <div className="p-2 text-xs">Menu que mostra usuário logado</div>
    </div>
  );
};

HeaderUserMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default HeaderUserMenu;
