import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

import UsersHeader from '../components/users/users-header/users-header';
import UsersFilter from '../components/users/users-filter/users-filter';
import UsersTable from '../components/users/users-table/users-table';

const mockUsers = [
  { id: 1, nome: 'João Silva', email: 'joao@exemplo.com', permissoes: ['Gerente'] },
  { id: 2, nome: 'Maria Santos', email: 'maria@exemplo.com', permissoes: ['Operador'] },
  { id: 3, nome: 'Carlos Oliveira', email: 'carlos@exemplo.com', permissoes: ['Gerente', 'Operador'] },
  { id: 4, nome: 'Ana Rodrigues', email: 'ana@exemplo.com', permissoes: ['Operador'] },
  { id: 5, nome: 'Pedro Costa', email: 'pedro@exemplo.com', permissoes: ['Gerente'] },
];

const UsersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  return (
    <div className="p-2 md:ml-2 md:mr-2">
      <UsersHeader />
      <UsersFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UsersTable mockUsers={mockUsers} searchTerm={searchTerm} setToastMessage={setToastMessage} setShowToast={setShowToast} />

      <ToastContainer position="top-end" className="p-3">
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Notificação</strong>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default UsersPage;
