import { Component} from '@angular/core';
import { IVOYAGES, IVoyage } from 'src/app/parametre.mock';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
//@Input() voyage!: IVoyage[];
voyages: IVoyage[] = IVOYAGES;
}
