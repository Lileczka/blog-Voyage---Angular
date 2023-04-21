export interface IVoyage {
  id: number;
  country: string;
  city: string;
  goDate?: Date | null;
  backDate?: Date | null;
  image: string;
  imageGalerie: IimageGalerie[];
  voyage: string[];
  description: string[];
  avisPositive: string[];
  avisNegatif: string[];
  conseil: string[];
}
export interface IimageGalerie {
  id: number;
  titre: string;
  picture: string;
}

export const IVOYAGES: IVoyage[] = [
  {
    id: 1,
    country: 'Maroc',
    city: 'Marrakech',
    goDate: new Date(2023, 4, 14),
    backDate: new Date(2023, 4, 24),
    image: 'assets/photos/maroc/maroc1.jpg',
    imageGalerie: [
      {
        id: 1,
        titre: 'Maroc,désert avec des chameaux',
        picture: 'assets/photos/marock2.jpg',
      },
      {
        id: 2,
        titre: 'Maroc, désert la nuit , des gens autours de feu',
        picture: 'assets/photos/marock3.jpg',
      },
    ],
    voyage:['xx'],
    description: [
      "Marrakech... rien que son nom permet de s'évader et promet tout un programme.\n Marrakech, également appelée la ville rouge est une destination phare du Maroc. \nEt pour cause : ville animée, de culture, de divertissements, d'histoire, d'architecture, c'est un lieu où tout est possible. \nIl existe en effet différents types de séjour : voyage romantique pour les couples, voyage en famille, voyage culturel, voyage insolite... \nMarrakech est l'une des rares destinations réunissant les différents critères exigés par ces profils de voyageurs diamétralement opposés. \nSon histoire intense laisse une grande place à la culture dans cette ville que l'on connaît aussi bien sous le nom de ville rouge que ville ocre ou perle du sud. Ses paysages dont la beauté est à vous couper le souffle promettent de forts moments de romantisme. Son caractère permet quant à lui à ses visiteurs de ne pas s'ennuyer une seconde entre l'animation de ses souks ou les spectacles nocturnes dans les différents quartiers de la ville.",
    ],
    avisPositive: [
      "L'ancienne cité jardin a conservé la tradition de somptueux espaces verts.",
      'hôtel très sympa',
      "équipe d'animation excellente",
      ' Beaucoup de lieux touristiques accessibles à pied.',
    ],
    avisNegatif: ['les chambres bruillants'],
    conseil: ["Il est recommmandé de ne pas boire l'eau du robine"],
  },
  {
    id: 2,
    country: 'Pologne',
    city: 'Cracovie',
    goDate: new Date(2023, 5, 7),
    backDate: new Date(2023, 5, 12),
    image: 'assets/photos/pologne/pologne1.jpg',
    imageGalerie: [
      {
        id: 1,
        titre: 'Pologne,désert avec des chameaux',
        picture: 'src/assets/photos/pologne/pologne2.jpg',
      },
      {
        id: 2,
        titre: 'Pologne, désert la nuit , des gens autours de feu',
        picture: 'src/assets/photos/pologne/pologne3.jpg',
      },
      {
        id: 3,
        titre: 'Pologne, désert la nuit , des gens autours de feu',
        picture: 'src/assets/photos/pologne/pologne4.jpg',
      },
    ],
    voyage:['xx'],
    description: [
      'Classée au Patrimoine mondial de l’UNESCO dès 1978, ville de légendes et de monuments inestimables, Cracovie est aussi une ville qui sait faire la fête et enchante au premier regard.\nLe quartier de Kazimierz, qui jouxte la vieille ville, avait été - du XIVe eu XIXe siècle une ville indépendante,  Pour les habitants et les touristes, Kazimierz, c’est avant tout un salon avec ses clubs, ses pubs et ses restaurants dont certains proposent des plats traditionnels casher.',
    ],
    avisPositive: [
      'Très beau panorama sur Cracovie et les montagnes',
      'la forteresse de Barbacana',
      "Cracovie est une ville chargée d'histoire",
    ],
    avisNegatif: [
      'les chambres bruillants',
      "Il est recommmandé de ne pas boire l'eau du robinet",
    ],
    conseil: ['vv'],
  },
  {
    id: 3,
    country: 'Japon',
    city: 'Tokyo',
    goDate: new Date(2023, 6, 5),
    backDate: new Date(2023, 6, 12),
    image: 'assets/photos/japon/japon.jpg',
    imageGalerie: [
      {
        id: 1,
        titre: 'Japon, rue avec 2 femmes traditionnelles',
        picture: 'src/assets/photos/japon/japon2.jpg',
      },
      {
        id: 2,
        titre: 'Japon,...',
        picture: 'src/assets/photos/japon/japon3.jpg',
      },
      {
        id: 3,
        titre: 'Japon,...',
        picture: 'src/assets/photos/japon/japon4.jpg',
      },
      {
        id: 3,
        titre: 'Japon,...',
        picture: 'src/assets/photos/japon/japon5.jpg',
      },
    ],
    voyage:['xx'],
    description: [
      'Classée au Patrimoine mondial de l’UNESCO dès 1978, ville de légendes et de monuments inestimables, Cracovie est aussi une ville qui sait faire la fête et enchante au premier regard.\nLe quartier de Kazimierz, qui jouxte la vieille ville, avait été - du XIVe eu XIXe siècle une ville indépendante,  Pour les habitants et les touristes, Kazimierz, c’est avant tout un salon avec ses clubs, ses pubs et ses restaurants dont certains proposent des plats traditionnels casher.',
    ],
    avisPositive: [
      'Très beau panorama sur Cracovie et les montagnes',
      'la forteresse de Barbacana',
      "Cracovie est une ville chargée d'histoire",
    ],
    avisNegatif: [
      'les chambres bruillants',
      "Il est recommmandé de ne pas boire l'eau du robinet",
    ],
    conseil: ['vv'],
  },
  {
    id: 4,
    country: 'Australie',
    city: 'Sydney',
    goDate: new Date(2023, 7, 12),
    backDate: new Date(2024, 7, 29),
    image: 'assets/photos/australie/australie.jpg',
    imageGalerie: [
      {
        id: 1,
        titre: 'Australie,les koalas',
        picture:  'assets/photos/australie/australie2.jpg',
      },
      {
        id: 2,
        titre: 'Australie,la montagne rouge',
        picture: 'assets/photos/australie/australie3.jpg',
      },
      {
        id: 3,
        titre: "Australie,bord d'océan",
        picture:'assets/photos/australie/australie4.jpg',
      },
      {
        id: 4,
        titre: 'Afrique du Sud,des montagnes avec une cascade',
        picture: 'assets/photos/australie/australie5.jpg',
      },
      {
        id: 5,
        titre: 'Afrique du Sud,paysage des montagnes et des champs ',
        picture: 'assets/photos/australie/australie6.jpg',
      },
    ],
    voyage:[
      "S’imprégner de la culture millénaire des Aborigènes en contemplant un coucher de soleil à Uluru. Partir sur les traces de Crocodile Dundee en explorant les espaces vierges du Kimberley. Marcher sur les sentiers apaisants de Tasmanie, et voir plus de wallabies que de randonneurs.",
      "Partir en road-trip sur la Great Ocean Road et se sentir petit devant les falaises magistrales.Chercher le meilleur spot de surf sur la côte Est. S’émerveiller devant les fonds multicolores de la Grande Barrière de Corail. ",
    ],
    
    description: [
      "L’Australie est une terre de contraste située à l’autre bout du monde, regorgeant de trésors. Entre la beauté sauvage de ses milliers de paysages, sa faune et sa flore uniques au monde, ses richesses naturelles et culturelles exceptionnelles, l’Australie est une destination exceptionnelle à visiter au moins une fois dans sa vie.",
      "L’Australie, de part sa large étendu, dispose de paysages aussi différents que fascinants.",
    ],
    avisPositive: [
      "Australiens sympas et accueillants",
      "Plages magnifiques",
      'Sentiment de liberté ',
      'Beauté et diversité des paysages ',
    ],
    avisNegatif: [
      "Coût de la vie et des activités",
      "Nourriture sans grand intérêt",
      "Distances très longues",
    ],
    conseil: [
      'Calculer son budget sur place, car le coût de la vie élevé',
      'protégez-vous du soleil ',
    ],
  },
    
  {
    id: 5,
    country: 'Afrique du Sud',
    city: 'Cape Town',
    goDate: new Date(2023, 8, 12),
    backDate: new Date(2024, 8, 29),
    image: 'assets/photos/afriqueDuSud/afrique.jpg',
    imageGalerie: [
      {
        id: 1,
        titre: 'Afrique du Sud, des elephants',
        picture: 'assets/photos/afriqueDuSud/afrique2.jpg',
      },
      {
        id: 2,
        titre: 'Afrique du Sud,paysage avec le bord de la mer',
        picture: 'assets/photos/afriqueDuSud/afrique3.jpg',
      },
      {
        id: 3,
        titre: 'Afrique du Sud,des zebres',
        picture: 'assets/photos/afriqueDuSud/afrique4.jpg',
      },
      {
        id: 4,
        titre: 'Afrique du Sud,des montagnes avec une cascade',
        picture: 'assets/photos/afriqueDuSud/afrique5.jpg',
      },
      {
        id: 5,
        titre: 'Afrique du Sud,paysage des montagnes et des champs ',
        picture: 'assets/photos/afriqueDuSud/afrique6.jpg',
      },
    ],
    voyage:[
      "Savane vierge abritant une véritable arche de Noé, plaines de baobabs, plages de rêve ou dunes dorées, légendes de la reine de Saba et du roi Salomon... Partir en Afrique, c’est à la fois retrouver le berceau de l'humanité et arpenter une terre jeune, créative, dans une mosaïque de paysages grandioses infiniment variés. Dans cet ailleurs sauvage qui n’en finit pas de fasciner, on rêve du plus beau des voyages.",
      "Un circuit accompagné au plus près des animaux, un voyage sur mesure à la rencontre de peuples aux rites ancestraux, un séjour en camp de luxe dans l’esprit d’Out of Africa... ",
    ],
    
    description: [
      "Afrique du Sud réserve de belles surprises ! C'est un grand pays (2 fois plus grand que la France). Entre mer et montagne, l'Afrique du Sud profite d'un climat agréable toute l’année, avec des températures variant entre 18 °C et 30 °C en moyenne.",
      ' Découvrez des décors naturels majestueux tels que le Blyde River Canyon avec ses falaises et ses cascades, le cap de Bonne-Espérance, ou le Jardin botanique de Kirstenbosch au Cap. Plongez dans la riche histoire de Johannesburg et passez par le parc Kruger pour vivre un safari hors du temps. En circuit sur la terre ou sur l’eau, votre séjour vous mène vers les plus beaux recoins de l’Afrique du Sud. Tout près, d’autres destinations merveilleuses vous attendent : le Swaziland, la Namibie, le Botswana.',
    ],
    avisPositive: [
      "Sa diversité de paysages et de nature. ",
      "Très beau voyage avec de belles prestations.",
      'Pour sa gastronomie variée ',
      'Pour vivre des aventures insolites et hors du commun ',
    ],
    avisNegatif: [
      "La communication lors de ce voyage est à revoir...",
      "Il est recommmandé de ne pas boire l'eau du robine",
    ],
    conseil: [
      'Faites preuve d’une grande prudence en raison du nombre élevé de crimes.',
    ],
  },
];
