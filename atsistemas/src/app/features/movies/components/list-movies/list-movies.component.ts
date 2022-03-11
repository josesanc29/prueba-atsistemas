import { Peliculas } from './../../models/peliculas.interface';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/services/language.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
  typeSelected: string;


  constructor(private language: LanguageService,
              private movieService: MoviesService,
              public translate: TranslateService,
              private spinner: NgxSpinnerService
              ) {
                this.typeSelected = 'ball-fussion';
              }

  ngOnInit(): void {
    this.getPeliculas();
    this.getActors();
    this.getCompanies();
  }

  // tslint:disable-next-line:typedef
  getPeliculas(){
    this.spinner.show();
    this.movieService.getListMovies().subscribe((listMovies) => {
      this.spinner.hide();
      this.peliculas = listMovies;
    });
  }

  // tslint:disable-next-line:typedef
  getActors(){
    this.movieService.getListActors().subscribe((listActors) => {
      this.actors = listActors;
    });
  }

  // tslint:disable-next-line:typedef
  getCompanies(){
    this.movieService.getListCompanies().subscribe((listCompanies) => {
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
