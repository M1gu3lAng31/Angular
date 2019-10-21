import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component'; 
import { ServicioComponent }from './components/servicio/servicio.component'
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServicioComponent,
    NosotrosComponent,
    ProyectosComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
