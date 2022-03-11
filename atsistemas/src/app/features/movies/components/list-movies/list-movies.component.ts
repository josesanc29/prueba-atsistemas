import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder } from '@angular/forms';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  peliculas: any[] = [];
  loading = false;


  constructor(private language: LanguageService,
              private movieService: MoviesService,
              public translate: TranslateService,
              ) { }

  ngOnInit(): void {
    this.getPeliculas();
  }

  // tslint:disable-next-line:typedef
  getPeliculas(){
    this.movieService.getListMovies().subscribe((listMovies) => {
      console.log('listado de peliculas ', listMovies);
      this.peliculas = listMovies;
    });
  }

}
