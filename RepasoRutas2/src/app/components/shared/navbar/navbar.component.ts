import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {
  
  public EnviarTermino(termino){
    this._router.navigate(['buscar-producto', termino])
  }


  constructor(private _router:Router) { }

  ngOnInit() {
  }

}