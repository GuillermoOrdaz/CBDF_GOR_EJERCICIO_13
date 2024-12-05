import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  mensaje: string = 'Hola mundo';
  nombre: string = 'Guillermo Ordaz Rodríguez';
  edad: number = 21;
  correo: string = 'gordazr2100@ipn.alumno.mx';
}
