import { element } from 'protractor';
import { Companies } from './../../models/companies.interface';
import { Peliculas } from './../../models/peliculas.interface';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/services/language.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Actors } from '../../models/actores.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  peliculas: Peliculas[] = [];
  actors: Actors[] = [];
  namesActors: string[] = [];
  companies: Companies[] = [];
  emptyImage = './../../../../../assets/images/alert7.png';
  loading = false;
  typeSelected: string;


  constructor(private language: LanguageService,
              private movieService: MoviesService,
              public translate: TranslateService,
              private spinner: NgxSpinnerService,
              private router: Router,
              private route: ActivatedRoute,
              ) {
                this.typeSelected = 'ball-fussion';
              }

  ngOnInit(): void {
    this.getActors();
    this.getMovies();
  }

  // tslint:disable-next-line:typedef
  getMovies(){
    this.spinner.show();
    this.movieService.getListMovies().subscribe((listMovies: Peliculas[]) => {
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
  selectMovie(pelicula: Peliculas){
    console.log('pelicula selected ', pelicula);
  }

  // tslint:disable-next-line:typedef
  addMovie(){
    this.router.navigate(['movie']);
  }

}
