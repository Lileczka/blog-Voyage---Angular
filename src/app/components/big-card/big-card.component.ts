import { Component } from '@angular/core';
import { IVOYAGES, IVoyage } from 'src/app/parametre.mock';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  voyage: IVoyage = IVOYAGES[IVOYAGES.length - 1];
}


