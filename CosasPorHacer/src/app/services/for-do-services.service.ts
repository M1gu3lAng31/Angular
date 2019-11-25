import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForDoServicesService {

  private urlGlobal='http://10.2.47.15:5000';

  public postThing(thing){

    let url=`${this.urlGlobal}/v1/things`
    return this.http.post(url, thing)

  }


  public getThing():Observable<object>{

    let url=`${this.urlGlobal}/v1/things`
    return this.http.get(url);
  }

  constructor(private http:HttpClient) { }
}
