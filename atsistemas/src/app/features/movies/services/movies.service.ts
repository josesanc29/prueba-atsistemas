import { Peliculas } from './../models/peliculas.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MoviesBackendService } from './movies-backend.service';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private backend: MoviesBackendService) { }

  set filter(filtro: Peliculas) {
    this._currentFilter$.next({ ...this.currentFilter, ...filtro });
  }

  // tslint:disable-next-line:variable-name
  private _currentFilter$: BehaviorSubject<Peliculas> | null = new BehaviorSubject<Peliculas>({
    id: null,
    duration: null,
    actors: null,
    namesActors: null,
    genre: null,
    imdbRating: null,
    poster: null,
    title: null,
    year: null
  });
  public get currentFilter$(): Observable<Peliculas> | null {
    return this._currentFilter$.asObservable();
  }
  public get currentFilter(): Observable<Peliculas> | null{
    return this._currentFilter$;
  }

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
