import {Component} from '@angular/core';

@Component({
    selector: 'wo-app-home', //<wo-app-home>
    template: `<h2>Yo soy {{ 'Componente:' + this.nombre }}</h2>
              <p>Creado el {{ queDiaEsHoy() }}</p>`
})
export class HomeComponent{
    nombre: string = 'Home';

    constructor(){
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
