import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FavoritoComponent } from './components/favorito/favorito.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
