import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-informacion-producto',
  templateUrl: './informacion-producto.component.html',
  styleUrls: ['./informacion-producto.component.css']
})
export class InformacionProductoComponent implements OnInit {

  public productoElegido:any={};

  constructor(private _activateRouter:ActivatedRoute,private _productoService:ProductoService, private _router:Router) { 
    const idProducto=this._activateRouter.snapshot.paramMap.get('id');
    this.productoElegido=this._productoService.buscarProductos(idProducto);
    console.log(this.productoElegido);
  }

  public listaProductos(){
    this._router.navigate(['lista-productos']);
  }

  ngOnInit() {
  }

}
