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
      this.artists= this.artistService.getArtists()
    }
}
