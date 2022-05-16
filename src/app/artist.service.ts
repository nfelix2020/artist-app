import { Injectable } from '@angular/core';
import { Artist } from './Artist';
import { ARTISTS } from './mock-artists';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }

  // getArtists (): Artist[] {
  //   return ARTISTS;
  // }
  
getArtists(): Observable<Artist[]>{
  const artists= of(ARTISTS)
  return artists
}

}




