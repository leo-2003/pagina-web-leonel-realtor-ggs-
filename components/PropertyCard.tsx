
import React from 'react';
import { Property } from '../types';
import { BedIcon } from './icons/BedIcon';
import { BathIcon } from './icons/BathIcon';
import { AreaIcon } from './icons/AreaIcon';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <div className="relative">
        <img src={property.imageUrl} alt={property.title} className="w-full h-56 object-cover" />
        <div className="absolute top-4 left-4 bg-secondary text-primary font-bold text-xs uppercase px-3 py-1 rounded-full">{property.location}</div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-anton text-2xl tracking-wide">{property.title}</h3>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-center text-gray-600 mb-4">
            <div className="flex items-center gap-2">
                <BedIcon className="w-5 h-5 text-secondary" />
                <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-2">
                <BathIcon className="w-5 h-5 text-secondary" />
                <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-2">
                <AreaIcon className="w-5 h-5 text-secondary" />
                <span>{property.area} m²</span>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center my-4">
          <div className="bg-gray-100 p-3 rounded-md">
            <div className="text-sm text-gray-500">ROI Estimado</div>
            <div className="text-xl font-bold text-primary">{property.roi}%</div>
          </div>
          <div className="bg-gray-100 p-3 rounded-md">
            <div className="text-sm text-gray-500">Plusvalía Anual</div>
            <div className="text-xl font-bold text-primary">{property.capitalGain}%</div>
          </div>
        </div>

        <div className="mt-auto">
          <div className="text-3xl font-anton text-primary text-center mb-4">
            ${property.price.toLocaleString('en-US')} <span className="text-base font-inter text-gray-500">USD</span>
          </div>
          <button className="w-full bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-secondary hover:text-primary transition-colors duration-300 font-inter">
            Ver Detalles de Inversión
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
