import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }

];

export const appRouting = RouterModule.forRoot(routes);