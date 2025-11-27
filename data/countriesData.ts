export interface Country {
  id: string;
  name: string;
  flag: any;
  capital: string;
  population: number;
  area: number;
  language: string;
  continent: string;
  description: string;
}

export const countriesData: Country[] = [
  {
    id: '1',
    name: 'France',
    flag: require('../assets/flags/france.png'),
    capital: 'Paris',
    population: 67000000,
    area: 643801,
    language: 'Français',
    continent: 'Europe',
    description: 'La France est un pays d\'Europe occidentale connu pour sa culture, sa gastronomie et son histoire riche.',
  },
  {
    id: '2',
    name: 'Allemagne',
    flag: require('../assets/flags/germany.png'),
    capital: 'Berlin',
    population: 83000000,
    area: 357022,
    language: 'Allemand',
    continent: 'Europe',
    description: 'L\'Allemagne est le pays le plus peuplé de l\'Union européenne, connu pour son économie forte et son innovation.',
  },
  {
    id: '3',
    name: 'Italie',
    flag: require('../assets/flags/italy.png'),
    capital: 'Rome',
    population: 60000000,
    area: 301340,
    language: 'Italien',
    continent: 'Europe',
    description: 'L\'Italie est célèbre pour son patrimoine artistique, architectural et culinaire.',
  },
  {
    id: '4',
    name: 'Espagne',
    flag: require('../assets/flags/spain.png'),
    capital: 'Madrid',
    population: 47000000,
    area: 505990,
    language: 'Espagnol',
    continent: 'Europe',
    description: 'L\'Espagne est connue pour ses plages, sa culture vibrante et son architecture unique.',
  },
  {
    id: '5',
    name: 'Tunisie',
    flag: require('../assets/flags/tunisia.png'),
    capital: 'Tunis',
    population: 12400000,
    area: 163610,
    language: 'Arabe',
    continent: 'Afrique',
    description: 'La Tunisie est un pays d\'Afrique du Nord connu pour ses plages méditerranéennes et son riche patrimoine historique.',
  },
];
