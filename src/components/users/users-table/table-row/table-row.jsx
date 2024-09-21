import React from 'react';
import { Badge } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function UserTableRow({ user, handleEdit, handleDelete, isMobile }) {
  if (isMobile) {
    return (
      <div className="mt-3 mb-2 p-4 border rounded-lg">
        <h3 className="font-bold">{user.nome}</h3>
        <p className="text-sm">{user.email}</p>
        <div className="mt-2">
          {user.permissoes.map(perm => (
            <Badge key={perm} bg={perm === 'Gerente' ? 'primary' : 'secondary'} className="mr-1">
              {perm}
            </Badge>
          ))}
        </div>
        <div className="mt-2 flex justify-end">
          <button className="text-blue-500 mr-2" title="Editar" onClick={handleEdit}>
            <FaEdit size={20} />
          </button>
          <button className="text-red-500" title="Remover" onClick={handleDelete}>
            <FaTrash size={20} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <tr className="border-b">
      <td className="p-3 text-center">{user.nome}</td>
      <td className="p-3 text-center">{user.email}</td>
      <td className="p-3 text-center">
        {user.permissoes.map(perm => (
          <Badge key={perm} bg={perm === 'Gerente' ? 'primary' : 'secondary'} className="mr-1">
            {perm}
          </Badge>
        ))}
      </td>
      <td className="p-3 text-center">
        <button className="text-blue-500 mr-2" title="Editar" onClick={handleEdit}>
          <FaEdit />
        </button>
        <button className="text-red-500" title="Remover" onClick={handleDelete}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}

UserTableRow.propTypes = {
  user: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};
