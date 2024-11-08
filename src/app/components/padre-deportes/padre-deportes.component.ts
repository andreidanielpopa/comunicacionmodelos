import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes',
  templateUrl: './padre-deportes.component.html',
  styleUrl: './padre-deportes.component.css'
})
export class PadreDeportesComponent {
  public deportes: Array<string>;
  public mensaje!: string;

  seleccionarFavoritoPadre(event: any): void {
    console.log('Dato: ' + event);
    this.mensaje = 'Deporte favorito ' + event;
  }

  constructor() {
    this.deportes = ['Basket', 'Furgol', 'Tenis', 'Lol', 'Baloncesto']
  }
}
