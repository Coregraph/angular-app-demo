import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wo-app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.sass']
})
export class FavoritoComponent implements OnInit {
  @Input('esFavorito') esSelecionado: boolean;
  @Output() change = new EventEmitter();

  onClick(){
    this.esSelecionado = !this.esSelecionado;
    this.change.emit(this.esSelecionado);
  }

  constructor() { 
  }

  ngOnInit() {
  }
}
