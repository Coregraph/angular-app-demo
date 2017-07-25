import {Component} from '@angular/core';

import { ClientesService } from './../../services/clientes/clientes.service';

@Component({
    selector: 'wo-app-home', //<wo-app-home>
    template: `<h2>Yo soy {{ 'Componente:' + this.nombre }}</h2>
              <p>Creado el {{ queDiaEsHoy() }}</p>
              <ul>
                <li *ngFor="let cliente of clientes">
                  {{ cliente }}
                </li>
              </ul>`
})
export class HomeComponent{
    nombre: string = 'Home';
    clientes: string[];

    constructor(service:ClientesService){
        this.clientes = service.getClientes();
    }

    queDiaEsHoy(){
        var today = new Date();
        var dd:any = today.getDate();
        var mm:any = today.getMonth()+1;
        var yyyy:any = today.getFullYear();
        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 
        return dd+'/'+mm+'/'+yyyy;
    }
}
