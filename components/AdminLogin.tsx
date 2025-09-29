
import React, { useState } from 'react';
import { LogoIcon } from './icons/LogoIcon';

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would make an API call here.
    // For this demo, we'll use hardcoded credentials.
    if (email === 'admin@example.com' && password === 'password') {
      setError('');
      onLogin();
    } else {
      setError('Credenciales inválidas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary p-4">
      <div className="w-full max-w-md bg-white/10 p-8 rounded-2xl shadow-2xl backdrop-blur-lg text-white">
        <div className="text-center mb-8">
          <LogoIcon className="h-16 w-16 text-secondary mx-auto mb-4" />
          <h1 className="font-anton text-3xl tracking-wider">ADMIN ACCESS</h1>
          <p className="text-gray-400">Leonel Realtor GGS</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white/20 border border-secondary/50 rounded-md py-2 px-4 focus:ring-secondary focus:border-secondary outline-none transition placeholder-gray-400"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-white/20 border border-secondary/50 rounded-md py-2 px-4 focus:ring-secondary focus:border-secondary outline-none transition placeholder-gray-400"
              placeholder="••••••••••"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <div>
            <button
              type="submit"
              className="w-full bg-secondary text-primary font-bold py-3 px-12 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 font-inter text-lg"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
