
import React, { useState } from 'react';
import { LogoIcon } from './icons/LogoIcon';

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#propiedades', label: 'Propiedades' },
    { href: '#invertir', label: 'Invertir' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header className="bg-primary/90 backdrop-blur-sm text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center space-x-2">
            <LogoIcon className="h-10 w-10 text-secondary" />
            <span className="font-anton text-2xl tracking-wider">LEONEL GGS</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="font-inter font-medium text-sm uppercase tracking-widest hover:text-secondary transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                 <a href="/admin" className="font-inter font-medium text-sm uppercase tracking-widest hover:text-secondary transition-colors duration-300">
                  Admin Panel
                </a>
                <button onClick={onLogout} className="bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition-colors duration-300 font-inter text-sm">
                  Logout
                </button>
              </>
            ) : (
              <a href="#contacto" className="bg-secondary text-primary font-bold py-2 px-6 rounded-full hover:bg-white transition-colors duration-300 font-inter text-sm">
                Agendar Cita
              </a>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4 items-center">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="font-inter font-medium text-sm uppercase tracking-widest hover:text-secondary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
               {isAuthenticated ? (
                <>
                  <a href="/admin" className="font-inter font-medium text-sm uppercase tracking-widest hover:text-secondary transition-colors duration-300 mt-4" onClick={() => setIsMenuOpen(false)}>
                    Admin Panel
                  </a>
                  <button onClick={() => { onLogout(); setIsMenuOpen(false); }} className="bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-colors duration-300 font-inter text-sm">
                    Logout
                  </button>
                </>
              ) : (
                <a href="#contacto" className="bg-secondary text-primary font-bold py-3 px-8 rounded-full hover:bg-white transition-colors duration-300 font-inter text-sm" onClick={() => setIsMenuOpen(false)}>
                  Agendar Cita
                </a>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
