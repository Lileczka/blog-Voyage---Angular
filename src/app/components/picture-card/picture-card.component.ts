import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVOYAGES, IVoyage } from 'src/app/parametre.mock';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.css']
})
export class PictureCardComponent {
  voyage: IVoyage = IVOYAGES[IVOYAGES.length - 1];
  
  id: string = '';
  image: string = '';
  country: string = '';
  city: string = '';
  
constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.image = params['image'];
      this.voyage.image = params['image'] || '';
      
    });
  }
}


