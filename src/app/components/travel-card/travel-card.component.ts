import { Component, Input } from '@angular/core';
import { IVOYAGES, IVoyage } from 'src/app/parametre.mock';

@Component({
  selector: 'app-travel-card',
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.css']
})
export class TravelCardComponent {
  voyage: IVoyage = IVOYAGES[IVOYAGES.length - 1];
  @Input() titre!: string;
  @Input() typeAffichage!: string;
}
