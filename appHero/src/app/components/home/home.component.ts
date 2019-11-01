import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {


  public CalificacionEstrellas={
    calificacion:3.8
  }

  public LlenarEstrella(){
  const CantidadEstrellas=5;

  for(const raiting in this.CalificacionEstrellas){
    
    const LlenarEstrellas=(this.CalificacionEstrellas[raiting]/CantidadEstrellas)*100;
    const RedondearEstrellas=`${(Math.round(LlenarEstrellas / 10) * 10)}`;
    document.querySelector(`.${raiting} .stars-inner`).style.width = RedondearEstrellas; 

  }


  }  
  public loading:boolean=true;
  constructor() {

   }

  ngOnInit() {
    setTimeout(()=>{
      this.loading=false;
       } ,2000);
       
  }

}
