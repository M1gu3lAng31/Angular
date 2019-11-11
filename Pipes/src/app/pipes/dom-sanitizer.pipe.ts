import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {

  constructor(private _domSanitizer:DomSanitizer) {}



  transform(value: any, url: string): any {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url+value);

  }

}
