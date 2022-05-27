import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-artist',
  templateUrl: './new-artist.component.html',
  styleUrls: ['./new-artist.component.css']
})
export class NewArtistComponent implements OnInit {

  url = 'https://img.icons8.com/ios/100/000000/contract-job.png';

  onSelect(event: any){
    if(event.target.files[0]){
      let reader= new FileReader()
      reader.readAsDataURL(event.target.files[0]);
      reader.onload= (event: any) =>{
        this.url= event.target.result;
      }
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
