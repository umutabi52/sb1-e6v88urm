import { PriceOption } from '../types';

export const priceOptions: PriceOption[] = [
  {
    id: 'standard',
    name: 'Standard Reinigung',
    basePrice: 37,
    unit: 'pro Stunde',
  },
  {
    id: 'deep',
    name: 'Grundreinigung',
    basePrice: 48,
    unit: 'pro Stunde',
  },
  {
    id: 'window',
    name: 'Fensterreinigung',
    basePrice: 9.50,
    unit: 'pro Fenster',
  },
  {
    id: 'office',
    name: 'Büroreinigung',
    basePrice: 35,
    unit: 'pro Stunde',
  },
];