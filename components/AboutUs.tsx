
import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <img 
              src="https://picsum.photos/seed/realtor/800/1000" 
              alt="Leonel Realtor GGS" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:order-1">
            <h2 className="font-anton text-4xl md:text-5xl text-primary uppercase leading-tight">Tu Socio Estratégico para Inversiones Visionarias</h2>
            <p className="mt-6 text-lg text-gray-600">
              En Leonel Realtor GGS, no solo vendemos propiedades; creamos oportunidades de inversión de alto rendimiento. Nuestro enfoque analítico y profundo conocimiento del mercado en Tulum y Playa del Carmen nos permite identificar activos con un potencial de crecimiento excepcional.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Somos tu aliado confiable, guiándote en cada paso del proceso con transparencia, datos precisos y una estrategia personalizada para alcanzar tus metas financieras.
            </p>
            <a href="#contacto" className="mt-8 inline-flex items-center gap-2 bg-secondary text-primary font-bold py-3 px-8 rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 font-inter">
              Conoce Nuestra Estrategia <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
