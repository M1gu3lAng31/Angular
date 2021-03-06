import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: any): any {

    if(value == "null" || value == null){
      // return "../../assets/NoImage.jpg";
      return "../../assets/No-Image-Available.png";
    }
    console.log(value);
    
    return value;
    
    // return null;
  }

}
