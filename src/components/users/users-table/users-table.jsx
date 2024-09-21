import React from 'react';
import PropTypes from 'prop-types';
import UserTableRow from './table-row/table-row';

export default function UsersTable({ mockUsers, searchTerm, setToastMessage, setShowToast }) {
  const filteredUsers = mockUsers.filter(user =>
    user.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.permissoes.some(perm => perm.toLowerCase().includes(searchTerm.toLowerCase()))
  );
    
  const handleEdit = () => {
    setToastMessage('Usuário editado');
    setShowToast(true);
  };
    
  const handleDelete = () => {
    setToastMessage('Usuário excluído');
    setShowToast(true);
  };

  return (
    <div className="overflow-x-auto">
      <div className="block md:hidden">
        {filteredUsers.map((user) => (
          <UserTableRow 
            key={user.id} 
            user={user} 
            handleEdit={handleEdit} 
            handleDelete={handleDelete} 
            isMobile={true}
          />
        ))}
      </div>
      <table className="hidden md:table w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3 text-center">Nome</th>
            <th className="border p-3 text-center">Email</th>
            <th className="border p-3 text-center w-48">Permissões</th>
            <th className="border p-3 text-center w-24">Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <UserTableRow 
              key={user.id} 
              user={user} 
              handleEdit={handleEdit} 
              handleDelete={handleDelete} 
              isMobile={false}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

UsersTable.propTypes = {
  mockUsers: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setToastMessage: PropTypes.func.isRequired,
  setShowToast: PropTypes.func.isRequired,
};
