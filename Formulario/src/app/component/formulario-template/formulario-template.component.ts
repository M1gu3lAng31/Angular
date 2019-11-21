import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, NgControlStatus} from '@angular/forms';
import { element } from 'protractor';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styles: []
})
export class FormularioTemplateComponent implements OnInit {

public Formulario:FormGroup;


public CrearFormulario():void{
  this.Formulario= new FormGroup({
    nombre: new FormControl(null, [Validators.minLength(5),Validators.required,, this.NoNumeros]),//
    email:new FormControl(null,[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    mensaje: new FormControl(null,[Validators.minLength(5),Validators.required]),
    contrasena: new FormControl(null, [Validators.required, Validators.minLength(8),Validators.pattern(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/)]),
    contrasenaReafirmar: new FormControl(null,Validators.required)
  })

  this.Formulario.controls.contrasenaReafirmar.setValidators(this.MatchPassword.bind(this))

  this.Formulario.patchValue(this.data)
}

public VerEstadoFormulario():void{
  console.log(this.data);

  this.data=this.Formulario.value;

  console.log(this.data);
  
  
// console.log(this.Formulario.value);

}


private NoNumeros(control:FormControl):{[key:string]:boolean}{

if(control.value==null)return null 

let CaracterControl:Array<string>=control.value.split('');

if(!/^[A-Za-z\s]+$/g.test(control.value)){
  return {ExisteNumero:true}
}
return null

}

private MatchPassword(control:FormControl):{[key:string]:boolean}{
  
if(control.value!=this.Formulario['controls']['contrasena'].value) return {NoIgual:true}

  // console.log(this);
  

  return 
}


private data={
  nombre:'Miguel Angel Garcia',
  email:'migue@gmail.com',
  mensaje:'HOOOOOLAAAAAAAAAA'
  // contrasena:'Migu3lAnge!',
  // contrasenaReafirmar:'Migu3lAnge!'
}

  constructor() { }

  ngOnInit() {
    this.CrearFormulario();
  }

}
