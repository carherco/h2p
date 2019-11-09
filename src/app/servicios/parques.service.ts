import { Injectable } from '@angular/core';
import { PARQUES } from 'src/app/data/parques';
import { Parque } from 'src/app/model/parque';

@Injectable({
  providedIn: 'root'
})
export class ParquesService {

  constructor() { }

  get(): Parque[] {
    return PARQUES;
  }

}
