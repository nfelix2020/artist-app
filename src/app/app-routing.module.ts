import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { NewArtistComponent } from './new-artist/new-artist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', component:ArtistListComponent,
  children: [
    {path: 'artist/:id', component: ArtistDetailsComponent}
  ]
},
{path:'new-artist', component: NewArtistComponent },
// {path: '', redirectTo:'artists', pathMatch:'full'},
{path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
