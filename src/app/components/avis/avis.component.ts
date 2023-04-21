import { Component, Input } from '@angular/core';
import { IVOYAGES, IVoyage } from 'src/app/parametre.mock';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent {
  voyage: IVoyage = IVOYAGES[IVOYAGES.length - 1];
  @Input() titre!: string;
}
