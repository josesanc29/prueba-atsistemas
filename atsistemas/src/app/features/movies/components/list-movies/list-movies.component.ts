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
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  peliculas: any[] = [];
  pelicula: any;
  actorsList: Actors[] = [];
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
    this.getData();
  }

  // tslint:disable-next-line:typedef
  getData(){
    this.spinner.show();
    this.movieService.getListActors().subscribe((actors) => {
          this.actorsList = actors;
    });
    this.movieService.getListMovies().subscribe((listMovies: Peliculas[]) => {
      this.spinner.hide();
      listMovies.map((movie) => {
        this.pelicula = {
          id: movie.id,
          duration: movie.duration,
          actors: movie.actors,
          namesActors: [],
          genre: movie.genre,
          imdbRating: movie.imdbRating,
          poster: movie.poster,
          title: movie.title,
          year: movie.year,
        };
        this.pelicula.actors.forEach((ma) => {
          if (this.pelicula.actors.length) {
            this.actorsList.forEach((al) => {
              if (ma === al.id) {
                if (this.peliculas.length <= listMovies.length){
                  this.pelicula.namesActors.push(`${al.first_name} ${al.last_name}`);
                  this.peliculas.push(this.pelicula);
                }
              }
            });
          } else {
            return;
          }
        });
      });
    });
  }

  // tslint:disable-next-line:typedef
  selectMovie(pelicula: Peliculas){
    this.router.navigate(['movie/', pelicula.id]);
  }

  // tslint:disable-next-line:typedef
  addMovie(){
    this.router.navigate(['movie']);
  }

}
