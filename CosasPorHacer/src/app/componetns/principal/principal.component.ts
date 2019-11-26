import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ForDoServicesService } from '../../services/for-do-services.service';
import { contentThing, Thing } from '../../interfaces/thing.interface';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public Formulario:FormGroup;

  public obtenerThing(){

    const Toast = Swal.mixin({
      toast: true,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })
  
console.log(this.Formulario.value);

this._ForDoThings.postThing(this.Formulario.value).subscribe(
  (data)=>{
      
    Toast.fire({
      icon: 'success',
      title: 'Guardado Correctamente'
    })

    this.Formulario.reset();

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

  public cambiarStatus(thing:contentThing){
    thing.complete=!thing.complete;
    console.log(thing);  
    this._ForDoThings.putThing(thing).subscribe(
    (data)=>{},
    (error)=>{console.log(error);
    }
    );
  }

  public eliminarTarea(thingId){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this._ForDoThings.deletThing(thingId).subscribe(()=>{
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        });

      }
    })
    console.log(thingId);
    
  }

  constructor(private _ForDoThings:ForDoServicesService) {

    this.showThing()
    
   }

  ngOnInit() {
    this.crearFormulario();
  }

}
