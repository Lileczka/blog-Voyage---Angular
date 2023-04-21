import { Component, Input} from '@angular/core';

import { IVOYAGES, IVoyage, IimageGalerie} from 'src/app/parametre.mock';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class galerieComponent  {
  voyages: IVoyage[] = IVOYAGES;
  images: IimageGalerie[]= [];
  @Input() titre!: string;
  
  constructor() {
    // Extraction des images de chaque voyage
    this.voyages.forEach((voyage) => {
      this.images.push(...voyage.imageGalerie);
    });
  }

  getImageUrl(image: IimageGalerie): string {
    return image.picture;
  }
  
}

  

