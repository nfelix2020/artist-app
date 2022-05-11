import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../Artist';

@Component({
  selector: 'app-artist-biography',
  templateUrl: './artist-biography.component.html',
  styleUrls: ['./artist-biography.component.css']
})
export class ArtistBiographyComponent implements OnInit {

  @Input() chosenArt: Artist

  constructor() { }

  ngOnInit(): void {
  }

}
