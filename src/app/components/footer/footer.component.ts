import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wo-app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  curso = {
    nombre: 'Desarrollo en Angular',
    rating: 4.97845,
    estudiantes: 132456,
    precio: 1200,
    fechaInicio: new Date(2017, 7, 24)
  }

  constructor() {
    console.log(this.curso);
  }

  ngOnInit() {
  }

}
