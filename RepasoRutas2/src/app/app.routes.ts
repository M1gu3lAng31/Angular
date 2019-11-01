import { RouterModule, Routes } from '@angular/router';
import { HomeVentasComponent } from '../app/components/home-ventas/home-ventas.component';
import { ListaProductosComponent } from '../app/components/lista-productos/lista-productos.component';
import { InformacionProductoComponent } from './components/informacion-producto/informacion-producto.component';
import { BuscarProductoComponent } from './components/buscar-producto/buscar-producto.component';
import { AboutComponent } from './components/about/about.component';

const routes:Routes=[
    {path: "home-ventas", component: HomeVentasComponent},
    {path: "lista-productos", component: ListaProductosComponent},
    {path: "informacion-producto/:id", component: InformacionProductoComponent},
    {path: "buscar-producto/:termino", component: BuscarProductoComponent},
    {path: "about", component: AboutComponent},
    { path: '**', pathMatch:'full', redirectTo: 'home-ventas'}
    

    // { path: 'home', component: HomeComponent },
];

export const appRouting = RouterModule.forRoot(routes);