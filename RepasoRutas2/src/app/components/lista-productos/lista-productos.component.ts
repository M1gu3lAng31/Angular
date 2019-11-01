import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  public ListaProductos:Array<any>=[]

  public mandarInformacion(idProducto){

    this._router.navigate(['informacion-producto',idProducto])
    console.log(idProducto);
    

  }
  
  public obtenerPorcentaje(raiting){
   let porcentajeEstrella=((raiting*100)/5);
   return  `${porcentajeEstrella}%`

  }

  constructor(private _ProductoService:ProductoService, private _router:Router) { }

  ngOnInit() {
    AOS.init();
    this.ListaProductos=this._ProductoService.ReturnListaProductos();
    console.log(this.ListaProductos);
    
  }

  

}
