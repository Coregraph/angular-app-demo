import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { HomeComponent } from './components/home/home.component';
import { FavoritoComponent } from './components/favorito/favorito.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HomeComponent,
    FavoritoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
