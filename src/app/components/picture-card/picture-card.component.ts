import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVOYAGES, IVoyage } from 'src/app/parametre.mock';
import { VoyageService } from 'src/app/voyage.service';
import { combineLatest } from 'rxjs';
@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.css'],
})
export class PictureCardComponent {
  voyage: IVoyage = IVOYAGES[IVOYAGES.length - 1];

  constructor(
    private route: ActivatedRoute,
    private voyageService: VoyageService
  ) {}

  ngOnInit(): void {
    // Souscription aux paramètres de la route et de la requête
    combineLatest([this.route.paramMap, this.route.queryParams]).subscribe(
      ([params, qparams]) => {
        // Récupération de l'ID de la route en tant que nombre
        const id = Number(params.get('id'));
        // Récupération du voyage sélectionné correspondant à l'ID
        this.voyage = this.voyageService.getSelectedVoyage(id);

        // Mise à jour des propriétés du voyage en fonction des paramètres de la requête
        if (qparams['image']) {
          this.voyage.image = qparams['image'];
        }
        if (qparams['city']) {
          this.voyage.city = qparams['city'];
        }
        if (qparams['country']) {
          this.voyage.country = qparams['country'];
        }
        if (qparams['goDate']) {
          this.voyage.goDate = qparams['goDate'];
        }
        if (qparams['backDate']) {
          this.voyage.backDate = qparams['backDate'];
        }
      }
    );
  }
}
