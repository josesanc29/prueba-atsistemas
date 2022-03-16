import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesBackendService } from './movies-backend.service';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private backend: MoviesBackendService) { }

  // tslint:disable-next-line:typedef
  getListMovies(){
    return this.backend.getListMoviesData();
  }

  // tslint:disable-next-line:typedef
  getListActors(){
    return this.backend.getListActorsData();
  }

  // tslint:disable-next-line:typedef
  getListCompanies(){
    return this.backend.getListCompaniesData();
  }

  getMovieId(id: number): Observable<any> {
    return this.backend.get(id);
  }

  create(data: FormData): Observable<any> {
    return this.backend.create(data);
  }

}
