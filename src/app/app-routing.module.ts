import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistListComponent } from './artist-list/artist-list.component';

const routes: Routes = [
  {path:'', component:ArtistListComponent,
  children: [
    {path: 'artist/:id', component: ArtistDetailsComponent}
  ]
},
  // {path:'artist/:id', component:ArtistDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
