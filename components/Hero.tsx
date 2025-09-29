
import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}></div>
      <div className="absolute inset-0 bg-primary opacity-70"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-anton text-4xl md:text-6xl lg:text-7xl uppercase tracking-wider mb-4 leading-tight">
          Inversiones Inmobiliarias Inteligentes
        </h1>
        <p className="font-inter text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
          Tu socio estratégico para maximizar tu portafolio en el Caribe Mexicano. Decisiones basadas en datos, resultados excepcionales.
        </p>
        <a 
          href="#propiedades" 
          className="inline-flex items-center gap-2 bg-secondary text-primary font-bold py-3 px-8 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 font-inter text-lg"
        >
          Explorar Inversiones <ArrowRightIcon className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
