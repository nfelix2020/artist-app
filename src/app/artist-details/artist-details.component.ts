import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../Artist';
import { ARTISTS } from '../mock-artists';


@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {

  constructor() { }

  artists=ARTISTS


  @Input() chosenArtist: Artist  //to receive data from Parent
  
  ngOnInit(): void {
  }

}
