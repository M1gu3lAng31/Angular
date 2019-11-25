import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ForDoServicesService } from '../../services/for-do-services.service';
import { contentThing, Thing } from '../../interfaces/thing.interface';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public Formulario:FormGroup;

  public obtenerThing(){
console.log(this.Formulario.value);

this._ForDoThings.postThing(this.Formulario.value).subscribe(
  (data)=>{
  console.log(data);
})
}

  private crearFormulario(){
    this.Formulario= new FormGroup({
      thing: new FormControl(null,[Validators.required,Validators.minLength(5)])
    })

  }

public things:contentThing[]

  public showThing(){
    this._ForDoThings.getThing().subscribe((data:Thing) =>{
      this.things=data.Things
      console.log(data);
    })
  }


  constructor(private _ForDoThings:ForDoServicesService) {

    this.showThing()
    
   }

  ngOnInit() {
    this.crearFormulario();
  }

}
