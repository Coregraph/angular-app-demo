import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wo-app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent implements OnInit {
  modosContactos = [
    {id:1, tipo:'Email'},
    {id:2, tipo:'Celular'},
    {id:3, tipo:'SMS'},
    {id:4, tipo:'Llamada a un amigo'}
  ]

  enviar(f){
    console.log(f.value);
  }

  log(x){
    //console.log(x);
  }

  constructor() { }

  ngOnInit() {
  }

}
