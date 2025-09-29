
import React from 'react';
import { LogoIcon } from './icons/LogoIcon';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-primary text-white">
      <header className="bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <LogoIcon className="h-10 w-10 text-secondary" />
              <span className="font-anton text-2xl tracking-wider">ADMIN PANEL</span>
            </div>
            <div>
              <a href="/" className="font-inter font-medium text-sm uppercase tracking-widest hover:text-secondary transition-colors duration-300 mr-6">
                Ver Sitio
              </a>
              <button
                onClick={onLogout}
                className="bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition-colors duration-300 font-inter text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-anton text-4xl text-secondary mb-2">Bienvenido, Administrador</h1>
        <p className="text-gray-400 mb-8">Desde aquí puedes gestionar el contenido y las operaciones del sitio web.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder cards for admin actions */}
          <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors duration-300">
            <h2 className="font-anton text-2xl text-secondary">Gestión de Propiedades</h2>
            <p className="text-gray-300 mt-2">Añadir, editar y eliminar propiedades del inventario.</p>
            <button className="mt-4 bg-secondary text-primary font-bold py-2 px-6 rounded-full text-sm">Administrar</button>
          </div>

          <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors duration-300">
            <h2 className="font-anton text-2xl text-secondary">Gestión de Clientes (CRM)</h2>
            <p className="text-gray-300 mt-2">Visualizar y actualizar el estado de los leads generados.</p>
             <button className="mt-4 bg-secondary text-primary font-bold py-2 px-6 rounded-full text-sm">Administrar</button>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors duration-300">
            <h2 className="font-anton text-2xl text-secondary">Control del Frontend</h2>
            <p className="text-gray-300 mt-2">Modificar textos e imágenes de las secciones principales.</p>
             <button className="mt-4 bg-secondary text-primary font-bold py-2 px-6 rounded-full text-sm">Administrar</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
