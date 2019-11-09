import { ParquesService } from './../servicios/parques.service';
import { Component, OnInit } from '@angular/core';
import { Parque } from 'src/app/model/parque';

@Component({
  selector: 'app-detalle-parque',
  templateUrl: './detalle-parque.page.html',
  styleUrls: ['./detalle-parque.page.scss'],
})
export class DetalleParquePage implements OnInit {

  parque: Parque;
  constructor(private parqueService: ParquesService) {
    this.parque = this.parqueService.getParqueSeleccionado();
  }

  ngOnInit() {
  }

}
