import { Peliculas } from './../../models/peliculas.interface';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  peliculas: any[] = [];
  actors: any[] = [];
  companies: any[] = [];
  loading = false;


  constructor(private language: LanguageService,
              private movieService: MoviesService,
              public translate: TranslateService,
              ) { }

  ngOnInit(): void {
    this.getPeliculas();
    this.getActors();
    this.getCompanies();
  }

  // tslint:disable-next-line:typedef
  getPeliculas(){
    this.movieService.getListMovies().subscribe((listMovies) => {
      console.log('listado de peliculas ', listMovies);
      this.peliculas = listMovies;
    });
  }

  // tslint:disable-next-line:typedef
  getActors(){
    this.movieService.getListActors().subscribe((listActors) => {
      console.log('listado de actores ', listActors);
      this.actors = listActors;
    });
  }

  // tslint:disable-next-line:typedef
  getCompanies(){
    this.movieService.getListCompanies().subscribe((listCompanies) => {
      console.log('listado de compañias ', listCompanies);
      this.actors = listCompanies;
    });
  }

  // tslint:disable-next-line:typedef
  selectMovie(pelicula: Peliculas){
    console.log('pelicula selected ', pelicula);
  }

  // tslint:disable-next-line:typedef
  addMovie(){
    console.log('me has pulsado para añadir una nueva pelicula');
  }

}
