import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class MoviesEndpointService {

  constructor() { }
  abstract getListMovies(): Observable<any>;
  abstract search(filtro: any): Observable<any>;
  abstract get(id: number): Observable<any>;
}
