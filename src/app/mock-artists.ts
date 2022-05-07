import { Artist } from "./Artist";
import { Song } from "./Song";

export const ARTISTS: Artist []=[
    {
    id:1, 
    fullName:"RIHANNA", 
    albumName: "DOWN THE LOAD",
    recentSongReleased: "Pop & RnB",
    image: "assets/images/Rihanna.png",
    details:`Robyn Rihanna Fenty, dite Rihanna , née le 20 février 1988 à Saint Michael (Barbade), 
    est une chanteuse, parolière, actrice, styliste et femme`,
    songs: [
        {id:1, title:"Diamond", anneDeSortie:"2012", albumName: "Strong", audioFileURL:""},
        {id:2, title:"Diamond2", anneDeSortie:"2014", albumName: "Strong", audioFileURL:""},
        {id:3, title:"Diamond3", anneDeSortie:"2015", albumName: "Strong", audioFileURL:""},
        ]
},
    
    {
    
    id:2, fullName:"BEYONCE",
    albumName: "STRUGGLE FOR LIFE",
    recentSongReleased: "YOU CAN MAKE IT",
    image: "assets/images/Beyonce.jpg",
    details:`Beyoncé  parfois appelée Beyoncé Carter, née Knowles le 4 septembre 1981 à Houston, 
    au Texas, est une chanteuse, compositrice, danseuse`,
    songs:[
        {id:1, title:"Diamond", anneDeSortie:"2012", albumName: "Strong", audioFileURL:""},
        {id:2, title:"Diamond2", anneDeSortie:"2014", albumName: "Strong", audioFileURL:""},
        {id:3, title:"Diamond3", anneDeSortie:"2015", albumName: "Strong", audioFileURL:""},
        ]
},
    {
    id:3,
    fullName:"MEDDY",
    albumName: "INVINCIBLE",
    recentSongReleased: "WINNING LADY",
    image: "assets/images/Meddy.jpg",
    details:`Ngabo Médard Jobert, très connu sous le nom de Meddy, est considéré comme l'un des meilleurs musiciens rwandais. Fort de son succès, 
    cet artiste qui vit entre Kigali et Chicago`,
    songs:[
        {id:1, title:"Diamond", anneDeSortie:"2012", albumName: "Strong", audioFileURL:""},
        {id:2, title:"Diamond2", anneDeSortie:"2014", albumName: "Strong", audioFileURL:""},
        {id:3, title:"Diamond3", anneDeSortie:"2015", albumName: "Strong", audioFileURL:""},
        ]
},
    {
    id:4,
    fullName:"MASAMBA",
    albumName: "UNBREAKABLE",
    recentSongReleased: "GO SLOWLY",
    image: "assets/images/Masamba.jpg",
    details:`Masamba Butera Intore yavukiye i Bujumbura mu Burundi, ku itariki ya 15 Kanama 1969, avuka kuri Sentore, 
    ubwe wari intore, na Mukarugagi, akaba ari ubuheta mu bana icyenda.`,
    songs:[
        {id:1, title:"Diamond", anneDeSortie:"2012", albumName: "Strong", audioFileURL:""},
        {id:2, title:"Diamond2", anneDeSortie:"2014", albumName: "Strong", audioFileURL:""},
        {id:3, title:"Diamond3", anneDeSortie:"2015", albumName: "Strong", audioFileURL:""},
        ]
}
]