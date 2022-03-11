import { NgxSpinnerService } from 'ngx-spinner';
import { Actors } from './../../../movies/models/actores.interface';
import { Peliculas } from './../../../movies/models/peliculas.interface';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MoviesService } from 'src/app/features/movies/services/movies.service';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-list-actors',
  templateUrl: './list-actors.component.html',
  styleUrls: ['./list-actors.component.css']
})
export class ListActorsComponent implements OnInit {
  peliculas: Peliculas[] = [];
  actors: Actors[] = [];
  typeSelected: string;

  constructor(private language: LanguageService,
              private movieService: MoviesService,
              private spinner: NgxSpinnerService,
              public translate: TranslateService){
                this.typeSelected = 'ball-fussion';
              }

  ngOnInit(): void {
    this.getActors();
    this.getPeliculas();
  }

  // tslint:disable-next-line:typedef
  getActors(){
    this.spinner.show();
    this.movieService.getListActors().subscribe((listActors) => {
      this.spinner.hide();
      this.actors = listActors;
    });
  }

  // tslint:disable-next-line:typedef
  getPeliculas(){
    this.movieService.getListMovies().subscribe((listMovies) => {
      console.log('listado de peliculas ', listMovies);
      this.peliculas = listMovies;
    });
  }


}
