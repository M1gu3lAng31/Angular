import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { encode } from 'punycode';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }
  
  private headers:HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer BQBqvi39wgQngOH7auMPm0ytXtWiOR-Xr1uNIouIBNgYiaE4QSfvgeuUQkRef9er7u2Mipw3Eja6S2etLFU'
  })

  private URL:string='https://api.spotify.com/v1'

  public GetNewRelases(){
    return this.http.get(`${this.URL}/browse/new-releases?country=MX&limit=10`,{headers:this.headers});
  }

  public SearchData(termino, type){

    termino=encodeURI(termino);

    let urlSend:string=`${this.URL}/search?q=${termino}&type=${type}&market=MX&limit=9`
    console.log(urlSend);
    
    return this.http.get(urlSend,{headers:this.headers});
  }

  public GetArtistTopTrack(artistId){
      let urlSend:string=`${this.URL}/artists/${artistId}/top-tracks?country=MX`;

      return this.http.get(urlSend,{headers:this.headers});
  }

  public GetArtist(artistId){
    let urlSend:string=`${this.URL}/artists/${artistId}`;

    return this.http.get(urlSend,{headers:this.headers});
  }


}
//https://api.spotify.com/v1/artists/47tuSUJMhsa3twW6wgKdIW
//https://api.spotify.com/v1/search?q=Jose%20Madero&type=track&market=MX&limit=9