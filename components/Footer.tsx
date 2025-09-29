
import React from 'react';
import { LogoIcon } from './icons/LogoIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { FacebookIcon } from './icons/FacebookIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <LogoIcon className="h-10 w-10 text-secondary" />
              <span className="font-anton text-2xl tracking-wider">LEONEL REALTOR GGS</span>
            </a>
            <p className="text-gray-400 max-w-md">
              Tu socio estratégico para inversiones inmobiliarias inteligentes en el Caribe Mexicano. Maximizamos tu ROI con un enfoque basado en datos.
            </p>
          </div>

          <div>
            <h4 className="font-anton text-lg uppercase text-secondary mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#propiedades" className="hover:text-secondary transition-colors">Propiedades</a></li>
              <li><a href="#invertir" className="hover:text-secondary transition-colors">Invertir</a></li>
              <li><a href="#nosotros" className="hover:text-secondary transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-secondary transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-anton text-lg uppercase text-secondary mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><InstagramIcon className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><WhatsAppIcon className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><FacebookIcon className="w-6 h-6" /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Leonel Realtor GGS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
