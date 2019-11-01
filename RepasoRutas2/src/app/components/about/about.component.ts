import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public boton(){

  Swal.fire({
    title: 'Gracias por vistar la pagina.',
    width: 300,
    padding: '3em',
    // background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("assets/images/nyan-cat.gif")
      center left
      no-repeat
    `
  })
  console.log('holi');
  
}

constructor() { }

  ngOnInit() {
  }

}
