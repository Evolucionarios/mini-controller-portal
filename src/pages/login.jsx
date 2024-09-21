import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast, ToastContainer } from 'react-bootstrap';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import EvoWasteLogo from '../components/evowaste-logo/evowaste-logo';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await mockLogin(email, password);
    if (response.success) {
      document.cookie = `jwt=${response.token}; path=/; max-age=3600; SameSite=Strict`;
      navigate('/');
    } else {
      setShowToast(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#169c56] via-[#1a7d4c] to-[#1d5d42] px-4 sm:px-6 lg:px-8">
      <EvoWasteLogo className="text-4xl sm:text-5xl mb-6 sm:mb-8" />
      <div className="w-full max-w-md p-6 sm:p-8 bg-white rounded-lg shadow-md">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2 sm:mb-4">Acesse agora e confira!</h2>
          <p className="text-sm sm:text-base text-gray-600">Seja bem-vindo(a). Insira seus dados.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex items-center border rounded">
              <span className="px-3 py-2 bg-gray-100 text-gray-500">
                <FaEnvelope />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="w-full p-2 text-sm sm:text-base focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center border rounded">
              <span className="px-3 py-2 bg-gray-100 text-gray-500">
                <FaLock />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
                className="w-full p-2 text-sm sm:text-base focus:outline-none"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white font-bold rounded text-sm sm:text-base"
            style={{
              background: 'linear-gradient(90deg, #169c56 0%, #1d5d42 100%)',
            }}
          >
            Entrar no sistema
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-xs sm:text-sm text-[#169c56] hover:underline">
            Esqueceu sua senha?
          </a>
        </div>
      </div>
      <ToastContainer position="top-end" className="p-3">
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Erro de Login</strong>
          </Toast.Header>
          <Toast.Body>Usuário ou senha incorretos.</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default LoginPage;

const mockLogin = async (email, password) => {

  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (email === 'usuario@exemplo.com' && password === '123') {
    return {
      success: true,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    };
  } else {
    return { success: false };
  }
};
