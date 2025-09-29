
export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number; // in square meters
  imageUrl: string;
  roi: number; // percentage
  capitalGain: number; // percentage
  status: 'En Venta' | 'En Renta' | 'Vendida' | 'Rentada' | 'Pausada';
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  avatarUrl: string;
}
