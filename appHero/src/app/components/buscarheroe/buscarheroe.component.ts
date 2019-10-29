import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/router';
import { HeroeService } from '../../services/heroe.service';


@Component({
  selector: 'app-buscarheroe',
  templateUrl: './buscarheroe.component.html',
  styles: []
})
export class BuscarheroeComponent implements OnInit {

  private termino:string="";
  public loading:boolean=true;
  public heroesFiltrados: any =[];

  constructor(private _ActivatedRoute:ActivatedRoute,private _HeroeService:HeroeService,private router:Router) {

    this._ActivatedRoute.params.subscribe((terminoURL)=>{

      this.loading=true;
      this.termino=terminoURL.termino;
      // console.log(this.termino);
      this.heroesFiltrados=this._HeroeService.BuscarHeroePorTermino(this.termino);
      console.log(this.heroesFiltrados);
      this.loading=false;
      
    })
 }

 public MandarInformacion(idHero){
  this.router.navigate(['informacionheroe',idHero])
}

  ngOnInit() {
  }

}
