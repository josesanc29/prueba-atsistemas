import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/components/home/home.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent},
  {
    path: 'movies', loadChildren: () =>
      import('./features/movies/movies.module').then(m => m.MoviesModule)
    , data: { applicationTitle: 'Peliculas' }
  },
  {
    path: 'actors', loadChildren: () =>
      import('./features/actors/actors.module').then(m => m.ActorsModule)
    , data: { applicationTitle: 'Actores' }
  },
  {
    path: 'actors', loadChildren: () =>
      import('./features/companies/companies.module').then(m => m.CompaniesModule)
    , data: { applicationTitle: 'Compañias' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { }
