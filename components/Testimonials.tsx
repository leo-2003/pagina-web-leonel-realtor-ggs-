
import React from 'react';
import { Testimonial } from '../types';

const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Vargas',
    location: 'Inversionista, Monterrey',
    quote: 'El nivel de análisis de datos que Leonel proporcionó fue clave. Tomé una decisión informada y mi ROI ha superado las proyecciones iniciales. Un verdadero profesional.',
    avatarUrl: 'https://picsum.photos/seed/avatar1/200/200',
  },
  {
    id: 2,
    name: 'Sophia Chen',
    location: 'Inversionista, California',
    quote: 'Como inversionista extranjera, la confianza era mi prioridad. El equipo de GGS fue transparente y me guió en todo, desde lo legal hasta la administración. Mi mejor inversión.',
    avatarUrl: 'https://picsum.photos/seed/avatar2/200/200',
  },
   {
    id: 3,
    name: 'Alejandro Torres',
    location: 'Inversionista, Ciudad de México',
    quote: 'Lo que más valoro es su visión a futuro. No solo buscan una venta rápida, sino una relación a largo plazo basada en el crecimiento de mi patrimonio. Totalmente recomendados.',
    avatarUrl: 'https://picsum.photos/seed/avatar3/200/200',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-anton text-4xl md:text-5xl text-primary uppercase">Lo Que Dicen Nuestros Inversionistas</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            La confianza y los resultados son los pilares de nuestra relación con cada cliente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 italic text-lg mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-secondary" />
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
