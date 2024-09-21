import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BaseLayout from './layouts/base-layout';
import CollectionOrdersPage from './pages/collection-orders';
import CompaniesPage from './pages/companies';
import ConfigurationsPage from './pages/configurations';
import CustomersPage from './pages/customers';
import LoginPage from './pages/login';
import UsersPage from './pages/users';
import WastePage from './pages/waste';
import ProtectedRoute from './routes/protected-route';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={
        <ProtectedRoute>
          <BaseLayout />
        </ProtectedRoute>
      }>
        <Route index element={<div className="p-4">  <h1 className="text-2xl font-bold">Página Inicial</h1></div>} />
        <Route path="clientes" element={<CustomersPage />} />
        <Route path="empresas" element={<CompaniesPage />} />
        <Route path="usuarios" element={<UsersPage />} />
        <Route path="configuracoes" element={<ConfigurationsPage />} />
        <Route path="ordens-coleta" element={<CollectionOrdersPage />} />
        <Route path="residuos" element={<WastePage />} />
      </Route>
    </Routes>
  );
}

export default App;
