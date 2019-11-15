import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core'
import { DatosPersonasService } from '../../services/datos-personas.service';
import Swal from 'sweetalert2'
import { resolve } from 'url';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public ocultar:boolean=false;

  public prueba(){
    this.ocultar=true;
  }

public datos:any={}

public async MostrarLista(){

  const { value: paises } = await Swal.fire({
    title: 'Selecciona Un Pais',
    input: 'select',
    inputOptions: this._datosPersonas.ListaPaises,
    inputPlaceholder: 'Selecciona Un Pais',

    inputValidator: (value) => {
      return new Promise((resolve) => {
        resolve()
      })
    }
  })
  this.EleccionPais=paises;
  if (paises) {
    Swal.fire(`You selected: ${paises}`)
  }
  console.log(paises);
  
}

public genero:string=""
public EleccionPais:string;
public ActivoA:boolean=true;
public ActivoF:boolean=false;
public ActivoM:boolean=false;

  public CambiarValor(valor){
  
    if(valor=='A'){
      this.ActivoA=true;
      this.ActivoF=false;
      this.ActivoM=false;
      this.genero="";
      // document.getElementById("elInput").focus();
      return 
    }
    if(valor=='F'){
      this.ActivoA=false;
      this.ActivoF=true;
      this.ActivoM=false;
      this.genero="F";
      // document.getElementById("elInput").focus();
      return 
    }
    if(valor=='M'){
      this.ActivoA=false;
      this.ActivoF=false;
      this.ActivoM=true;
      this.genero="M";
      // document.getElementById("elInput").focus();
      return 
    } 
  }

  public colorAleatorio(){
    return Math.floor(Math.random() * this.colores.length);
  }

  public colores:Array<string>=['#33A5FF','#FFD133','#5EDE0F','#00AF7F','#00AF7F','#9D3FCF','#0EAB04','#04AB71','#5A3014','#3E8818','black']

  public color="#00"

  public MensajeError(error:HttpErrorResponse){
    let MsjError=error.error.error
    // Swal.fire({
    //   icon: 'error',
    //   title: 'Oops...',
    //   text: `${MsjError}`,
    //   footer: 'Elige Otro Pais'
    // })
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: `${MsjError}`,
      text: "Elige Otro Pais",
      icon: 'warning',
      confirmButtonText: 'Eligir Otro Pais',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.MostrarLista();
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this.MostrarLista();
      }
    })


  }
   
  public ObtenerDatos(){

    console.log(this.genero);
    this._datosPersonas.DatosPeronas(this.genero,this.EleccionPais).subscribe(
      
      (info:any)=>{
      this.color=this.colores[this.colorAleatorio()]
      this.datos=info;
      console.log(this.datos);

      
    },
    (err)=>{
this.MensajeError(err);
    }
    
    
    
    
    );
  }
  
  constructor(private _datosPersonas:DatosPersonasService) {

// this._datosPersonas.DatosPeronas(this.genero,this.EleccionPais).subscribe((info:any)=>{
  
//       this.datos=info;
//       console.log(this.datos);
//       document.getElementById("espacio").focus();
//       this.ocultar=true;
//     });
 
  }

  ngOnInit() {
  }

  @HostListener("document:keypress",["$event"])
    KeyBoarEvent(event){
      if(event.code!="Space")return
      this.ocultar=true;
      this.ObtenerDatos();
    }
}

