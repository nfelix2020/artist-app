import { Song } from "./Song";

export class Artist {
    id:number;
    fullName:string;
    albumName:string;
    recentSongReleased:string;
    image: string;
    details:string;
    songs: Song[];
}