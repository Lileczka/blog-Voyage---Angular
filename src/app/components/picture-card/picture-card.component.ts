import { Component } from '@angular/core';
import { IVOYAGES, IVoyage } from 'src/app/parametre.mock';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.css']
})
export class PictureCardComponent {
  voyage: IVoyage = IVOYAGES[IVOYAGES.length - 1];
}
