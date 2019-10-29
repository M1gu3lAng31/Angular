import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { appRouting } from './app.routes';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { InformacionHeroeComponent } from './components/informacion-heroe/informacion-heroe.component';
import { BuscarheroeComponent } from './components/buscarheroe/buscarheroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    LoadingComponent,
    InformacionHeroeComponent,
    BuscarheroeComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
