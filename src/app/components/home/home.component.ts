import {Component} from '@angular/core';

import { ClientesService } from './../../services/clientes/clientes.service';

@Component({
    selector: 'wo-app-home', //<wo-app-home>
    template: `<h2>Yo soy {{ 'Componente:' + this.nombre }}</h2>
              <img [src]="banner" />
              <p>Creado el {{ queDiaEsHoy() }}</p>
              <ul>
                <li *ngFor="let cliente of clientes">
                  {{ cliente }}
                </li>
              </ul>
              <button class="btn btn-primary" [class.active]="isActive">Guardar</button>
              <button class="btn" [style.backgroundColor]="isActive ? 'blue' : 'white' ">Guardar</button>
              <button class="btn btn-info" (click)="alertar($event)">Alertar</button>
              <input #usuario (keyup.enter)="onEnterPresionado(usuario.value)"/>`
})
export class HomeComponent{
    nombre: string = 'Home';
    clientes: string[];
    banner: string = 'http://lorempixel.com/728/90/';
    isActive: boolean = true;

    onEnterPresionado(usuario:string){
        console.log('ENTER fue presionado, el nombre ingresado es:'+usuario);
    }

    alertar($event){
        alert('Hola');
        console.log($event);
    }

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
