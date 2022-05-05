import { Component, OnInit } from '@angular/core';
import { Artist } from '../Artist';
import { ARTISTS } from '../mock-artists';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

artists= ARTISTS
selectedArtist: Artist

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(artist: Artist){
    this.selectedArtist=artist
  }
}
