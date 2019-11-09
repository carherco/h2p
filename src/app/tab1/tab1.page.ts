import { Component } from '@angular/core';
import { Parque } from 'src/app/model/parque';
import { ParquesService } from 'src/app/servicios/parques.service';
import { DistanciaService } from 'src/app/servicios/distancia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  parques: Parque[] = [];
  position = {latitude: 43.4738577, longitude: -3.804267};

  constructor(
    private parquesService: ParquesService,
    private distanciaService: DistanciaService,
    private router: Router
  ) {
    
    // this.parquesService.get().then(
    //   x => {
    //     this.parques = x;
    //     this.calcularDistancias();
    //   }
    // );
 
    this.parquesService.get().subscribe(
      (x: Parque[]) => {
        this.parques = x;
        this.calcularDistancias();
      },
    );
  }

  private calcularDistancias() {
    this.parques = this.parques.map(
      item => {
        const distancia = this.distanciaService.calcDistancia(
          this.position.latitude,
          this.position.longitude,
          item.posicion.lat,
          item.posicion.lon
        );
        return { ...item, distancia };
      }
    );
  }

  irADetalle(parque: Parque) {
    this.parquesService.setParqueSeleccionado(parque);
    this.router.navigate( ['/detalle'] );
  }

}
