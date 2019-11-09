import { Injectable } from '@angular/core';
import { PARQUES } from 'src/app/data/parques';
import { Parque } from 'src/app/model/parque';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParquesService {

  private parqueSeleccionado: Parque;
  private url = environment.api_url;

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.url);
  }

  setParqueSeleccionado(parque: Parque) {
    this.parqueSeleccionado = parque;
  }

  getParqueSeleccionado(): Parque {
    return this.parqueSeleccionado;
  }

}
