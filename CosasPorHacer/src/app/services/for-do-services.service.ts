import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ForDoServicesService {

  private urlGlobal='http://10.2.47.15:5000';

  public postThing(thing){

    let url=`${this.urlGlobal}/v1/things`
    return this.http.post(url, thing)

  }

  constructor(private http:HttpClient) { }
}
