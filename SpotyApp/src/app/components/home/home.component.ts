import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private _spotifyService:SpotifyService) { 
    
    this._spotifyService.GetNewRelases().subscribe((relases:any)=>{
      this.NewRelases=relases.albums.items;
      console.log(this.NewRelases);
    })
    
  }
  
  public NewRelases:Array<any>=[];


  ngOnInit() {
  }

}
