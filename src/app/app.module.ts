import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import { ClientesService } from './services/clientes/clientes.service';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, FooterComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
