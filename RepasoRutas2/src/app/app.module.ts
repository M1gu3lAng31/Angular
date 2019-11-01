import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeVentasComponent } from './components/home-ventas/home-ventas.component';
import { NavbarComponent } from '../app/components/shared/navbar/navbar.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { appRouting } from './app.routes';
import { InformacionProductoComponent } from './components/informacion-producto/informacion-producto.component';
import { BuscarProductoComponent } from './components/buscar-producto/buscar-producto.component';
import { AboutComponent } from './components/about/about.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// import { ProductosComponent } from './services/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeVentasComponent,
    NavbarComponent,
    ListaProductosComponent,
    InformacionProductoComponent,
    BuscarProductoComponent,
    AboutComponent
    // ProductosComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
     //=> Basic usage (forRoot can also take options, see details below)
     [SweetAlert2Module.forRoot()],
     //=> In submodules only:
     [SweetAlert2Module],
     //=> In submodules only, overriding options from your root module:
     [SweetAlert2Module.forChild({ /* options */ })]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
