import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wo-app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent implements OnInit {
  
  log(x){
    console.log(x);
  }

  constructor() { }

  ngOnInit() {
  }

}
