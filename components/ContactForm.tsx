
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contacto" className="py-20 bg-primary text-white">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-anton text-4xl md:text-5xl uppercase text-secondary">Inicia tu Proceso de Inversión</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Completa este formulario para que nuestro equipo de expertos analice tu perfil y te presente las oportunidades que mejor se alinean con tus objetivos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre Completo</label>
              <input type="text" id="name" className="w-full bg-white/20 border border-secondary/50 rounded-md py-2 px-4 focus:ring-secondary focus:border-secondary outline-none transition" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Correo Electrónico</label>
              <input type="email" id="email" className="w-full bg-white/20 border border-secondary/50 rounded-md py-2 px-4 focus:ring-secondary focus:border-secondary outline-none transition" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">Teléfono (WhatsApp)</label>
              <input type="tel" id="phone" className="w-full bg-white/20 border border-secondary/50 rounded-md py-2 px-4 focus:ring-secondary focus:border-secondary outline-none transition" />
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2">Presupuesto de Inversión (USD)</label>
              <select id="budget" className="w-full bg-white/20 border border-secondary/50 rounded-md py-2 px-4 focus:ring-secondary focus:border-secondary outline-none transition text-white">
                <option className="bg-primary">$250k - $500k</option>
                <option className="bg-primary">$500k - $1M</option>
                <option className="bg-primary">$1M - $2.5M</option>
                <option className="bg-primary">$2.5M+</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Áreas de Interés</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['Tulum', 'Playa del Carmen', 'Alto ROI', 'Preventa'].map(interest => (
                  <div key={interest} className="flex items-center">
                    <input id={interest} type="checkbox" className="h-4 w-4 rounded border-secondary/50 text-secondary focus:ring-secondary bg-transparent" />
                    <label htmlFor={interest} className="ml-2 text-sm">{interest}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje Adicional</label>
              <textarea id="message" rows={4} className="w-full bg-white/20 border border-secondary/50 rounded-md py-2 px-4 focus:ring-secondary focus:border-secondary outline-none transition"></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button type="submit" className="bg-secondary text-primary font-bold py-3 px-12 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 font-inter text-lg">
                Solicitar Asesoría
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
