import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wo-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit { 
  clientes = [
    {id: 48, nombre: 'Hugo'},
    {id: 34, nombre: 'Paco'},
    {id: 21, nombre: 'Luis'}
  ];

  agregarCliente(){
    this.clientes.push({id:95, nombre:'Carlos'});
  }

  modificarCliente(clnt){
    clnt.nombre = 'Camila';
  }

  eliminarCliente(clnt){
    let i = this.clientes.indexOf(clnt);
    this.clientes.splice(i, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
