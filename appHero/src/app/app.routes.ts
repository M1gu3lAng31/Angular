import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { InformacionHeroeComponent } from './components/informacion-heroe/informacion-heroe.component';
import { BuscarheroeComponent } from './components/buscarheroe/buscarheroe.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'informacionheroe/:id', component: InformacionHeroeComponent },
    { path: 'buscarheroe/:termino', component: BuscarheroeComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);