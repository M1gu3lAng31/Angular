import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Nombre:string="Miguel Angel Garcia Avila"

  public numeros:Array<number>=[0,1,2,3,4,5,6,7,8,9,10]

  public pi:number=Math.PI;

  public porcentaje:number=0.2445;

  public salario:number=12345;

  public fecha=new Date();

  public persona={
    nombre: "Miguel",
    edad: 24,
    direccion:{
      calle: "San Geronimo",
      numero: 220
    }
  }
  
  public nombre2:string='miGuEl aNgeL GarCia AvILa'

  public activar:boolean=true;

  public video:string="ZnKvQbpDYXU"

}
