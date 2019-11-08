import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { appRouting } from './components/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { ArtistComponent } from './components/artist/artist.component';
import { DomSanatizerPipe } from './pipes/dom-sanatizer.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    NoImagePipe,
    ArtistComponent,
    DomSanatizerPipe,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
