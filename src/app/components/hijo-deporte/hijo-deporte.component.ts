import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-deporte',
  templateUrl: './hijo-deporte.component.html',
  styleUrl: './hijo-deporte.component.css'
})
export class HijoDeporteComponent {
  @Input() sport!: string;

  @Output() seleccionarFavoritoPadre: EventEmitter<any> = new EventEmitter();

  seleccionarFavoritoHijo(): void {
    this.seleccionarFavoritoPadre.emit(this.sport);
  }
}
