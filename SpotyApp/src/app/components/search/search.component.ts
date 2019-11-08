import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public loading:boolean=true;

  public SearchResults:any=[];

  public SearchFilter:Array<string>=['track', 'artist'];

  public Search(termino, filter){

  
   if(filter=="null" || termino=="" || termino==" ")return

   this._spotiService.SearchData(termino, filter).subscribe((data:any)=>{
     
    if(data.tracks){
      this.SearchResults=data.tracks.items;
    }else{
      this.SearchResults=data.artists.items;
    }
    console.log(this.SearchResults);
    
    
   })
   
  }

  public GoToArtist(AritistId){
    this._router.navigate(['/artist',AritistId])
    console.log(AritistId);
    
  }
  
  constructor(private _spotiService:SpotifyService, private _router:Router) { }
  
  ngOnInit() {
    setTimeout(()=>{
      this.loading=false;
       } ,2000);
  }

}
