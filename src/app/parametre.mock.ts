export interface IVoyage {
    id: number;
    country: string;
    city: string;
    goDate?: Date | null;
    backDate?: Date | null;
    image: string;
    imageGalerie: IimageGalerie[];
    description: string[];
    avisPositive: string[];
    avisNegatif: string[];
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
      image:'assets/photos/maroc/maroc1.jpg', 
      imageGalerie:[
      {
        id:1,
        titre: "Maroc,désert avec des chameaux",
        picture:'assets/photos/marock2.jpg'
      },
      {
        id:2,
        titre: "Maroc, désert la nuit , des gens autours de feu",
        picture:'assets/photos/marock3.jpg'
      },
    ],
      description:["Marrakech... rien que son nom permet de s'évader et promet tout un programme.\n Marrakech, également appelée la ville rouge est une destination phare du Maroc. \nEt pour cause : ville animée, de culture, de divertissements, d'histoire, d'architecture, c'est un lieu où tout est possible. \nIl existe en effet différents types de séjour : voyage romantique pour les couples, voyage en famille, voyage culturel, voyage insolite... \nMarrakech est l'une des rares destinations réunissant les différents critères exigés par ces profils de voyageurs diamétralement opposés. \nSon histoire intense laisse une grande place à la culture dans cette ville que l'on connaît aussi bien sous le nom de ville rouge que ville ocre ou perle du sud. Ses paysages dont la beauté est à vous couper le souffle promettent de forts moments de romantisme. Son caractère permet quant à lui à ses visiteurs de ne pas s'ennuyer une seconde entre l'animation de ses souks ou les spectacles nocturnes dans les différents quartiers de la ville."],
      avisPositive:["L'ancienne cité jardin a conservé la tradition de somptueux espaces verts.","hôtel très sympa","équipe d'animation excellente"," Beaucoup de lieux touristiques accessibles à pied."],
      avisNegatif:["les chambres bruillants","Il est recommmandé de ne pas boire l'eau du robine"],
  },
  {
    id: 2,
    country: 'Pologne',
    city: 'Cracovie',
    goDate: new Date(2023, 5, 7),
    backDate: new Date(2023, 5, 12),
    image:'assets/photos/pologne/pologne1.jpg',
    imageGalerie:[
      {
        id:1,
        titre: "Pologne,désert avec des chameaux",
        picture:'src/assets/photos/pologne/pologne2.jpg'
      },
      {
        id:2,
        titre: "Pologne, désert la nuit , des gens autours de feu",
        picture:'src/assets/photos/pologne/pologne3.jpg'
      },
      {
        id:3,
        titre: "Pologne, désert la nuit , des gens autours de feu",
        picture:'src/assets/photos/pologne/pologne4.jpg'
      },
    ],
   
    description:["Classée au Patrimoine mondial de l’UNESCO dès 1978, ville de légendes et de monuments inestimables, Cracovie est aussi une ville qui sait faire la fête et enchante au premier regard.\nLe quartier de Kazimierz, qui jouxte la vieille ville, avait été - du XIVe eu XIXe siècle une ville indépendante,  Pour les habitants et les touristes, Kazimierz, c’est avant tout un salon avec ses clubs, ses pubs et ses restaurants dont certains proposent des plats traditionnels casher."],
    avisPositive:["Très beau panorama sur Cracovie et les montagnes","la forteresse de Barbacana","Cracovie est une ville chargée d'histoire",],
    avisNegatif:["les chambres bruillants","Il est recommmandé de ne pas boire l'eau du robine"],
},
{
  id: 3,
  country: 'Japon',
  city: 'Tokyo',
  goDate: new Date(2023, 6, 5),
  backDate:new Date(2023, 6, 12),
  image:'assets/photos/japon/japon.jpg',
  imageGalerie:[
    {
      id:1,
      titre: "Japon, rue avec 2 femmes traditionnelles",
      picture:'src/assets/photos/japon/japon2.jpg'
    },
    {
      id:2,
      titre: "Japon,...",
      picture:'src/assets/photos/japon/japon3.jpg'
    },
    {
      id:3,
      titre: "Japon,...",
      picture:'src/assets/photos/japon/japon4.jpg'
    },
    {
      id:3,
      titre: "Japon,...",
      picture:'src/assets/photos/japon/japon5.jpg'
    },
  ],
  
  description:["Classée au Patrimoine mondial de l’UNESCO dès 1978, ville de légendes et de monuments inestimables, Cracovie est aussi une ville qui sait faire la fête et enchante au premier regard.\nLe quartier de Kazimierz, qui jouxte la vieille ville, avait été - du XIVe eu XIXe siècle une ville indépendante,  Pour les habitants et les touristes, Kazimierz, c’est avant tout un salon avec ses clubs, ses pubs et ses restaurants dont certains proposent des plats traditionnels casher."],
  avisPositive:["Très beau panorama sur Cracovie et les montagnes","la forteresse de Barbacana","Cracovie est une ville chargée d'histoire",],
  avisNegatif:["les chambres bruillants","Il est recommmandé de ne pas boire l'eau du robine"],
},
{
  id: 4,
  country: 'Afrique du Sud',
  city: 'Cape Town',
  goDate: new Date(2023, 7, 12),
  backDate: new Date(2024, 7, 29),
  image:'assets/photos/afriqueDuSud/afrique.jpg',
  imageGalerie:[
    {
      id:1,
      titre: "Afrique du Sud, des elephants",
      picture:'assets/photos/afriqueDuSud/afrique2.jpg'
    },
    {
      id:2,
      titre: "Afrique du Sud,paysage avec le bord de la mer",
      picture:'assets/photos/afriqueDuSud/afrique3.jpg'
    },
    {
      id:3,
      titre: "Afrique du Sud,des zebres",
      picture:'assets/photos/afriqueDuSud/afrique4.jpg'
    },
    {
      id:4,
      titre: "Afrique du Sud,des montagnes avec une cascade",
      picture:'assets/photos/afriqueDuSud/afrique5.jpg'
    },
    {
      id:5,
      titre: "Afrique du Sud,paysage des montagnes et des champs ",
      picture:'assets/photos/afriqueDuSud/afrique6.jpg'
    },
  ],
  description:[
    "Voyager Afrique du Sud réserve de belles surprises !",
    " L’Afrique du sud est un grand pays (2 fois plus grand que la France)."
  ],
  avisPositive:["Sa diversité de paysages et de nature ","Pour découvrir des villes qui sont marquées par l’histoire et une culture forte comme Johannnesburg ou encore le Cap","Pour sa gastronomie variée ","Pour vivre des aventures insolites et hors du commun comme l’observation des baleines à bosse, un survol en hélicoptère au-dessus de la ville du Cap, un vol en parapente, une initiation au surf, un cours de cuisine avec un Sud-africain, visiter Soweto à vélo",],
  avisNegatif:["les chambres bruillants","Il est recommmandé de ne pas boire l'eau du robine"],
}
];

