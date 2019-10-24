import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {


  public loading:boolean=true;
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.loading=false;
       } ,2000);
       
  }

}
