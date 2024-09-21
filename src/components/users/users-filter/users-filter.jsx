import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function UsersFilter({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-stretch">
        <div className="relative w-full md:w-3/4 md:mr-4 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Pesquisar usuários..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full h-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center justify-center whitespace-nowrap w-full md:w-1/4 h-10">
          <FaPlus className="mr-2" /> Adicionar usuário
        </button>
      </div>
    </div>
  );
}

UsersFilter.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};
