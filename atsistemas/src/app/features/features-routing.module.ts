import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListActorsComponent } from './actors/components/list-actors/list-actors.component';
import { ListCompaniesComponent } from './companies/components/list-companies/list-companies.component';
import { DetailMoviesComponent } from './movies/components/detail-movies/detail-movies.component';
import { ListMoviesComponent } from './movies/components/list-movies/list-movies.component';

const routes: Routes = [
  {
    path: '',
    component: ListMoviesComponent,
    data: { titulo: 'Tabla de peliculas' }
  },
  {
    path: 'movies',
    component: ListMoviesComponent,
    data: { titulo: 'Tabla de peliculas' }
  },
  {
    path: 'new-movie',
    component: DetailMoviesComponent,
    data: { titulo: 'Nueva pelicula' }
  },
  {
    path: 'movies/:id',
    component: DetailMoviesComponent,
    data: { titulo: 'Detalle de la pelicula' }
  },
  {
    path: 'companies',
    component: ListCompaniesComponent,
    data: { titulo: 'Tabla de compañias' }
  },
  {
    path: 'actors',
    component: ListActorsComponent,
    data: { titulo: 'Tabla de actores' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
