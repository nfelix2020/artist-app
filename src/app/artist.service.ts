import { Injectable } from '@angular/core';
import { Artist } from './Artist';
import { ARTISTS } from './mock-artists';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor( private messageService: MessageService) { }

  // getArtists (): Artist[] {
  //   return ARTISTS;
  // }
  
getArtists(): Observable<Artist[]>{
  const artists= of(ARTISTS)
  this.messageService.add('ArtistService: artists fetched successfull')
  return artists
}

}




