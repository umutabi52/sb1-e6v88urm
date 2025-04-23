import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'regular-cleaning',
    title: 'Regelmäßige Reinigung',
    description: 'Unsere regelmäßige Reinigung umfasst alle grundlegenden Reinigungsaufgaben für Ihr Zuhause oder Büro.',
    icon: 'Home',
    price: 'ab 69€',
  },
  {
    id: 'deep-cleaning',
    title: 'Grundreinigung',
    description: 'Eine tiefgehende Reinigung, die auch schwer zugängliche Bereiche und hartnäckige Verschmutzungen beseitigt.',
    icon: 'Sparkles',
    price: 'ab 120€',
  },
  {
    id: 'window-cleaning',
    title: 'Fensterreinigung',
    description: 'Professionelle Reinigung Ihrer Fenster für streifenfreie, klare Aussichten.',
    icon: 'CheckSquare',
    price: 'ab 20€',
  },
  {
    id: 'move-in-out',
    title: 'Umzugsreinigung',
    description: 'Umfassende Reinigung beim Ein- oder Auszug, damit Ihr neues Zuhause blitzt.',
    icon: 'Truck',
    price: 'ab 150€',
  },
  {
    id: 'office-cleaning',
    title: 'Büroreinigung',
    description: 'Spezielle Reinigungsdienste für Büros und Geschäftsräume.',
    icon: 'Briefcase',
    price: 'ab 80€',
  },
  {
    id: 'carpet-cleaning',
    title: 'Teppichreinigung',
    description: 'Professionelle Teppichreinigung zur Entfernung von Flecken und Allergenen.',
    icon: 'Layers',
    price: 'auf Anfrage',
  },
];