
import React from 'react';
import { Property } from '../types';
import PropertyCard from './PropertyCard';

const mockProperties: Property[] = [
  {
    id: 1,
    title: 'Villa de Lujo con Cenote Privado',
    location: 'Tulum',
    price: 1250000,
    bedrooms: 4,
    bathrooms: 5,
    area: 450,
    imageUrl: 'https://picsum.photos/seed/prop1/800/600',
    roi: 12,
    capitalGain: 18,
    status: 'En Venta',
  },
  {
    id: 2,
    title: 'Penthouse Moderno Vista al Mar',
    location: 'Playa del Carmen',
    price: 850000,
    bedrooms: 3,
    bathrooms: 3,
    area: 280,
    imageUrl: 'https://picsum.photos/seed/prop2/800/600',
    roi: 10,
    capitalGain: 15,
    status: 'En Venta',
  },
  {
    id: 3,
    title: 'Condominio Ecológico en La Veleta',
    location: 'Tulum',
    price: 475000,
    bedrooms: 2,
    bathrooms: 2,
    area: 150,
    imageUrl: 'https://picsum.photos/seed/prop3/800/600',
    roi: 14,
    capitalGain: 22,
    status: 'En Venta',
  },
];

const FeaturedProperties: React.FC = () => {
  return (
    <section id="propiedades" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-anton text-4xl md:text-5xl text-primary uppercase">Propiedades Destacadas</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Una selección curada de oportunidades de inversión con el más alto potencial de rentabilidad y plusvalía en la Riviera Maya.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="text-center mt-12">
           <a href="#" className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300 font-inter text-base">
              Ver Todas las Propiedades
            </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
