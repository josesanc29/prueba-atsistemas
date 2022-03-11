import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
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
  typeSelected: string;

  constructor(private language: LanguageService,
              private movieService: MoviesService,
              private spinner: NgxSpinnerService,
              public translate: TranslateService) {
                this.typeSelected = 'ball-fussion';
              }

  ngOnInit(): void {
    this.getCompanies();
    this.getPeliculas();
  }
  // tslint:disable-next-line:typedef
  getCompanies(){
    this.spinner.show();
    this.movieService.getListCompanies().subscribe((listCompanies) => {
      this.spinner.hide();
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
