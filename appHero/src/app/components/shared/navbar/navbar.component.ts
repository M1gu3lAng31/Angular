import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  public EnviarTermino(termino){
    console.log(termino);
    this.router.navigate(['buscarheroe',termino]);
    
  }

  constructor(private router:Router) { 
  }

  ngOnInit() {
  }

}
