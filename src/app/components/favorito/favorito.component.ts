import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wo-app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.sass']
})
export class FavoritoComponent implements OnInit {
  @Input('esFavorito') esSelecionado: boolean;
  @Output('change') click = new EventEmitter();

  onClick(){
    this.esSelecionado = !this.esSelecionado;
    this.click.emit(this.esSelecionado);
  }

  constructor() { 
  }

  ngOnInit() {
  }
}
