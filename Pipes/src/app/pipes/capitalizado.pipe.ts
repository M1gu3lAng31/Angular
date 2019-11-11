import { Pipe, PipeTransform } from '@angular/core';
// import { join } from 'path';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas:boolean=true): any {

    value=value.toLowerCase();
  
    let nombres= value.split(' ');
    // console.log(nombres);

    if(todas){
      for (const i in nombres) {
        nombres[i]=nombres[i][0].toUpperCase()+nombres[i].substr(1);
        console.log(nombres);
        
      }
    }  

    return nombres.join(" ");
    // return null;
  }

}
