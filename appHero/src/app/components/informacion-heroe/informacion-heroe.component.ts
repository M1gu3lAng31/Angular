import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from '../../services/heroe.service';


@Component({
  selector: 'app-informacion-heroe',
  templateUrl: './informacion-heroe.component.html',
  styleUrls: ['./informacion-heroe.component.css']
})
export class InformacionHeroeComponent implements OnInit {
 
  public HeroeFiltrado:any={};
  
  constructor(private ActivatedRouter:ActivatedRoute,private _HeroeService:HeroeService) { 
    
    const idHeroeUrl=this.ActivatedRouter.snapshot.paramMap.get('id');
   this.HeroeFiltrado=this._HeroeService.BuscarHeroes(idHeroeUrl);
    console.log(this.HeroeFiltrado);

    
  }
  
  
  
  
  ngOnInit() {
  
    
  }

  }


