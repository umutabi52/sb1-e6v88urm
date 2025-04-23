import { PriceOption } from '../types';

export const priceOptions: PriceOption[] = [
  {
    id: 'standard',
    name: 'Standard Reinigung',
    basePrice: 35,
    unit: 'pro Stunde',
  },
  {
    id: 'deep',
    name: 'Grundreinigung',
    basePrice: 45,
    unit: 'pro Stunde',
  },
  {
    id: 'window',
    name: 'Fensterreinigung',
    basePrice: 8,
    unit: 'pro Fenster',
  },
  {
    id: 'office',
    name: 'Büroreinigung',
    basePrice: 30,
    unit: 'pro Stunde',
  },
];