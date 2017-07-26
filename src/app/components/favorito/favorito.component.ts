import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wo-app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.sass']
})
export class FavoritoComponent implements OnInit {
  @Input('esFavorito') esSelecionado: boolean;

  onClick(){
    console.log(this.esSelecionado);
    this.esSelecionado = !this.esSelecionado;
  }

  constructor() { 
  }

  ngOnInit() {
  }
}
