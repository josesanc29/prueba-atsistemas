import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Companies } from 'src/app/features/movies/models/companies.interface';
import { Peliculas } from 'src/app/features/movies/models/peliculas.interface';
import { MoviesService } from 'src/app/features/movies/services/movies.service';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent implements OnInit {
  peliculas: Peliculas[] = [];
  companies: Companies[] = [];

  constructor(private language: LanguageService,
              private movieService: MoviesService,
              public translate: TranslateService) { }

  ngOnInit(): void {
    this.getCompanies();
    this.getPeliculas();
  }
  // tslint:disable-next-line:typedef
  getCompanies(){
    this.movieService.getListCompanies().subscribe((listCompanies) => {
      console.log('listado de compañias ', listCompanies);
      this.companies = listCompanies;
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
