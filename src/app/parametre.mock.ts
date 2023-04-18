export interface IVoyage {
    id: number;
    country: string;
    city: string;
    goDate?: Date | null;
    backDate?: Date | null;
    image: string;
    imageGalerie: string[];
    description: string;
    avisPositive: string[];
    avisNegatif: string[];
}

  export const IVOYAGES: IVoyage[] = [
    {
      id: 1,
      country: 'Maroc',
      city: 'Marrakech',
      goDate: new Date(2023, 4, 14),
      backDate: new Date(2023, 4, 24),
      image:'assets/photos/maroc/maroc1.jpg', 
      imageGalerie:['assets/photos/marock2.jpg','assets/photos/marock3.jpg'],
      description:"Marrakech... rien que son nom permet de s'évader et promet tout un programme.\n Marrakech, également appelée la ville rouge est une destination phare du Maroc. \nEt pour cause : ville animée, de culture, de divertissements, d'histoire, d'architecture, c'est un lieu où tout est possible. \nIl existe en effet différents types de séjour : voyage romantique pour les couples, voyage en famille, voyage culturel, voyage insolite... \nMarrakech est l'une des rares destinations réunissant les différents critères exigés par ces profils de voyageurs diamétralement opposés. \nSon histoire intense laisse une grande place à la culture dans cette ville que l'on connaît aussi bien sous le nom de ville rouge que ville ocre ou perle du sud. Ses paysages dont la beauté est à vous couper le souffle promettent de forts moments de romantisme. Son caractère permet quant à lui à ses visiteurs de ne pas s'ennuyer une seconde entre l'animation de ses souks ou les spectacles nocturnes dans les différents quartiers de la ville.",
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
    imageGalerie:['src/assets/photos/pologne2.jpg','src/assets/photos/pologne3.jpg','src/assets/photos/pologne4.jpg'],
    description:"Classée au Patrimoine mondial de l’UNESCO dès 1978, ville de légendes et de monuments inestimables, Cracovie est aussi une ville qui sait faire la fête et enchante au premier regard.\nLe quartier de Kazimierz, qui jouxte la vieille ville, avait été - du XIVe eu XIXe siècle une ville indépendante,  Pour les habitants et les touristes, Kazimierz, c’est avant tout un salon avec ses clubs, ses pubs et ses restaurants dont certains proposent des plats traditionnels casher.",
    avisPositive:["Très beau panorama sur Cracovie et les montagnes","la forteresse de Barbacana","Cracovie est une ville chargée d'histoire",],
    avisNegatif:["les chambres bruillants","Il est recommmandé de ne pas boire l'eau du robine"],
},
{
  id: 3,
  country: 'Japon',
  city: 'Tokyo',
  goDate: new Date(2023, 7, 5),
  backDate:new Date(2023, 8, 2),
  image:'assets/photos/japon/japon.jpg',
  imageGalerie:['src/assets/photos/pologne2.jpg','src/assets/photos/pologne3.jpg','src/assets/photos/pologne4.jpg'],
  description:"Classée au Patrimoine mondial de l’UNESCO dès 1978, ville de légendes et de monuments inestimables, Cracovie est aussi une ville qui sait faire la fête et enchante au premier regard.\nLe quartier de Kazimierz, qui jouxte la vieille ville, avait été - du XIVe eu XIXe siècle une ville indépendante,  Pour les habitants et les touristes, Kazimierz, c’est avant tout un salon avec ses clubs, ses pubs et ses restaurants dont certains proposent des plats traditionnels casher.",
  avisPositive:["Très beau panorama sur Cracovie et les montagnes","la forteresse de Barbacana","Cracovie est une ville chargée d'histoire",],
  avisNegatif:["les chambres bruillants","Il est recommmandé de ne pas boire l'eau du robine"],
},
{
  id: 4,
  country: 'Afrique du Sud',
  city: 'Cape Town',
  goDate: new Date(2023, 12, 22),
  backDate: new Date(2024, 1, 5),
  image:'assets/photos/afriqueDuSud/afrique.jpg',
  imageGalerie:['src/assets/photos/pologne2.jpg','src/assets/photos/pologne3.jpg','src/assets/photos/pologne4.jpg'],
  description:"Classée au Patrimoine mondial de l’UNESCO dès 1978, ville de légendes et de monuments inestimables, Cracovie est aussi une ville qui sait faire la fête et enchante au premier regard.\nLe quartier de Kazimierz, qui jouxte la vieille ville, avait été - du XIVe eu XIXe siècle une ville indépendante,  Pour les habitants et les touristes, Kazimierz, c’est avant tout un salon avec ses clubs, ses pubs et ses restaurants dont certains proposent des plats traditionnels casher.",
  avisPositive:["Très beau panorama sur Cracovie et les montagnes","la forteresse de Barbacana","Cracovie est une ville chargée d'histoire",],
  avisNegatif:["les chambres bruillants","Il est recommmandé de ne pas boire l'eau du robine"],
}
];