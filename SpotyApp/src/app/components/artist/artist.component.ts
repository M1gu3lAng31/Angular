import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  public ArtistId:string="";

  public loading:boolean=true;

  public topTrack:any;              
  public artist:any;                  


  constructor(private _spotifyService:SpotifyService, private _activatedRoute:ActivatedRoute) { 

   this.ArtistId = this._activatedRoute.snapshot.paramMap.get('id')

    this._spotifyService.GetArtistTopTrack(this.ArtistId).subscribe((data:any)=>{
      
      this._spotifyService.GetArtist(this.ArtistId).subscribe((dataArtist)=>{
        this.artist=dataArtist;
        console.log(this.artist)
        this.loading=false;
      })
      this.topTrack=data.tracks;
      console.log(this.topTrack)
      
      // setTimeout(()=>{
      // } ,1000);
    })
    
    
    
    
    
  }
  
  
  ngOnInit() {
  }

}
