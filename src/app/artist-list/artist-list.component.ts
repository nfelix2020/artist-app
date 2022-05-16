import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../Artist';
import { ArtistService } from '../artist.service';
// import { ARTISTS } from '../mock-artists';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

// artists= ARTISTS

artists: Artist[]=[];

selectedArtist: Artist
artistId: number

isShown: boolean = false ; // hidden by default


  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService ) { }

  ngOnInit(): void {
    // this.artistId= parseInt(this.route.snapshot.params['id']); 
    this.showArtists();
  }

  onSelect(artist: Artist ){
    this.selectedArtist=artist
  }

  toggleShow() {
    this.isShown = ! this.isShown;
    }
  toggleHide() {
    this.isShown =  this.isShown;
    }

    showArtists(): void{
      // this.artists= this.artistService.getArtists()  //This assignement ocurs SYNCHRONOUSLY, alors que la reponse se fait de façon asynchrone
      //the server does not return data instantly, so the response is asynchronous
      //the Observable to emit the array of artists —which could happen now or 
      //several minutes from now. The subscribe() method passes the emitted array to the callback,
      // which sets the component's artists property 
      this.artistService.getArtists().subscribe(data=>{
        this.artists=data

        
      })
    }
}
