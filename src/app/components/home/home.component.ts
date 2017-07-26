import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wo-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit { 
  modoVista: string = 'otro';
  
  constructor() { }

  ngOnInit() {
  }

}
