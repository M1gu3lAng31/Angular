import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service'

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

  private termino:string="";
  public productosFiltadros:any=[];



  constructor(private _activateRoute:ActivatedRoute, private _router:Router, private _productoService:ProductoService) { 

    this._activateRoute.params.subscribe((terminoURL)=>{
      this.termino=terminoURL.termino;
      this.productosFiltadros=this._productoService.BuscarProductoPorTermino(this.termino);
      console.log(this.productosFiltadros);
      

    })
  }
  
  public obtenerPorcentaje(raiting){
    let porcentajeEstrella=((raiting*100)/5);
    return  `${porcentajeEstrella}%`
 
   }

  public mandarInformacion(idProducto){
    this._router.navigate(['informacion-producto',idProducto])
  }
  ngOnInit() {
  }
}
