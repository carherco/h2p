import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  contacto = {
    nombre: 'h2p',
    email: 'h2p@h2p.com',
    direccion: 'Avenida de ',
    telefono: '111-222-333-444'
  };

  constructor() {
    setTimeout(
      () => this.contacto.nombre = 'hack2progress',
      3000
    );
  }

  ngOnInit() {
  }

  cambiarNombre() {
    this.contacto.nombre = 'Hack2Progress';
  }

}
