import { Component, ElementRef, ViewChild } from '@angular/core';
import Restaurante from './class/restaurante.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'guia-restaurantes';

  listaRestaurantes: Restaurante[] = [];
  @ViewChild('nombre') nombre: ElementRef;
  @ViewChild('ciudad') ciudad: ElementRef;

  agregarRestaurante(nombre: string, ciudad: string) {
    if (nombre === '' || ciudad === '') {
      alert('El nombre del restaurante o la ciudad estan vacios.');
      return;
    }

    if (this.listaRestaurantes.find(x => x.Nombre == nombre && x.Ciudad == ciudad)) {
      alert('Ya existe un Restaurante con el mismo nombre para dicha Ciudad.');
      return;
    }

    this.listaRestaurantes.push({ Nombre: nombre, Ciudad: ciudad });
    this.nombre.nativeElement.value = '';
    this.ciudad.nativeElement.value = '';
  }

}
